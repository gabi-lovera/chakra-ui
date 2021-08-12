var express = require("express");
var router = express.Router();
var dbconn = require("../db");
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET teachers listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Get all teachers */
router.get("/teachers", (req, res) => {
  const sql = "SELECT * FROM teachers";

  dbconn.query(sql, (error, resultado) => {
    if (error) throw error;
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      res.send("There are none");
    }
  });
});

/* Register teacher */
router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const country = req.body.country;
  const certificate = req.body.certificate;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    dbConn.query(
      "INSERT INTO teachers (username, password, email, country, certificate) VALUES (?,?,?,?,?)",
      [username, hash, email, country, certificate]
    );
  });
});

module.exports = router;
