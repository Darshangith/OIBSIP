function Celsius(){
    var celsius=parseFloat(document.getElementById("celsius").value);
    var fahrenheitResult=(1.8*celsius)+32;

    document.getElementById("Fahrenheit").value=String(fahrenheitResult);
}
function Fahrenheit(){
    var fahrenheit=parseFloat(document.getElementById("Fahrenheit").value);
    var celsiusResult=(fahrenheit-32)/1.8;
    document.getElementById("celsius").value=String(celsiusResult);
}
function reset(){
    document.getElementById("celsius").value="";
    document.getElementById("Fahrenheit").value="";
}