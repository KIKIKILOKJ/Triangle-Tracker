function() {
var dimension1=parseInt(document.getElementById("Dimension 1").value);

var dimension2=parseInt(document.getElementById("Dimension 2").value);

var dimension3=parseInt(document.getElementById("Dimension 3").value);

var answer=document.getElementsById("answer");

if(Dimension 1===Dimension 2 && Dimension 1===Dimension 3) {
alert(answer("Equilateral Triangle!"));

}else if (Dimension 2===Dimension 1||Dimension 1===Dimension 3||Dimension 2===Dimension 3) {
alert(answer("Isosceles Triangle!"));

}else {
alert(answer("Scalene Triangle!"));
}
}
