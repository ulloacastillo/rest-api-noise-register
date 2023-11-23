import { pool } from "../db.js";

export const getRegisters = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "select * from register order by dateregister desc;"
    );
    // Fecha en formato GMT

    // Ajustar la hora a la zona horaria de Chile (GMT -3)
    let opciones = {
      timeZone: "America/Santiago",
      hour12: false,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    // Crear un objeto formateador de fecha y hora
    let formateador = new Intl.DateTimeFormat("es-CL", opciones);

    let data = rows.map((req) => {
      return {
        ...req,
        dateregister: formateador.format(new Date(req.dateregister)),
      };
    });

    res.send({ data });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Algo va mal" });
  }
};
