const quizData=[{
    Question: "Father of Physics?",
    a:"Newton",
    b:"Aris Totle",
    c:"Galileo",
    d:"Robert Brown",
    correct:"a",
    },
{
    Question: "Total no. of bones in new born baby?",
    a:"206",
    b:"350",
    c:"300",
    d:"250",
    correct:"c",
    },
{
    Question: "CSS stands for?",
    a:"Cascading Style Sheet",
    b:"Cyber security source",
    c:"Camel State Source",
    d:"Code Connecting Set",
    correct:"a",
    },
    {
        Question: "Father of Mathematics?",
        a:"Newton",
        b:"Aryabhatta",
        c:"Ramanujan",
        d:"Paul Coelho",
        correct:"c",
        },
    ]
    let index=0;
    let correct=0;
    let incorrect=0;
    let total=quizData.length;
    let questionBox=document.getElementById("questionBox");
    let alInputs=document.querySelectorAll("label");
    let allInputs=document.querySelectorAll("input");
    const loadQuestion=()=>{
        if(index==total){
return endQuiz();
}
const data=quizData[index]
questionBox.innerHTML=data.Question
alInputs[0].innerHTML=data.a;
alInputs[1].innerHTML=data.b;
alInputs[2].innerHTML=data.c;
alInputs[3].innerHTML=data.d;    
}
const submitQuiz=()=>{
const data=quizData[index]
    const ans=getAnswer();
if(ans==data.correct){
    correct++;
}else{
    incorrect++;
}
index++;
loadQuestion()
}
const getAnswer=()=>{
let answer;
allInputs.forEach(
    input=>{
        if(input.checked){
            answer=input.value;
            input.checked=null;
        }
    }
);
return answer;
}
const endQuiz=()=>{
    document.querySelector(".container").innerHTML=`<h3>Thank you for playing the Quiz</h3>
    <h2>${correct}/${total} are correct</h2>`
}
loadQuestion();