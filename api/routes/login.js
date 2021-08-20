var express = require("express");
var router = express.Router();
var dbConn = require("../db");
const bcrypt = require("bcrypt");

/* Login users and traders */
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  dbConn.query(
    `SELECT * FROM (SELECT * FROM users
                      UNION ALL
                      SELECT * FROM sellers) 
        couple WHERE username=?;`,
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            res.send(result);
          } else {
            res.send({ message: "Wrong Password" });
          }
        });
      } else {
        res.send({ message: "User dont exist" });
      }
    }
  );
});
/* Get Session */
router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
/* Logout */
router.get("/logout", function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

module.exports = router;
