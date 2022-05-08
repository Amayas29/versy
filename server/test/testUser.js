const chaiHttp = require("chai-http");
const chai = require("chai");
const app = require("../src/app.js");
const mocha = require("mocha");
const getNow = require("../src/utils/date");
const auth = require("../src/middleware/auth");
// Configurer chai
chai.use(chaiHttp);
chai.should();

// Test de la route /users
mocha.describe("/GET user", () => {
  mocha.it("it should GET all the users", (done) => {
    chai
      .request(app.default)
      .get("/api/users")
      .end((err, res) => {
        res.should.have.status(200);
        // console.log(res);
        done();
      });
  });
});

// Test de la route /users/:id
mocha.describe("/GET user/:id", () => {
  mocha.it("it should GET a user by the given id", (done) => {
    chai
      .request(app.default)
      .get("/api/users/zJ1RwmVxCs9YUftL")
      .end((err, res) => {
        res.should.have.status(200);
        // console.log(res);
        done();
      });
  });
});

// Test de la route /users/login
mocha.describe("/POST user.login", () => {
  mocha.it("it should POST a user", (done) => {
    chai
      .request(app.default)
      .post("/api/users/login")
      .send({
        email: "makhlouf.rayane2001@gmail.com",
        password: "47Dayane2001@",
      })
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
});

// Test de la route /users/follow/:id
// mocha.describe("/PATCH user.follow/:id", () => {
//   mocha.it("it should follow a user", (done) => {
//     chai
//       .request(app.default)
//       .patch("/api/users/follow/A6fXTzAGczB7ra3h")
//       .send({
//         id: "KL8FKxDpg7T56zNK",
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         // console.log(res.body);
//         done();
//       });
//   });
// });

// Test de la route /token/:token
mocha.describe("/GET token/:token", () => {
  mocha.it("it should GET a user by the given token", (done) => {
    chai
      .request(app.default)
      .get(
        "/api/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkE2ZlhUekFHY3pCN3JhM2giLCJpYXQiOjE2NTIwMDI5NDYsImV4cCI6MjI1NjgwMjk0Nn0.QYVnS_IVYlISe_WlAgXVAxY68wHtkjXbceDr30_Dm_Y"
      )
      .end((err, res) => {
        res.should.have.status(200);
        // console.log(res.body);
        done();
      });
  });
});
// // Test de la route /messages/
mocha.describe("/GET messages", () => {
  mocha.it("it should GET all the messages", (done) => {
    chai
      .request(app.default)
      .get("/api/messages")
      .end((err, res) => {
        res.should.have.status(200);
        console.log(res.body);
        done();
      });
  });
});

// // Test de la route /messages/feed
// mocha.describe("/GET messages/feed", () => {
//   mocha.it("it should GET all the messages", (done) => {
//     chai
//       .request(app.default)
//       .get("/api/messages/feed")
//       .send({
//         userId: "zJ1RwmVxCs9YUftL",
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         console.log(res.body);
//         done();
//       });
//   });
// });

// // Test de la route /messages/
// mocha.describe("/POST messages", () => {
//   mocha.it("it should POST a message", (done) => {
//     chai
//       .request(app.default)
//       .post("/api/messages")
//       .send({
//         message: "Hello",
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         // console.log(res.body);
//         done();
//       });
//   });
// });

//

// Test de la route /users/register
// mocha.describe("/POST user.register", () => {
//   mocha.it("it should POST a user", (done) => {
//     chai
//       .request(app.default)
//       .post("/api/users/register")
//       .send({
//         email: "hamid.kolli@gmail.com",
//         password: "Hamid2001@",
//         username: "HamidKolli",
//         name: "Hamid Kolli",
//         avatar: "",
//         joinedDate: getNow(),
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         console.log(res.body);
//         done();
//       });
//   });
// });

// Test de la route /users/logout
// mocha.describe("/GET user.logout", () => {
//   mocha.it("it should GET a user", (done) => {
//     chai
//       .request(app.default)
//       .get("/api/users/logout")
//       .end((err, res) => {
//         res.should.have.status(200);
//         // console.log(res.body);
//         done();
//       });
//   });
// });

// Test de la route /users/
// mocha.describe("/PUT user", () => {
//   mocha.it("it should PUT a user", (done) => {
//     chai
//       .request(app.default)
//       .put("/api/users/zJ1RwmVxCs9YUftL")
//       .send({
//         password: "Hamid2001@",
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         console.log(res.body);
//         done();
//       });
//   });
// });
