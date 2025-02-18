import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import setupSwagger from "./swagger/swagger.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/post", postRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
