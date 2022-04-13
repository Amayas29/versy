const app = require("./app.js");
const port = 4000;

app.default.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
