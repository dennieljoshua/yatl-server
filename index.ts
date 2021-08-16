import express from "express";

const app = express();

if (!process.env.PORT) {
  throw new Error("Missing PORT environment variable, check .env file");
}

app.listen(process.env.PORT, () =>
  console.log(`Listening on PORT: ${process.env.PORT}`)
);
