using RestSharp;

namespace API.Services
{
    public interface INotificationService
    {
        Task<RestResponse> SendAsync();
    }
}
