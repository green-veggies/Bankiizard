import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {getBankDetailsPage,submitBankDetails,} from "./routes/bankdetails.js";
const app = express();
const port = 3000;

app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));

//  Homepage
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

//   IFSC -> BANK DETAILS

app.get("/bankdetails", getBankDetailsPage);
app.post("/submit", submitBankDetails);
// app.get("/bankdetails", (req, res) => {
//   res.render("bankdetails.ejs");
// });
// app.post("/submit", async (req, res) => {
//   try {
//     const code = req.body.postData;
//     const response = await axios.get(
//       "https://ifsc.razorpay.com/" + code
//     );
//     res.render("bankdetails.ejs", { content: response.data});
//   } catch (error) {
//     console.log("Failed to make request:", error.message);
//     const errorMessage = "Please enter a vaild IFSC code"
//     res.render("bankdetails.ejs", {
//       error: errorMessage,
//     });
//   }
// });

///    CURRENCY CONVERTER
app.get("/currencyconv",(req,res)=>{
  res.render("currencyconv.ejs");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
