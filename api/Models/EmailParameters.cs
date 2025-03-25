namespace api.Models
{
    public static class EmailParameters
    {
        public const string FromAddress = "Mailgun Sandbox <postmaster@sandbox12598a211a5548cbb3e9332eca6a3ce1.mailgun.org>";
        public const string SubscriptionTemplate = "subscription confirmation";
        public const string SubscriptionSubject = "You’re subscribed to pickAbook’s weekly newsletter!";
        public const string SubscriptionBody = "Thank you for subscribing to pickAbook’s weekly newsletter! 📚 Every week, we’ll bring you the latest book recommendations, exclusive deals, and literary insights straight to your inbox. Stay tuned & happy reading!";
        public const string SubscriptionHeading = "You’re subscribed to pickAbook’s weekly newsletter!";
        public const string WelcomeHeading = "Welcome to pickAbook!";
        public const string WelcomeTemplate = "Welcome";
        public const string RegistrationTemplate = "Registration";
        public const string PurchaseTemplate = "Purchase";
    }
}
