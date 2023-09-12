//*****************  card render using object************************

var questionData = [
    
    {
      question: "What is the Full Form Of HTML",
      options: [
        "HyperText Makeup Language",
        "HyperText Markup Language",
        "HyperText Markup Lame",
        "HyperTate Markup Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What does CSS stands for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      question: "What does PHP stands for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      question: "What does SQL stands for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      question: "What year was JavaScript launched?",
      answer: "1995",
      options: ["1996", "1995", "1994", "None of the Above"],
    },
  ];

  var questionText=document.getElementById("questionText");
  var optionsText=document.getElementById("optionsText");
  var questionIndex=0;
  var questionCount=document.getElementById("count");
  var score=0;
  var result=document.getElementById("result");

   function renderQuestion (){
    if(questionIndex<questionData.length)
    {
        questionText.innerHTML=questionData[questionIndex].question;
    questionCount.innerHTML=`Question count ${questionIndex+1}/${questionData.length}`;
    optionsText.innerHTML="";
    for(var i=0;i<questionData[questionIndex].options.length;i++)
    {
        optionsText.innerHTML += ` <div class="col-md-6 col-12">
        <div class="mt-3">
            <button onclick="checkAnswer('${questionData[questionIndex].options[i]}','${questionData[questionIndex].answer}')" class=" custom-btns  btn-lg w-100 shadow-lg">${questionData[questionIndex].options[i]}</button>
           
        </div>
    </div>`
    }
    }
    else{
        result.innerHTML=`<h3 class="heading px-3">Result: ${score}/${questionData.length}</h3>`;
        result.innerHTML +=`<h3 class="heading px-3"> Percentage : ${(score/questionData.length)*100} %`;
        // stopTimer();
        
    }
}
renderQuestion();

    
   function nextQuestion(){
    questionIndex++;
    // console.log(questionIndex);
    renderQuestion();
    stopTimer();
    
    setTimer();
   }

   function checkAnswer(selectedAnswer,correctAnswer){
    // console.log("user selected answer.............",selectedAnswer);
    // console.log("correct answer.............",correctAnswer);
    if(selectedAnswer===correctAnswer)
    {
        score++;
    }
    nextQuestion();
    stopTimer();
    setTimer();
    

   }

  


var interval;
var min;
var sec;
var m,s;

function setTimer()
{
  var timer=document.getElementById("timer");
  timer.innerHTML=` <div class="d-flex px-2 justify-content-between custom-timer fst-italic fw-semibold">
  <p>duration  :  </p>
  <p id="min" class="px-1"> 2 </p>
  <p id="sec" class="px-1" >   1 </p>
  
  
  </div>`;
  min=document.getElementById("min");
  sec=document.getElementById("sec");
  m=min.innerHTML;
  // console.log(m);
  s=sec.innerHTML;
  // console.log(s);
  interval = setInterval(() => 
  {
    if(s===0)
    {
      if(m===0)
      {
       
        // stopTimer();
      }
      else
      {
        m--;
        s=59;
        min.innerHTML=m;
        sec.innerHTML=s;
      }

     
    }
    else{
      s--;
      sec.innerHTML=s;
    }
    if(m===0 && s===0)
    {
      
      nextQuestion();
      
    }

   
   
    
    
  
  },1000)

}
setTimer();

function stopTimer()
{
  s=1;
  m=2;
  min.innerHTML=m;
  sec.innerHTML=s;
  clearInterval(interval);
}
// stopTimer();




   
   


