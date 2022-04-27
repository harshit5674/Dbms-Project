$("#index").submit(function(event){
    event.preventDefault();
    console.log('HI')
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    if(data.username!="admin"||data.password!="pass"){
        alert("Incorrect Username or Password");
    }
    else{
        window.location.href = "http://localhost:3000/product"
    }
})

$("#add_product").submit(function(event){
    alert("New Product Created");
})

$("#add_transaction").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/transactions/',
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        window.location.href = "/contain"+"?id="+data.id;
    })
})
$("#add_purchase_history").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/purchase_histories/',
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        window.location.href = "/purchase"+"?id="+data.id;
    })
})
$("#add_rental").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/rentals/',
        "method":"POST",
        "data":data
    }
    $.ajax(request).done(function(response){
        window.location.href = "/rent"+"?id="+data.id;
    })
})

$("#add_contains").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data1={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data1[n['name']]=n['value']
    })
    const q=data1.quantity
    var td=1
    fetch("http://localhost:3000/api/products?id="+data1.pid)
.then(response => {
    if(response.ok) {
        return response.json();
    }
}).then(data => {
        console.log('Batman')
        console.log(data);
        console.log(data[0].quantity_sell)
        td=data[0].quantity_sell
        if(q<=data[0].quantity_sell){
            var request={
                "url": 'http://localhost:3000/api/contains/',
                "method":"POST",
                "data":data1
            }
            $.ajax(request).done(function(response){
               window.location.href = "/contain?id="+data1.tid;
            })
        }
        else{
            alert("Not Enough Quantity")
            
            window.location.href = "/contain?id="+data1.tid;
        }
}).catch(err => console.error(err));
    console.log('q='+q)
    console.log(td)


    
})
$("#add_purchases").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data1={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data1[n['name']]=n['value']
    })
    console.log(data1)
     var request={
            "url": 'http://localhost:3000/api/purchases/',
            "method":"POST",
            "data":data1
        }
            $.ajax(request).done(function(response){
               //window.location.href = "/purchase?id="+data1.phid;
     })
    window.location.href = "/purchase?id="+data1.phid;
})
$("#add_rents").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data1={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data1[n['name']]=n['value']
    })
    const q=data1.quantity
    var td=1
    fetch("http://localhost:3000/api/products?id="+data1.pid)
.then(response => {
    if(response.ok) {
        return response.json();
    }
}).then(data => {
        console.log('Batman')
        console.log(data);
        console.log(data[0].quantity)
        td=data[0].quantity
        if(q<=data[0].quantity_rent){
            var request={
                "url": 'http://localhost:3000/api/rents/',
                "method":"POST",
                "data":data1
            }
            $.ajax(request).done(function(response){
               window.location.href = "/rent?id="+data1.tid;
            })
        }
        else{
            alert("Not Enough Quantity")
            window.location.href = "/rent?id="+data1.tid;
        }
}).catch(err => console.error(err));
    console.log('q='+q)
    console.log(td)


    
})
$("#update_product").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/products/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Product Updated")
         window.location.href = "/product";

    })
})
$("#update_contain").submit(function(event){
  console.log('Plwase WOek')
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data1={};
  console.log('HI');
  $.map(unindexed_array,function(n,i){
      data1[n['name']]=n['value']
  })
  const q=data1.quantity
  var td=1
  fetch("http://localhost:3000/api/products?id="+data1.pid)
.then(response => {
  if(response.ok) {
      return response.json();
  }
}).then(data => {
      console.log('Batman')
      console.log(data);
      if(q<=data[0].quantity_sell){
          var request={
              "url": 'http://localhost:3000/api/contains?tid='+data1.tid+'&pid='+data1.pid,
              "method":"PUT",
              "data":data1
          }
          $.ajax(request).done(function(response){
             window.location.href = "/contain?id="+data1.tid;
          })
      }
      else{
          alert("Not Enough Quantity")
          
          window.location.href = "/contain?id="+data1.tid;
      }
}).catch(err => console.error(err));
})

if(window.location.pathname=="/product"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/products/'+id,
        "method":"DELETE",
    }

    if(confirm("The selected product will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/product";

    })
    }
    })
}

if(window.location.pathname=="/customer"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/customers/'+id,
        "method":"DELETE",
    }
    if(confirm("The selected customer will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/customer";
    })
    }
    })
}


$("#update_customer").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/customers/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Customer Updated")
    })
})

$("#update_transaction").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/transactions/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Transaction Updated")
        window.location.href = "/transaction";
    })
})
$("#update_purchase_history").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/purchase_histories/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Purchase History Updated")
        window.location.href = "/purchase_history";
    })
})
$("#update_rental").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/rentals/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Rental Updated")
        window.location.href = "/rental";
    })
})

if(window.location.pathname=="/transaction"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/transactions/'+id,
        "method":"DELETE",
    }

    if(confirm("The selected transaction will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/transaction";
    })
    }
    })
}
if(window.location.pathname=="/purchase_history"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/purchase_histories/'+id,
        "method":"DELETE",
    }

    if(confirm("The selected purchase will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/purchase_history";
    })
    }
    })
}
if(window.location.pathname=="/rental"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/rentals/'+id,
        "method":"DELETE",
    }

    if(confirm("The selected rental will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/rental";
    })
    }
    })
}

if(window.location.pathname=="/worker"){
    $ondelete=$(".table tbody td a.delete")
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
        "url": 'http://localhost:3000/api/workers/'+id,
        "method":"DELETE",
    }

    if(confirm("The selected worker will be deleted.")){
        $.ajax(request).done(function(response){
        alert("Data Deleted succesfully");
        window.location.href = "/worker";
    })
    }
    })
}

$("#update_worker").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data={};
    console.log('HI');
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data)
    var id=data.id
    console.log(id)
    var request={
        "url": 'http://localhost:3000/api/workers/'+data.id,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Worker Updated")
        window.location.href = "/worker";

    })
})