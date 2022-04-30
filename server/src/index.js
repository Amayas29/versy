const app = require("./app.js");
port = 4000
require("dotenv").config({ path: ".env" });

app.default.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
