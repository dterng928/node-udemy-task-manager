const postmark = require('postmark')

var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY)

const sendWelcomeEmail = (email, name) => {
    client.sendEmail({
        "From": "bhatarasiri.s@beryl8.com",
        "To": email,
        "Subject": "Thanks for joining in!",
        "TextBody": `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
}

const sendCancelationEmail = (email, name) => {
    client.sendEmail({
        "From": "bhatarasiri.s@beryl8.com",
        "To": email,
        "Subject": "Sorry to see you go!",
        "TextBody": `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}