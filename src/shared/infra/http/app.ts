import express from "express";
import cors from "cors";
import { v1Router } from "./api/v1";
import * as dotenv from "dotenv";
dotenv.config();

const origin = {
	// origin: isProduction ? 'https://dddforum.com' : '*',
	origin: "*",
};
export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(origin));

app.use("/api/v1", v1Router);
