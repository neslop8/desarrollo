function traerInformacionGames(){
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games", //colocar la http del modulo de la tabla GAMES
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaGames(respuesta.items)
        }
    });
}

function pintarRespuestaGames(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].developer+"</td>";
        myTable+="<td>" +items[i].minage+"</td>";
        myTable+="<td>" +items[i].category_id+"</td>";
        myTable+="<td>" +items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElementoGames("+items[i].id+")'>Borrar</button></td>";
        myTable+="<td> <button onclick='obtenerElementoGames("+items[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoGames").append(myTable);
}

function guardarInformacionGames(){
    let myData={
        id:$("#id").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games", //colocar la http del modulo de la tabla GAMES
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#nameGame").val("");
            traerInformacionGames();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionGames(){
    let myData={
        id:$("#idGame").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#nameGame").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games", //colocar la http del modulo de la tabla GAMES
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoGames").empty();
            $("#idGame").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#nameGame").val("");
            traerInformacionGames();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoGames(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games", //colocar la http del modulo de la tabla GAMES
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoGames").empty();
            traerInformacionGames();
            alert("Se ha Eliminado.")
        }
    });
}

function obtenerElementoGames(idItem){        
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games/"+idItem, //colocar la http del modulo de la tabla GAMES
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            var item=respuesta.items[0];

            $("#idGame").val(item.id);
            $("#developer").val(item.developer);
            $("#minage").val(item.minage);
            $("#category_id").val(item.category_id);
            $("#nameGame").val(item.name);
        }
    });
}

//tabla CLIENT

function traerInformacionClient(){
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", //colocar la http del modulo de la tabla CLIENT
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta.items)
        }

    });
}

function pintarRespuestaClient(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].name+"</td>";
        myTable+="<td>" +items[i].email+"</td>";
        myTable+="<td>" +items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoClient("+items[i].id+")'>Borrar</button></td>";
        myTable+="<td> <button onclick='obtenerElementoClient("+items[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClient").append(myTable);

}

function guardarInformacionClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", //colocar la http del modulo de la tabla CLIENT
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", //colocar la http del modulo de la tabla CLIENT
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            $("#idClient").val("");
            $("#nameClient").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionClient();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client", //colocar la http del modulo de la tabla CLIENT
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoClient").empty();
            traerInformacionClient();
            alert("Se ha Eliminado.")
        }
    });
}

function obtenerElementoClient(idItem){        
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/"+idItem, //colocar la http del modulo de la tabla CLIENT
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            var item=respuesta.items[0];

            $("#idClient").val(item.id);
            $("#nameClient").val(item.name);
            $("#email").val(item.email);
            $("#age").val(item.age);            
        }
    });
}


//tabla MESSAGE

function traerInformacionMessage(){
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",  //colocar la http del modulo de la tabla MESSAGE
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta.items)
        }


    });
}

function pintarRespuestaMessage(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id+"</td>";
        myTable+="<td>" +items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMessage("+items[i].id+")'>Borrar</button></td>";
        myTable+="<td> <button onclick='obtenerElementoMessage("+items[i].id+")'>Cargar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMessage").append(myTable);

}

function guardarInformacionMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message", //colocar la http del modulo de la tabla MESSAGE
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
           traerInformacionMessage();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",  //colocar la http del modulo de la tabla MESSAGE
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            traerInformacionMessage();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMessage(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",  //colocar la http del modulo de la tabla MESSAGE
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMessage").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado.")
        }
    });
}

function obtenerElementoMessage(idItem){        
    $.ajax({
        url:"https://g27a7025f783a85-reto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+idItem, //colocar la http del modulo de la tabla MESSAGE
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            var item=respuesta.items[0];

            $("#idMessage").val(item.id);
            $("#messagetext").val(item.messagetext);    
        }
    });
}