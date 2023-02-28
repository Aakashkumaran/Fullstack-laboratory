const express=require("express");
const app=express();
const nodemailer=require("nodemailer");
const port=3000;

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

function sendmail(data,sub,unobstructive){
  //return new Promise((resolve,reject)=>{

    var mail=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:'ak@gmail.com',
        pass:'akakakak'
      }
    })

    var data={
      from:'ak@gmail.com',
      to:remo,
      subject:sub,
      text:unobstructive
    }

    mail.sendMail(data, function(error,info){
      if(error){
        console.log(error);
        return reject({message:"An error occurred"})
      }
      return resolve({message:"Email sent successfuly"})
    })

  })
}

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/index.html');
})
app.post('/reg',(req,res)=>{
  console.log(req.body);
  sendmail(req.body.to,req.body.subject,req.body.texts)
  .then(response=>res.send(response.message))
  .catch(error=> res.status(500).send(error.message))
})
// app.listen(port,()=>{
//   console.log("server connected");
// })