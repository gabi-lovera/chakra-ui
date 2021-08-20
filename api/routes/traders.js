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
 *     Sellers:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - email
 *         - certificate
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the sellers
 *         name:
 *           type: string
 *           description: The sellers's name
 *         email:
 *           type: string
 *           description: The verification email
 *         certificate:
 *           type: integer
 *           description: Certificate that validates your business
 *       example:
 *         id: 1
 *         name: Sherlyn J. Davis
 *         email: Sherlyn@gmail.com
 *         certificate: 23456783
 */

 /**
  * @swagger
  * tags:
  *   name: Sellers
  *   description: The Sellers managing API
  */
 

/**
 * @swagger
 * /sellers:
 *   get:
 *     summary: Returns the list of all the sellers
 *     tags: [Sellers]
 *     responses:
 *       200:
 *         description: The list of the sellers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sellers'
 */

/* Get all sellers */
router.get("/", (req, res) => {
  const sql = "SELECT * FROM sellers";

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
 * /sellers:
 *   post:
 *     summary: Create a new sellers
 *     tags: [Sellers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Seller'
 *     responses:
 *       200:
 *         description: The seller was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seller'
 *       500:
 *         description: Some server error
 */

/* Register seller */
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
      "INSERT INTO sellers (username, password, email, country, certificate) VALUES (?,?,?,?,?)",
      [username, hash, email, country, certificate]
    );
  });
});

module.exports = router;
