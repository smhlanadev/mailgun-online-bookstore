using Microsoft.AspNetCore.Mvc;
using API.Services;

namespace API.Controllers.Notifications
{
    [ApiController]
    [Route("[controller]")]
    public class NotificationsController : ControllerBase
    {
        private readonly INotificationService _notificationService;

        public NotificationsController(INotificationService notificationService)
        {
            _notificationService = notificationService;
        }

        [HttpPost(Name = "SendNotification")]
        public async Task<IActionResult> SendAsync()
        {
            return Ok(await _notificationService.SendAsync());
        }
    }
}
