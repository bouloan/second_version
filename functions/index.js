const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');


admin.initializeApp()
require('dotenv').config()
const {
  SENDER_EMAIL,
  SENDER_PASSWORD,
  MCNA_ADMIN_EMAIL
} = process.env;

exports.sendEmailNotification = functions.firestore.document('emails/{docId}').onCreate((snap, ctx) => {
  const data = snap.data();

  let authData = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD
    }
  });

  authData.sendMail({
      from: 'mcna@gmail.com',
      to: `${data.email}`,
      subject: 'Votre mail à MCNA',
      text: `${data.message}`,
      html: `${data.message}`,
    })
    .then(res => console.log('successfully sent thal mail'))
    .catch(err => console.log(err));

  //email to mnca admin
  authData.sendMail({
      from: `${data.email}`,
      to: `${MCNA_ADMIN_EMAIL}`,
      subject: `${data.subject}`,
      text: `${data.message}`,
      html: `${data.message}`,
    })
    .then(res => console.log('successfully sent thal mail'))
    .catch(err => console.log(err));
})
