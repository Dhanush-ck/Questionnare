let questions = ["Who is the father of Computer?","How many Bits make one Byte?", "Which electronic component was used in the first generation of computers?", "What is the full form of RAM?", "An address given to a computer connected to a network is called ?", "C, Java, C++ and PHP are examples for?"];
const optns = [["Charles Babbage", "Alan Turing", "Konrad Zuse", "Ada Lovelavce"], ["16 Bits", "32 Bits", "8 Bits", "64 Bits"], ["Vaccum Tube", "Transistor", "Microprocessor", "Integrated Circuit(IC)"], ["Random Applicable Memory", "Read Access Memory", "Read Applicable Memory", "Random Acces Memory"], ["Local address", "Localhost", "Network address", "IP adderss"], ["Software Types", "Firmware", "Programming Languages", "Programming Translators"]];
let answers = ["Charles Babbage", "8 Bits", "Vaccum Tube", "Random Acces Memory", "IP adderss", "Programming Languages"];

var que = document.getElementById('que');
var result = document.getElementById('result');
const modal = document.getElementById('modal');
let message = document.getElementById('message');

var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
const nxt = document.getElementById('next');
let options = [a, b, c, d];

let i=0;
let k=0;


function next() {
    modal.close();
    if (result.innerHTML === "") {
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
    }
    if ((result.innerHTML === "Right Answer")&&(k !== questions.length-1)) {
        result.innerHTML = "";
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
    }
    if ((result.innerHTML === "Right Answer")&&(k===questions.length-1)) {
        message.innerHTML = "You Won";
        que.style.display = 'none';
        let arr = Array.from(option);
        arr.forEach(buttonId=> {
            const opt = document.getElementById(buttonId);
            opt.style.display = 'none';
        });
        document.getElementById('hide').style.display = 'flex';
        document.getElementById('start').innerHTML = 'Play Again';
        i=0, k=0;
    }
    if (result.innerHTML === "Wrong Answer") {
        message.innerHTML = "You Got";
        que.style.display = 'none';
        let arr = Array.from(option);
        arr.forEach(buttonId=> {
            const opt = document.getElementById(buttonId);
            opt.style.display = 'none';
        });
        document.getElementById('hide').style.display = 'flex';
        document.getElementById('start').innerHTML = 'Play Again';
        i=0, k=0;
    }
    // console.log(k);
    // console.log(result.innerHTML);
}


function hide() {
    document.getElementById('hide').style.display = 'none';
    
}

function show() {
    que.style.display = 'flex';
    let arr = Array.from(option);
    arr.forEach(buttonId=> {
        const opt = document.getElementById(buttonId);
        opt.style.display = 'block';
    });
}

const option = ['a', 'b', 'c', 'd'];
option.forEach(buttonId=> {
    const opt = document.getElementById(buttonId);
    opt.addEventListener('click', (e)=> {
        if ((e.target.innerHTML === answers[k])&&(k===questions.length-1)) {
            nxt.innerHTML = "Show Result";
        }
        modal.showModal();
        // console.log(k);
        // console.log(answers[k]);
        if (e.target.innerHTML === answers[k]) {
            result.innerHTML = "Right Answer";
            e.target.style.backgroundColor = "Green";
        }
        else
        {
            result.innerHTML = "Wrong Answer";
            nxt.innerHTML = "Show Result";
            e.target.style.backgroundColor = "Red";
        }    
        nxt.addEventListener('click',()=>{
            e.target.style.backgroundColor = "#ffffff";
            
        })
});
});