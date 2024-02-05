import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// middleware to log request method and url
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request received for ${req.url}`);
  next();
});

// home route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to a simpple http server!");
});

// about route
app.get("/about", (req: Request, res: Response) => {
  res.send("This project was created by Osarumen Alohan.");
});

// handle non-existent routes with a 404 status code
app.use((req: Request, res: Response) => {
  res.status(404).send("Route not found!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
