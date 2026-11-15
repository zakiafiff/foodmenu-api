import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FoodMenu API is running" });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/menus", menuRoutes);

// di Vercel server dijalankan oleh Vercel, jadi listen hanya untuk lokal
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

export default app;