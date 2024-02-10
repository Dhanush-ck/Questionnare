let questions = ["Who is the father of Computer?","How many Bits make one Byte?", "Which electronic component was used in the first generation of computers?"];
const optns = [["Charles Babbage", "Alan Turing", "Konrad Zuse", "Ada Lovelavce"], ["16 Bits", "32 Bits", "8 Bits", "64 Bits"], ["Vaccum Tube", "Transistor", "Microprocessor", "Integrated Circuit(IC)"]];
let answers = ["Charles Babbage", "Alan Turing", "Vaccum Tube"];

var que = document.getElementById('que');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
const nxt = document.getElementById('next');
let options = [a,b,c,d];

let i=1;
let k;

nxt.addEventListener('click', (e)=> {
    if(i<questions.length){
        k=i;
    }
    while(i<=k) {
        for(let j=0;j<4;j++) {
            que.innerHTML = questions[i];
            options[j].innerHTML = optns[i][j];
        } 
        i++;
    }
});

function update() {
    for(let j=0;j<4;j++) {
        i=1;
        que.innerHTML = questions[0];
        options[j].innerHTML = optns[0][j];
    }
}