const chaiHttp = require("chai-http");
const chai = require("chai");
const app = require("../src/app.js");
const mocha = require("mocha");

// Configurer chai
chai.use(chaiHttp);
chai.should();

// Test de la route /user
mocha.describe("/GET user", () => {
  mocha.it("it should GET all the users", (done) => {
    chai
      .request(app)
      .get("/user")
      .end((_err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
