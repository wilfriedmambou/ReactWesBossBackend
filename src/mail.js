const nodemailer = require('nodemailer');
require('dotenv').config({ path: 'variables.env' });


const transport = nodemailer.createTransport({
//   host:process.env.MAIL_HOST,
//   port:process.env.MAIL_PORT,
host:"smtp.mailtrap.io",
port:2525,
  auth: {
    // user: process.env.MAIL_USER,
    // pass: process.env.MAIL_PASS,
    user:"a0511e518a0b95",
    pass:"55edc7887fe487"
  },
});

const makeANiceEmail = text => `
  <div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>Hello There!</h2>
    <p>${text}</p>

    <p>😘, Wilfried Mambou </p>
  </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
