let questions = ["Who is the father of Computer?","Who is the father of Artificial Intelligance?"];
let answers = [{q1:["Charles Babbage", "Alan Turing", "Konrad Zuse", "Ada Lovelavce"]},"Alan Turing"];

var que = document.getElementById('que');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
let options = [a,b,c,d];
// document.que.innerHTML = questions[0];

function update() {
    que.innerHTML = questions[0];

}
// for (let i=0;i<questions.length;i++) {

// }
// do {

// }