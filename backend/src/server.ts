require("dotenv").config();
import express, { Request, Response } from "express";

const { audioUploadMiddleware } = require("./middleware/audio-upload");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/upload", audioUploadMiddleware, (req: Request, res: Response) => {
  // @ts-ignore
  console.log(req.files);

  // Send an appropriate response to the client
  res.status(200).json({ message: "File upload successful" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
