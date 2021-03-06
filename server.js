const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();
dotenv.config({path:'config.env'})
const PORT=process.env.PORT||8080
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.use('/',require('./server/routes/router'))
require("./server/routes/product.routes")(app);
require("./server/routes/customer.routes")(app);
require("./server/routes/transaction.routes")(app);
require("./server/routes/worker.routes")(app);
require("./server/routes/contain.routes")(app);
require("./server/routes/rental.routes")(app);
require("./server/routes/rent.routes")(app);
require("./server/routes/purchase_history.routes")(app);
require("./server/routes/purchase.routes")(app);

const db=require("./server/model");
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
  })
app.listen(PORT,()=>{
    console.log('Server on http://localhost:${PORT}')
});
