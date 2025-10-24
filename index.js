const express = require("express");
const mongoose = require("mongoose");
const { userRouter} = require("./routes/user");
const { courseRouter} = require("./routes/course")
const {adminRouter} = require("./routes/admin")
const app = express();

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/course", courseRouter)

await mongoose.connect("mongodb+srv://lakshmiyadav04082003_db_user:TLefF15VAq2NR4SR@cluster0.k69n7rr.mongodb.net/coursera-app");

app.listen(3000);