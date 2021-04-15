const express = require('express');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
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


const validateReCaptcha = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  {
    method: 'POST',
  });

  const data = await response.json();
  return data.success;
};


app.post('/api/mail', async (req, res) => {
  const isHuman = await validateReCaptcha(req.body.token);

  if (!isHuman) {
    return res.status(401).send({ code: 500, msg: 'ReCaptcha not validated', error: 'ReCaptcha error' });
  }

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

    return res.status(200).send({ code: 200, msg: 'Message sent' });
  } catch (error) {
    return res.status(500).send({ code: 500, msg: 'Unknown server error', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
