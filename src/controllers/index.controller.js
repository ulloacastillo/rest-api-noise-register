import { pool } from "../db.js";

export const postRegister = async (req, res) => {
  try {
    const { id, intensity, dateregister } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO register (id, intensity, dateregister) VALUES (?, ?, ?)",
      [id, intensity, dateregister]
    );
    console.log(rows);
    res.send({ rows });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Algo va mal" });
  }
};
