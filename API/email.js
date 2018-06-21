var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var app = express();
var router = express.Router();

router.post('/', (req, res) =>  {
  var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com', // Office 365 server
    port: 587,     // secure SMTP
    ignoreTLS: false,
    requireTLS: true,
    auth: {
      user: 'support@thumbnailconsulting.com',
      pass: 'sCribe577!!'
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  var textBody = `${req.body.name} has contacted us,
  They want; ${req.body.message},
  email them at; ${req.body.email}`
  var htmlBody = `<h1>${req.body.name} has contacted us</h1>
  <h3>They want; ${req.body.message}</h3>
  <h3>email them at; ${req.body.email}</h3>`
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: `Coding Saves <support@thumbnailconsulting.com>`, // sender address
    to: 'kazy297@hotmail.com', // list of recipients
    subject: req.body.subject, // Subject line
    text: textBody, // plaintext body
    html: htmlBody // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.send (error)
    } else {
      res.send('success')
    }
  })
}
