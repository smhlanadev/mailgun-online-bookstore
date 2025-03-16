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
            var request = new RestRequest("/sandbox12598a211a5548cbb3e9332eca6a3ce1.mailgun.org/messages", Method.Post);
            request.AlwaysMultipartFormData = true;
            request.AddParameter("from", "Mailgun Sandbox <postmaster@sandbox12598a211a5548cbb3e9332eca6a3ce1.mailgun.org>");
            request.AddParameter("to", $"{input.Name} <{input.EmailTo}>");
            request.AddParameter("subject", $"Hello {input.Name}");
            request.AddParameter("text", $"Congratulations {input.Name}, you just sent an email with Mailgun! You are truly awesome!");
            var result = await client.ExecuteAsync(request);

            return result;
        }
    }
}
