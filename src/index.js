import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import registerRoutes from "./routes/registers.routes.js";

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use(registerRoutes);

console.log(PORT);
app.listen(PORT);
