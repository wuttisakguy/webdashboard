import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import express, { Express } from "express";
import cors from "cors";

dotenv.config();

const isDevelopment = process.env.NODE_ENV === "development";
const rootPath = isDevelopment ? "/api" : "";

const app: Express = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: "*",
  credential: true,
  methods: "GET, POST, PATCH, PUT, DELETE",
};

const bodyParserOptions = {
  limit: "50gb",
  extended: true,
};

app.use(cors(corsOptions));
app.use(express.json(bodyParserOptions));
app.use(express.urlencoded(bodyParserOptions));

const versions = ["v1"];
versions.forEach((version) => {
  const routePath = path.join(__dirname, version, "routes");
  const routeFiles = fs.readdirSync(routePath);
  routeFiles.forEach((file) => {
    const routeModule = require(path.join(routePath, file));
    app.use(`${rootPath}/${version}`, routeModule.default);
  });
});

app.listen(port, (): void => {
  console.log(`API IS RUNNING ON '${port}'`);
});

export default app;
