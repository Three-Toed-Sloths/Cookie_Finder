



const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'nickclear22@gmail.com',
  from: 'cookiesellerproject@gmail.com',
  subject: 'New Cookie Order for (seller_name)',
  text: '(customer name) order (list cookies and amount)',
  html: '<strong>Bring the cookies in!</strong>',
};
sgMail.send(msg);


