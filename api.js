const express=require("express");
const app=express();
app.use(express.json());

//datalar
const kullanicilar=[
    {id:1, ad:"alper", yas:32 },
    { id:2, ad:"emre", yas:12 },
    { id:3, ad:"recai ", yas:21 },
    { id:4, ad:"zade", yas:31 },
    { id:5, ad:"mahmut ekrem", yas:52 }
];

let a = [];
a = kullanicilar;

// anasayfa
app.get("/",(req,res)=>{
    res.send("anasayfaya hoş geldiniz "); 

    });

// users sayfası 
app.get("/users",(req,res)=>{
   if(req.query.ters){
        a = a.reverse();
        res.send(a);
    }
    else{
    res.send(kullanicilar);
    }
    
});


app.get("/users/:id",(req,res)=>{
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id)); // parseint kullanılma sebebi int olarak değerin sorgulanması gerekiyor  yoksa sadece string şekilde yazar 
    if (bulunanUser) {
        res.send(bulunanUser);  
    }
    else{
        res.send(req.params.id+"'li user bulunamadı ");
    }
});


app.listen(3000,(req,res)=>{
    console.log("server açıldı")
})
    




