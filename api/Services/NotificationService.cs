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
            AddTemplateParameters(request, input);
            var result = await client.ExecuteAsync(request);

            return result;
        }

        private static void AddTemplateParameters(RestRequest request, SendNotificationInput input)
        {
            switch(input.EmailType)
            {
                case EmailType.FirstTimeLogin:
                    break;
                case EmailType.Registration:
                    break;
                case EmailType.Subscription:
                    request.AddParameter("subject", EmailParameters.SubscriptionSubject);
                    request.AddParameter("template", EmailParameters.SubscriptionTemplate);
                    request.AddParameter("h:X-Mailgun-Variables", $"{{\"name\": \"{input.Name}\"}}");
                    break;
                case EmailType.Purchase:
                    break;
            }
        }
    }
}
