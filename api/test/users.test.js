var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Users API", () => {
  describe("GET /users", () => {
    /* Test the GET users route */
    it("It should GET all the users", (done) => {
      chai
        .request(server)
        .get("/users")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
      it("It should NOT GET all the users", (done) => {
        chai
          .request(server)
          .get("/users")
          .end((err, response) => {
            response.should.have.status(404);
            done();
          });
      });
    });
  });

  /*Test the POST route*/
  describe("POST /register", () => {
    it("It should POST a new user", (done) => {
      const user = {
        username: "Jonh",
        password: "12345",
        email: "jonh@hotmail.com",
        country: "Germany",
      };
      chai
        .request(server)
        .post("/users/register")
        .send(user)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a("object");
          res.body.should.have.property("data");
          res.body.should.have.property("message");
          done();
        });
    });
  });
});
