
import axios from "axios";

const getBankDetailsPage = (req, res) => {
  res.render("bankdetails.ejs");
};

const submitBankDetails = async (req, res) => {
  try {
    const code = req.body.postData;
    const response = await axios.get("https://ifsc.razorpay.com/" + code);
    res.render("bankdetails.ejs", { content: response.data });
  } catch (error) {
    console.log("Failed to make request:", error.message);
    const errorMessage = "Please enter a valid IFSC code";
    res.render("bankdetails.ejs", {
      error: errorMessage,
    });
  }
};

export {
  getBankDetailsPage,
  submitBankDetails,
};

