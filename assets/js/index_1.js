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
    })
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
        alert("Product Updated")
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
    })
})