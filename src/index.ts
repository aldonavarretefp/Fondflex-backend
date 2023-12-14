import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "../database/config";

dotenv.config();

const app: Express = express();
// Dotenv configurations
dotenv.config();
// Cors configurations
app.use(cors());
// Body parser configurations
app.use(express.json());

// Database connection
try {
  dbConnection();
} catch (error) {
  console.log(error)
  throw new Error('Error al iniciar la base de datos');
}

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Fondflex Server!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});