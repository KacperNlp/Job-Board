import express from "express";
import path from "path";
import router from "./src/routes";
import connectDB from "./src/config/database";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
