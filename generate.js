const num = prompt("Multipy by", null);
const Amount = prompt("Amount of answers:","");
var current = 1;
let text = "";
let i = 0;


function generate() {
    while (i < Amount) {
        text += "<br>" + num + " x " + current + " = " + current*num
        current++;
        document.getElementById("numbers").innerHTML = text
        i++;
      }
}
