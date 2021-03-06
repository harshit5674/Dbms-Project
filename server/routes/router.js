const express=require('express')
const route=express.Router()

const controller=require('../controller/product.controller')

const axios = require('axios');
route.get('/home',(req,res)=>{
    res.render('landing_page')
})
route.get('/',(req,res)=>{
    res.render('login')
})
route.get('/product',(req,res)=>{
    axios.get("http://localhost:3000/api/products/")
     .then(function(response){
        res.render("product",{products:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-product',(req,res)=>{
    res.render("add_product");
})
route.get('/update_product',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    params:{id:req.params.id};
    axios.get('http://localhost:3000/api/products',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_product",{product:productdata.data});
    })
})
route.get('/rental',(req,res)=>{
    axios.get("http://localhost:3000/api/rentals/")
     .then(function(response){
        res.render("rental",{rentals:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-rental',(req,res)=>{
    res.render("add_rental");
})
route.get('/all_transactions',(req,res)=>{
    axios.get("http://localhost:3000/api/contains/")
    .then(function(response){
        
       res.render("all_transactions",{contains:response.data});
    })
   .catch(err=>{
       res.send(err);
   })
})
route.get('/all_rentals',(req,res)=>{
    axios.get("http://localhost:3000/api/rents/")
    .then(function(response){
       res.render("all_rentals",{rents:response.data});
    })
   .catch(err=>{
       res.send(err);
   })
})
route.get('/update_rent_',(req,res)=>{
    axios.get("http://localhost:3000/api/rents?id="+req.query.id+"&pid="+req.query.pid)
    .then(function(productdata){
        console.log(productdata);
        console.log(productdata.data);
        console.log('HI');
        res.render("update_rent_",{rent:productdata.data,tid:req.query.id});
    })
})
route.get('/update_rental',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    params:{id:req.params.id};
    axios.get('http://localhost:3000/api/rentals',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_rental",{rentals:productdata.data});
    })
})
route.get('/customer',(req,res)=>{
    axios.get("http://localhost:3000/api/customers/")
     .then(function(response){
        res.render("customer",{customers:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-customer',(req,res)=>{
    res.render("add_customer");
})
route.get('/update_customer',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    axios.get('http://localhost:3000/api/customers',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_customer",{customer:productdata.data});
    })
})
route.get('/contain',(req,res)=>{
    const id = req.query.id;
    console.log(id);
    axios.get("http://localhost:3000/api/contains/",{params:{id:req.query.id}})
     .then(function(response){
        res.render("contain",{contains:response.data,tid:req.query.id});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-contain',(req,res)=>{
    const id=req.query.id;
    console.log(id)
    res.render("add_contain",{tid:req.query.id});
})
route.get('/update_contain',(req,res)=>{
    axios.get("http://localhost:3000/api/contains?id="+req.query.id+"&pid="+req.query.pid)
    .then(function(productdata){
        console.log(productdata);
        console.log(productdata.data);
        console.log('HI');
        res.render("update_contain",{contain:productdata.data,tid:req.query.id});
    })
})
route.get('/rent',(req,res)=>{
    const id = req.query.id;
    console.log(id);
    axios.get("http://localhost:3000/api/rents/",{params:{id:req.query.id}})
     .then(function(response){
        res.render("rent",{rents:response.data,tid:req.query.id});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-rent',(req,res)=>{
    const id=req.query.id;
    console.log(id)
    res.render("add_rent",{tid:req.query.id});
})
route.get('/update_rent',(req,res)=>{
    axios.get("http://localhost:3000/api/rents?id="+req.query.id+"&pid="+req.query.pid)
    .then(function(productdata){
        console.log(productdata);
        console.log(productdata.data);
        console.log('HI');
        res.render("update_rent",{rent:productdata.data,tid:req.query.id});
    })
})
route.get('/transaction',(req,res)=>{
    axios.get("http://localhost:3000/api/transactions/")
     .then(function(response){
        res.render("transaction",{transactions:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-transaction',(req,res)=>{
    res.render("add_transaction");
})
route.get('/update_transaction',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    params:{id:req.params.id};
    axios.get('http://localhost:3000/api/transactions',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_transaction",{transaction:productdata.data});
    })
})
route.get('/purchase_history',(req,res)=>{
    axios.get("http://localhost:3000/api/purchase_histories/")
     .then(function(response){
        res.render("purchase_history",{purchase_histories:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-purchase_history',(req,res)=>{
    res.render("add_purchase_history");
})
route.get('/update_purchase_history',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    params:{id:req.params.id};
    axios.get('http://localhost:3000/api/purchase_histories',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_purchase_history",{purchase_history:productdata.data});
    })
})
route.get('/purchase',(req,res)=>{
    const id = req.query.id;
    console.log(id);
    axios.get("http://localhost:3000/api/purchases?id="+id)
     .then(function(response){
        res.render("purchase",{purchases:response.data,tid:req.query.id});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-purchase',(req,res)=>{
    const id=req.query.id;
    console.log(id)
    res.render("add_purchase",{tid:req.query.id});
})
route.get('/update_purchase',(req,res)=>{
    axios.get("http://localhost:3000/api/purchases?id="+req.query.id+"&pid="+req.query.pid)
    .then(function(productdata){
        console.log(productdata);
        console.log(productdata.data);
        console.log('HI');
        res.render("update_purchase",{purchase:productdata.data,tid:req.query.id});
    })
})
route.get('/worker',(req,res)=>{
    axios.get("http://localhost:3000/api/workers/")
     .then(function(response){
        res.render("worker",{workers:response.data});
     })
    .catch(err=>{
        res.send(err);
    })
})
route.get('/add-worker',(req,res)=>{
    res.render("add_worker");
})
route.get('/update_worker',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    params:{id:req.params.id};
    axios.get('http://localhost:3000/api/workers',{params:{id:req.query.id}})
    .then(function(productdata){
        const id=req.query.id;
        console.log(id);
        console.log(productdata.data)
        res.render("update_worker",{worker:productdata.data});
    })
})


module.exports=route