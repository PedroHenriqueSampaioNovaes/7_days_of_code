require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// endpoint for to send a e-mail
app.post('/', express.json(), (req, res) => {
  const { email } = req.body;

  const msg = {
    to: email, // Change to your recipient
    from: 'ppedroword@gmail.com', // Change to your verified sender
    subject: 'Agradecimento Newsletter - CasaVerde',
    text: 'Agradecimento por se inscrever em nossa Newsletter',
    html: `<strong>Olá, ${email}. <br><br>Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. <br><br>Até logo!</strong>`,
  };

  try {
    sgMail.send(msg);

    console.log('Email sent');

    res.status(200).send('Email sent!');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
