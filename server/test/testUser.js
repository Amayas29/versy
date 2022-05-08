const chaiHttp = require("chai-http");
const chai = require("chai");
const app = require("../src/app.js");
const mocha = require("mocha");

// Configurer chai
chai.use(chaiHttp);
chai.should();

// Test de la route /users
mocha.describe("/GET users", () => {
  mocha.it("it should GET all the users", (done) => {
    chai
      .request(app.default)
      .get("/api/users")
      .end((_err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// Test de la route /users/:id
mocha.describe("/GET users/:id", () => {
  mocha.it("it should GET a user by the given id", (done) => {
    chai
      .request(app.default)
      .get("/api/users/A6fXTzAGczB7ra3h")
      .end((_err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// Test de la route /users/login
mocha.describe("/POST users.login", () => {
  mocha.it("it should POST a user", (done) => {
    chai
      .request(app.default)
      .post("/api/users/login")
      .send({
        email: "makhlouf.rayane2001@gmail.com",
        password: "47Dayane2001@",
      })
      .end((_err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// Test de la route /token/:token
mocha.describe("/GET token/:token", () => {
  mocha.it("it should GET a user by the given token", (done) => {
    chai
      .request(app.default)
      .get(
        "/api/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkE2ZlhUekFHY3pCN3JhM2giLCJpYXQiOjE2NTIwMDI5NDYsImV4cCI6MjI1NjgwMjk0Nn0.QYVnS_IVYlISe_WlAgXVAxY68wHtkjXbceDr30_Dm_Y"
      )
      .end((_err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// Test de la route /messages/
mocha.describe("/GET messages", () => {
  mocha.it("it should GET all the messages", (done) => {
    chai
      .request(app.default)
      .get("/api/messages")
      .end((_err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
});
