const mongoose = require("mongoose");
const URI = process.env.MONGO_URI;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Conncection successfull");
  })
  .catch((err) => {
    console.log(err);
  });
