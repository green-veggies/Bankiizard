const apiKey = "c2c1d148a8d84732b7629c4990720fed";
import axios from "axios";


const getNews = async(req,res)=>{
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=`+apiKey);
    res.render("fin-news.ejs",{content:response.data});   
};

export default getNews;