const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

//Email transporter setup

exports.transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}))

