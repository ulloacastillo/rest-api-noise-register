import { pool } from "../db.js";

export const getRegisters = async (req, res) => {
  try {
    console.log("Hola");
    const [rows] = await pool.query("select * from register");
    res.send({ rows });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Algo va mal" });
  }
};
