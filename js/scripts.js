function answer() {
var dimension1=parseInt(document.getElementById("Dimension 1").value);
var dimension2=parseInt(document.getElementById("Dimension 2").value);
var dimension3=parseInt(document.getElementById("Dimension 3").value);

var answer=document.getElementById("answer")
if(Dimension1===Dimension2 && Dimension1===Dimension3) {
alert ("Equilateral Triangle!");
}else if (Dimension2===Dimension1||Dimension1==Dimension3||Dimension2===Dimension3) {
alert ("Isosceles Triangle!");
}else {
alert ("Scalene Triangle!")
}
}
