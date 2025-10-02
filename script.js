function milage(){

let oldodameter = parseFloat(document.getElementById("in1").value);
let newodameter = parseFloat(document.getElementById("in2").value);

let reading = newodameter-oldodameter;

document.getElementById("v1").innerHTML="Your trip kilometer is " + reading + " km/l";

let Fuel = parseInt(document.getElementById("v3").value);
let Milage=reading/Fuel;

document.getElementById("final").innerHTML="Your Milage is " + Milage + " km/l";

if(isNaN(oldodameter)||isNaN(newodameter)||isNaN(Fuel)||Fuel<0||newodameter<oldodameter){
    document.getElementById("v1").innerHTML="Enter valid data";
    document.getElementById("final").innerHTML=" ";
    return;
}
}

