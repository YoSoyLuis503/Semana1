
function funcion(){
    alert("hola mundo");
}


function mostrarGif() {
    var gifElement = document.getElementById("gif");

    gifElement.src = "imagenes/wilson.gif";

    gifElement.style.display = "block";

    setTimeout(function() {
        ocultarGif();
    }, 3000);
    
}

function ocultarGif() {
    var gifElement = document.getElementById("gif");

    gifElement.style.display = "none";
}

