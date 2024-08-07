const { Router } = require("express");
const router = Router(); 
const {
  enviarEmail
} = require("../controllers/email.controllers.js");


/* POST => Crear un nuevo registro */
router.post("/send",  enviarEmail);

module.exports = router;