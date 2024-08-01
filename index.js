import sslChecker from "ssl-checker";
import express from "express";

const app = express();
const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended: false}));


app.set('view engine' , 'ejs')

app.get("/",(req,res)=>{
    res.render("index" , {data:''})
})

app.post("/getsslinfo" , (req,res)=>{
    let domain = req.body.domain
    console.log(domain);

    getSslDetails(domain)
.then((response) =>{
    console.log(response);

    res.render('index' , {data:response})
})
    
})

const getSslDetails = async (hostname) =>
  await sslChecker(hostname);



app.listen(port , ()=>{
    console.log(`app is running in the port${port}`);
})