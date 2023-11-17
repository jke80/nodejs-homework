const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Evgen:1DpaW14lvWotFHPy@cluster0.foobhck.mongodb.net/phonebook?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => console.log("connect"));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
