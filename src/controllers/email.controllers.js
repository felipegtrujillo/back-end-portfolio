
const {
  enviarEmailNuevo
} = require("../services/send.js");


/* POST => CREAR */
const enviarEmail = async (req, res) => {
  try {
    const { name , email, phone, message} = req.body;

    const values = [name, email, phone, message];


      let respuestaEmail = enviarEmailNuevo(
         email,
         name,
         phone,
         message
      );

      return res.status(200).json({ status: "ok" });

  } catch (error) {
    console.error(error);
    console.log(error);
    return res.status(400).send("Error al enviar Email");
  }
};

module.exports = {
  enviarEmail
};
