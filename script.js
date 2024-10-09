const question = [
    {
        question:"Which animal is known as the \"ship of the Deser\"?",
        answers:[
            {choice:"Tiger",correct:"false"},
            {choice:"Elephant",correct:"false"},
            {choice:"Porsche",correct:"false"},
            {choice:"Camel",correct:"true"},
        ]
    },{
        question:"How many days are there in a year?",
        answers:[
            {choice:111,correct:"false"},
            {choice:69,correct:"false"},
            {choice:365,correct:"true"},
            {choice:499,correct:"false"},
        ] 
    },{
        question:"Which of the following are vowels?",
        answers:[
            {choice:"a f j o u j",correct:"false"},
            {choice:"a e i o u",correct:"true"},
            {choice:"a e i o u",correct:"true"},
            {choice:" a b c d e",correct:"false"},
        ]
    },{
        question:"What is square of 1?",
        answers:[
            {choice:1,correct:"true"},
            {choice:3,correct:"false"},
            {choice:5,correct:"false"},
            {choice:4,correct:"false"},
        ]
    }
]






const questionDiv = document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const nextBtn = document.querySelector(".nextBtn");
let score = 0;
let questionIndex = 0;

const resetState = ()=>{
    questionDiv.innerHTML="";
    while(answersDiv.firstElementChild){
        answersDiv.firstElementChild.remove();
    }
    
}

function isCorrectFn(e){
    
    if(e.target.dataset.correct ==="true"){
        score++;
        e.target.classList.add("correct");
    }else{
        e.target.classList.add("incorrect");
    }

    
    Array.from(answersDiv.children).forEach((allAns)=>{
        if(allAns.dataset.correct=== "true"){
            allAns.classList.add("correct");
        }
        allAns.disabled = true;
        allAns
    });
    nextBtn.innerHTML="Next";
    nextBtn.style.display="block";    
}



const startQuizz = ()=>{
    resetState();
    questionDiv.innerHTML = ` ${question[questionIndex].question}`;
    question[questionIndex].answers.forEach((ans)=>{
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = ans.choice;
        answersDiv.append(button);
        
        if(ans.correct === "true"){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener('click',(e)=>isCorrectFn(e));


    })
}

const InitialQuizz  = ()=>{
    score = 0;
    questionIndex = 0;
    startQuizz();
}
const nextQuestion = ()=>{
    questionIndex++;
    if(questionIndex < question.length){
        startQuizz();
    }else{
        resetState();
        questionDiv.innerText = `Your Total Score is ${score} out of ${question.length}`;
        nextBtn.innerHTML = "Try Again";
        questionIndex=-1;
        score = 0;
    }
}

nextBtn.addEventListener('click',nextQuestion);

InitialQuizz();
