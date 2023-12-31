const express = require("express");
const PORT =  process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const DB = require("./secret");
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
mongoose
  .connect(DB)
  .then(() => {
    console.log("connect");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at ${PORT}`);
});
