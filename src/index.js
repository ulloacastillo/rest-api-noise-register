import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);

app.listen(4000);
