const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pish181@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how it works`
    })
}

const cancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pish181@gmail.com',
        subject: 'account closure',
        text: `Dear ${name}, your account has been deleted from our service`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelationEmail
}