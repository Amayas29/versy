const app = require("./app.js");
const PORT = require("../config/const").PORT;

app.default.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
