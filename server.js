import express from "express";
import { engine } from "express-handlebars";
import mysql from "mysql2/promise";

const app = express();

// Configuración de Handlebars
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views");

// Conexión a la base de datos
const db = await mysql.createConnection({
  host: "localhost",
  user: "romeocute",
  password: "1234",
  database: "romeocute"
});

// Ruta Nosotros (lee datos del staff)
app.get("/nosotros", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM staff");
  res.render("nosotros", { staff: rows });
});

app.listen(3001, () => console.log("Servidor backend en http://localhost:3001"));
