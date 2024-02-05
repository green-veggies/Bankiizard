import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { getBankDetailsPage, submitBankDetails } from "./routes/bankdetails.js";
import getNews from "./routes/fin-news.js";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//  HOMEPAGE

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//   IFSC -> BANK DETAILS

app.get("/bankdetails", getBankDetailsPage);
app.post("/submit", submitBankDetails);

//    CURRENCY CONVERTER
app.get("/currencyconv", (req, res) => {
  res.render("currencyconv.ejs");
});

//    FINANCIAL CALCULATOR
app.get("/fin-news",getNews);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
