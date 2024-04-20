// Import the required module
const Mailjet = require("node-mailjet");

// Connect to Mailjet using your API keys
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);
console.log( process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE);

// Ensure environment variables are loaded
require("dotenv").config();

// Define the handler function
export default async function handler(req, res) {
  // Use mailjetClient to send emails
  try {
    const request = mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "pilot@mailjet.com",
            Name: "Mailjet Pilot",
          },
          To: [
            {
              Email: "passenger1@mailjet.com",
              Name: "passenger 1",
            },
          ],
          Subject: "Your email flight plan!",
          TextPart:
            "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });

    request
      .then((result) => {
        console.log(result.body);
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).json({ success: false });
      });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(error.statusCode || 500).json({ error: error.message });
  }
}
