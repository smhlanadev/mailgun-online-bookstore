namespace API.Models
{
    public class SendNotificationInput
    {
        public required string EmailTo { get; set; }
        public required string Name { get; set; }
        public EmailType EmailType { get; set; }
        public string? BookTitle { get; set; }
        public string? BookAuthor { get; set; }
    }
}
