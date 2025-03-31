using api.Models;
using API.Models;
using RestSharp;
using RestSharp.Authenticators;

namespace API.Services
{
    public class NotificationService : INotificationService
    {
        private readonly AppSettings _appSettings;

        public NotificationService(AppSettings appSettings)
        {
            _appSettings = appSettings;
        }

        public async Task<RestResponse> SendAsync(SendNotificationInput input)
        {
            var options = new RestClientOptions("https://api.mailgun.net/v3")
            {
                Authenticator = new HttpBasicAuthenticator("api", _appSettings.ApiKey)
            };

            var client = new RestClient(options);
            var request = new RestRequest("/sandbox12598a211a5548cbb3e9332eca6a3ce1.mailgun.org/messages", Method.Post)
            {
                AlwaysMultipartFormData = true
            };
            request.AddParameter("from", EmailParameters.FromAddress);
            request.AddParameter("to", $"{input.Name} <{input.EmailTo}>");
            request.AddParameter("template", EmailParameters.Template);
            AddTemplateParameters(request, input);
            var result = await client.ExecuteAsync(request);

            return result;
        }

        private static void AddTemplateParameters(RestRequest request, SendNotificationInput input)
        {
            switch (input.EmailType)
            {
                case EmailType.FirstTimeLogin:
                    break;
                case EmailType.Registration:
                    break;
                case EmailType.Subscription:
                    request.AddParameter("subject", EmailParameters.SubscriptionSubject);
                    var variables = new
                    {
                        name = input.Name,
                        heading = EmailParameters.SubscriptionHeading,
                        body = EmailParameters.SubscriptionBody
                    };
                    request.AddParameter("h:X-Mailgun-Variables", System.Text.Json.JsonSerializer.Serialize(variables));
                    break;
                case EmailType.Purchase:
                    request.AddParameter("subject", EmailParameters.PurchaseSubject);
                    variables = new
                    {
                        name = input.Name,
                        heading = EmailParameters.PurchaseSubject,
                        body = EmailParameters.PurchaseBody.Replace("[Title]", input.BookTitle).Replace("[Author]", input.BookAuthor)
                    };
                    request.AddParameter("h:X-Mailgun-Variables", System.Text.Json.JsonSerializer.Serialize(variables));
                    break;
            }
        }
    }
}
