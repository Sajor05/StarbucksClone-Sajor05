import cors from "cors";
import morgan from "morgan";
import express from "express";
import { connection } from "./db/db.js";
import routes from "./api/endpoints.js";
import cookiesParser from "cookie-parser";

const app = express();
app.set("port", process.env.PORT || 4000);
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://starbucksclone-snowy.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  }),
);
app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api", routes);
connection();

app.listen(app.get("port"), () => {
  console.log(`Escuchando puerto ${app.get("port")}`);
});
