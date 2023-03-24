const express = require('express')
const router = express()
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
router.use(bodyParser.urlencoded({
  extended: true
}));
router.listen(3000, () => console.log('Server fired up at port ', 4000))
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

router.post('/sendMail', async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aakashkumaran@gmail.com',
      pass: 'djaclezcxxodxaetr'
    }
  });

  let info = await transporter.sendMail({
    from: 'aakashkumaran@gmail.com',
    to: "aakashkumaran1@gmail.com@gmail.com," + req.body.to,
    subject: "Hello",
    text: "Hello world?"
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

})