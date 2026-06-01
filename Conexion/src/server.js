import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import videoRoutes from "./routes/videoRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});