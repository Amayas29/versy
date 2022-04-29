const app = require("./app.js");
const port = 4000;
require('dotenv').config( {path: './config.env'} );

app.default.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
