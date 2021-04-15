const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: `${__dirname}/config/.env` });


// Initialize app and PORT
const { PORT } = process.env;
const app = express();

// Parse body
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// Mails transponder
const transporter = nodemailer.createTransport({
  pool: true,
  maxMessages: Infinity,
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});


app.post('/api/mail', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: `MNogiec.com <${process.env.MAIL_USER}>`,
      to: process.env.OWNER_MAIL,
      subject: `[MNogiec.com] New message from ${name}`,
      text: `${name} <${email}> - ${message}`,
      html: `
        <p style="margin: 20px 0; font-size: 1rem;">
          <b>Name:</b> ${name}
        </p>
        <p style="margin: 20px 0;  font-size: 1rem;">
          <b>E-mail address:</b> ${email}
        </p>
        <p style="margin: 20px 0;  font-size: 1rem;">
          ${message}
        </p>
      `,
    });

    res.status(200).send({ code: 200, msg: 'Message sent' });
  } catch (error) {
    res.status(500).send({ code: 500, msg: 'Unknown server error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
