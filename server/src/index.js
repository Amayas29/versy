const app = require("./app.js");

require("dotenv").config({ path: ".env" });

app.default.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
