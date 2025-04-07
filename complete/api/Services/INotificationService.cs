using API.Models;
using RestSharp;

namespace API.Services
{
    public interface INotificationService
    {
        Task<RestResponse> SendAsync(SendNotificationInput input);
    }
}
