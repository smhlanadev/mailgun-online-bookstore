# mailgun-online-bookstore
Send transactional emails using Maligun's API.

This repo contains a .NET API that uses Mailgun's API to send emails that are triggered by actions performed on the UI of an Angular frontend application. The frontend application is a simple online bookstore that displays a list of books that you can buy. It also provides a link to subscribe to a weekly newsletter. The buy and subscribe actions will be used to trigger email notifications.

![Online book store UI](https://imgur.com/E5n3R0v.png)

The .NET API exposes a `POST: Notifications` endpoint that is called on the frontend to send emails when buying or subscribing.

![Notifications endpoind](https://imgur.com/noja274.png)

There are two folders in this repo - `starter` and `complete`. `starter` contains the .NET API and the Angular frontend without the Mailgun integration, and `complete` includes the Mailgun integration.

## Getting Started
Here are the steps you will need to get this project running:
### Prerequisites
- [A Mailgun account](https://signup.mailgun.com/new/signup)
- [Visual Studio and Visual Studio Code](https://visualstudio.microsoft.com/)
- [.NET8](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js](https://nodejs.org/en)

Use a command line interface (cmd, PowerShell etc.) to follow the steps below:
### Step 1. Clone or download this repository
```sh
git clone https://github.com/smhlanadev/mailgun-online-bookstore.git
```
### Step 2. Move into the folder you're interested in
Either
```sh
cd mailgun-online-bookstore/starter
```
or
```sh
cd mailgun-online-bookstore/complete
```
### Step 3. Install the node dependencies
```sh
cd ui
npm install
```
### Step 4. Run the Angular application
```sh
npm start
```
### Step 5. Run the .NET application
Navigate to the `api` folder and open `api.sln` using Visual Studio. Then, run the application.
