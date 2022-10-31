function validateForm(){
    var URL = "https://api.whatsapp.com/send?phone="
    var telefono = "541169253443"
    var textoNombre = "&text=Hola%20soy%20"
    var nombre = document.getElementById("inputNombre").value
    var textoMail = "%20mi%20email%20es%20"
    var mail = document.getElementById("inputEmail").value
    var textoReason = "%20y%20"
    var reason = document.getElementById("inputReason").value
    alert("Usted será redireccionado a Whatsapp")
    var final = URL+telefono+textoNombre+nombre+textoMail+mail+textoReason+reason
    alert(final)
    //window.location.replace(final);
    //alert("windows.location")
    window.location.replace("http://stackoverflow.com");
    //alert("windows.location.href")
    window.location.href = "http://stackoverflow.com";
    //alert("location.replace")
    location.replace("http://stackoverflow.com")
    //alert("location.href")
    location.href("http://stackoverflow.com")
    //location.assign(final)
    //document.location.href="http://manouvellepage.com"
}