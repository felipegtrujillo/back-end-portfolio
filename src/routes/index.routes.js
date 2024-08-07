const { Router } = require("express");
const router = Router();
const email = require("./email.routes.js");


/* GET DE EJEMPLO  localhost:3000/   */
router.get("/", (req, res) => {
    res.send("<h1>¡Bienvenido a la página principal!<h1>");
});

/*definimos los endpoints en secciones */
router.use("/email", email);

router.get("*", (req, res) => {
  res.send("<h1> Esta Página no exíste <h1>");
});


module.exports = router;
