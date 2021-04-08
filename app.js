$(document).ready(function() {


    formula();




});
/*var a = parseInt(prompt("Introduce A:"));
var b = parseInt(prompt("Introduce B"));
var c = parseInt(prompt("Introduce  C"));


var sol1 = -((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
var sol2 = -((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);

alert("sol1:" + sol1);
alert("sol2:" + sol2);*/
var a;
var b;
var c;

function formula() {
    var a = prompt("Introduce A:");
    var b = prompt("Introduce B");
    var c = prompt("Introduce  C");
    var x1;
    var x2;
    var r;

    if (a != 0) {
        r = b * b - 4 * a * c;
        if (r >= 0) {
            x1 = (-b + Math.sqrt(r)) / (2 * a);
            x2 = (-b - Math.sqrt(r)) / (2 * a);

            console.log(x1);
            console.log(x2);

        } else {
            alert("r1" + x1);
        }
    } else {
        alert("r2" + x2);
    }


}