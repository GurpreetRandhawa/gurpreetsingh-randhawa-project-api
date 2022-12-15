require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("node:path");

const app = express();

const commentRouter = require("./routes/testimonials");
const planRouter = require("./routes/plans");
const foodRouter = require("./routes/food");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/comments", commentRouter);
app.use("/plans", planRouter);
app.use("/food", foodRouter);

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
