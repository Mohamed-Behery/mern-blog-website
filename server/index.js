import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/Users.js";
import postRoute from "./routes/Posts.js";
import categoryRoute from "./routes/Categories.js";

app.use(express.json());
app.use(cors());
dotenv.config();

function connect() {
  mongoose.connect(process.env.MONGO);
  console.log("Connected to DB");
}
connect();

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("3005", () => {
  console.log("Server Working");
});
