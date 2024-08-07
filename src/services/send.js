const {transporter, MI_MAIL} = require("../config/nodemailer");

const fs = require('fs');
const path = require('path');

// Lee la plantilla HTML
const htmlTemplate = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')

const enviarEmailNuevo = ( email, name, phone, content) => {

  let htmlToSend = htmlTemplate.replace('{{name}}', name).replace('{{email}}', email ).replace('{{phone}}', phone ).replace('{{content}}', content);

  /* Enviar un mail al cliente de params */
  let mailOptions = {
    from: MI_MAIL,
    to: email,
    subject: name,
    phone: phone,
    content: content,
    html: htmlToSend,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error, el mail no se ha enviado:  " + err);
      return err;
    } else {
      console.log("Email enviado correctamente", data);
      return data;
    }
  });
};

module.exports = { enviarEmailNuevo };