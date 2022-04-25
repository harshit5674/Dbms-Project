const express=require('express')
const route=express.Router()

const controller=require('../controller/product.controller')

const axios = require('axios');
route.get('/',(req,res)=>{
    res.render('landing_page')
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