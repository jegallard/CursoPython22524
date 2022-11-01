function validateForm(){
    //alert("validar formulario")
}

function submitForm(){
    var URL = "https://api.whatsapp.com/send?phone=";
    var telefono = "541169253443";
    var textoNombre = "&text=Hola%20soy%20";
    var nombre = document.getElementById("inputNombre").value;
    var textoMail = "%20mi%20email%20es%20";
    var mail = document.getElementById("inputEmail").value;
    var textoReason = "%20y%20";
    var reason = document.getElementById("inputReason").value;
    //alert("Usted será redireccionado a Whatsapp");
    var final = URL+telefono+textoNombre+nombre+textoMail+mail+textoReason+reason;
    //alert(final);
    //alert("windows.location.replace");
    window.location.replace(final);
}