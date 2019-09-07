var express = require('express');
var router = express.Router();
var  nodeMailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* POST Subscribe page. */
router.post('/subscribe', function(req, res, next) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'riu.global.services@gmail.com',
        pass: 'xyz'
    }
});
let mailOptions = {
    from: '"RIU" <hello@green2go.in>', // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.body, // plain text body
    html: "<b>Thankyou very much for the feedback. <br/ > We'll reach you soon.</b>" // html body
};
console.log(mailOptions)
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return res.send(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});



module.exports = router;
