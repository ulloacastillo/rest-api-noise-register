import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
  DB_HOST,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
