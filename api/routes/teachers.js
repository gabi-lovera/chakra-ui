var express = require("express");
var router = express.Router();
var dbconn = require("../db");
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * @swagger
 * components:
 *   schemas:
 *     Professor:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *         - certificate
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the professor
 *         name:
 *           type: string
 *           description: The professor's name
 *         email:
 *           type: string
 *           description: The verification email
 *         certificate:
 *           type: integer
 *           description: Certificate that validates your profession
 *       example:
 *         id: 1
 *         name: Sherlyn J. Davis
 *         email: Sherlyn@gmail.com
 *         certificate: 23456783
 */

 /**
  * @swagger
  * tags:
  *   name: Professors
  *   description: The Professors managing API
  */

/* GET teachers listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Returns the list of all the professors
 *     tags: [Professors]
 *     responses:
 *       200:
 *         description: The list of the professors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Professor'
 */

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

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Create a new professor
 *     tags: [Professors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Professor'
 *     responses:
 *       200:
 *         description: The professor was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Professor'
 *       500:
 *         description: Some server error
 */

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
    dbconn.query(
      "INSERT INTO teachers (username, password, email, country, certificate) VALUES (?,?,?,?,?)",
      [username, hash, email, country, certificate]
    );
  });
});

module.exports = router;
