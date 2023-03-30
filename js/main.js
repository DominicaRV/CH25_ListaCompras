// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");
let alertValidacionesTexto =document.getElementById("alertValidacionesTexto");
let alertValidaciones =document.getElementById("alertValidaciones");


btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});
btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
  let lista ="Los siguientes campos deben ser rellenados correctamente: <ul>";
  if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        alertValidaciones.style.display="block"; 
        lista +="<li>Se debe escribir un nombre valida</li>";
    }else{
        txtNombre.style.border="";
    }
    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        alertValidaciones.style.display="block";
        lista +="<li>Se debe escribir una cantidad valida</li>";
    }else{
        txtNumber.style.border="";
    }
    lista +="</ul>";
alertValidaciones.insertAdjacentHTML("beforeend", lista)
});

txtNombre.addEventListener("blur",function(event){
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});
txtNumber.addEventListener("blur",function(event){
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
});

