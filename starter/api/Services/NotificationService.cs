using API.Models;
using RestSharp;

namespace API.Services
{
    public class NotificationService : INotificationService
    {
        private readonly AppSettings _appSettings;

        public NotificationService(AppSettings appSettings)
        {
            _appSettings = appSettings;
        }

        public async Task<RestResponse> SendAsync()
        {
            throw new NotImplementedException();
        }
    }
}
