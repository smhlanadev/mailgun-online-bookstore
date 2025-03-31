namespace api.Models
{
    public static class EmailParameters
    {
        public const string FromAddress = "Mailgun Sandbox <postmaster@sandbox12598a211a5548cbb3e9332eca6a3ce1.mailgun.org>";
        public const string Template = "subscription confirmation";
        public const string SubscriptionSubject = "You’re subscribed to pickAbook’s weekly newsletter!";
        public const string SubscriptionBody = "Thank you for subscribing to pickAbook’s weekly newsletter! 📚 Every week, we’ll bring you the latest book recommendations, exclusive deals, and literary insights straight to your inbox. Stay tuned & happy reading!";
        public const string PurchaseSubject = "Your Order Confirmation - pikAbook";
        public const string PurchaseBody = "Thank you for your purchasing [Title] by [Author]. We hope you enjoy your new read!";
        public const string WelcomeSubject = "Welcome to pickAbook.";
        public const string WelcomeBody = "Thank you for joining pickAbook. Explore a world of books at your fingertips. Happy Reading!";
    }
}
