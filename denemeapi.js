const express=require("express");
const app=express();
const a=require("./api_function");
const axios=require("axios");


//Kıta veya Şehir isimleri üzerinden hava durumu bilgilerini getirme 

app.get("/",(req,res)=> {

   res.send("bu sayfada herhangi bir bilgi yoktur bilgisini öğrenmek istediğiniz şehrin , ülkenin veya kıtanın ismini giriniz ");
})

app.get("/:cityname", async  (req,res)=>{
try{
  api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data);  
   }
catch{
    res.send("bir sıkıntı yaşandı ");
}
});

// corrd bilgilerini getirme
app.get("/:cityname/coord",  async (req, res)=>{
   try{
    api_data= await a.get_api_data(req.params.cityname);
     res.send(api_data.coord) 
   }
   catch{
    res.send("bir sıkıntı yaşandı ")
   }
});
// weather bilgilerini getirme 
app.get("/:cityname/weather",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.weather[0]) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
//  base bilgisini getirme 
app.get("/:cityname/base",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.base) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// main bilgilerini getirme
app.get("/:cityname/main",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
     console.log(req.params);
      res.send(api_data.main) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// visibility değeri getirme 
app.get("/:cityname/visibility",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.visibility) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// wind değerini getirme 
app.get("/:cityname/wind",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.wind) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// clouds değerini getirme 
app.get("/:cityname/clouds",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.clouds) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// dt değerini getirme
app.get("/:cityname/dt",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(String(api_data.dt)) // int değer döndürürken bir sıkıntı yaşıyor 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });
// sys değerini getirme 
app.get("/:cityname/sys",  async (req, res)=>{
    try{
     api_data= await a.get_api_data(req.params.cityname);
      res.send(api_data.sys) 
    }
    catch{
     res.send("bir sıkıntı yaşandı ")
    }
 });


app.listen(1763,(req,res)=>{
console.log("1763 portundan server açildi haberiniz olsun ");
});


