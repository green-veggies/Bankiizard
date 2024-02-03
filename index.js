import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/bankdetails", (req, res) => {
  res.render("bankdetails.ejs");
});
app.post("/submit", async (req, res) => {
  try {
    const code = req.body.postData;
    const response = await axios.get(
      "https://bank-apis.justinclicks.com/API/V1/IFSC/" + code
    );
    res.render("bankdetails.ejs", { content: response.data});
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("bankdetails.ejs", {
      error: error.message,
    });
  }
  
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
