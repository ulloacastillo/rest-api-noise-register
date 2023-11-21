import { pool } from "../db.js";

export const postRegister = async (req, res) => {
  try {
    const { intensity } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO register (intensity) VALUES (?)",
      [intensity]
    );
    res.send({ rows });
  } catch {
    return res.status(500).json({ message: "Algo va mal" });
  }
};
