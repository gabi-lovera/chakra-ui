var express = require("express");
var router = express.Router();
var dbConn = require("../db");
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Users register */
router.post("/register", (req, res) => {
  const sql = "INSERT INTO users SET ?";

  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    country: req.body.country,
  };

  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) console.log(err);
    dbConn.query(sql, user);
  });
});

/* Get user by id */
router.post("/byid", (req, res) => {
  const id = req.body.id;
  dbConn.query("SELECT * FROM users WHERE idUser = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
