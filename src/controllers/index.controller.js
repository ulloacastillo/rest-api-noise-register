import { pool } from "../db.js";

export const postRegister = async (req, res) => {
  try {
    const { intensity, date } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO register (intensity, date) VALUES (?, ?)",
      [intensity, date]
    );
    res.send({ rows });
  } catch {
    return res.status(500).json({ rows });
  }
};
