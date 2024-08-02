import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./config/routes.js";
import conexion from './config/db.js'
const app = express();
const port = 1234;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("trust proxy", true);

app.use(routes);
app.use(conexion);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
