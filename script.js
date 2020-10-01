//
//AS A coding bootcamp student
//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers


//## Acceptance Criteria
//function startQuiz ();

//GIVEN I am taking a code quiz
//!be sure that the tab in the browser also alerts that you are taking a coding quiz.
//WHEN I click the start button
//! create a start button for the beginning of the quiz, this will link to a function that runs the onclick command.
    //THEN a timer starts and I am presented with a question
//WHEN I answer a question
//!questions need to be generated dynamically using javascript, and change when one is answered.
    //THEN I am presented with another question
    //!dynamically generated questions!!
//WHEN I answer a question incorrectly
    //THEN time is subtracted from the clock
    //! this timing element needs some function that will deduct time from the running clock with every missed question.
//WHEN all questions are answered or the timer reaches 0
    //THEN the game is over
    //!when the time runs out the game is over, function stops running!!
//WHEN the game is over
//!the score needs to be displayed on the end game screen where they can then attach their initials, and save their score.
    //THEN I can save my initials and score



    //** */ Start by creating your speed quiz variable and then build an array to hold all of the question, possible responses and the correct answer. this should allow you to switch from question to question every time the submit button is pressed.


var speedQuiz = [
    {
        "question" : "where in the html document should you place the script tag for JS ?",
        "butA" : "In the head tag",
        "butB" : "End of the body tag",
        "butC" : "Between head and body tags",
        "answer" : "End of the body tag",
    },
    {
        "question" : "How long is the coding boot camp ?",
        "butA" : "Eight weeks",
        "butB" : "Sixteen weeks",
        "butC" : "Twelve weeks",
        "answer" : "Twelve weeks",
    },
    {
        "question" : "why would you use the <br> tag ?",
        "butA" : "Line break",
        "butB" : "Brackets",
        "butC" : "For fun",
        "answer" : "Line break",
    },
    {
        "question" : " which tag would you use to create an ordered list ?",
        "butA" : "ul",
        "butB" : "dl",
        "butC" : "ol",
        "answer" : "ol",
    },
    {
        "question" : "Which coding language would you use for the layout/ presentation of web pages?",
        "butA" : "HTML",
        "butB" : "CSS",
        "butC" : "JavaScript",
        "answer" : "CSS",
    },
    {
        "question" : "Is Java the same as JavaScript",
        "butA" : "yes",
        "butB" : "Obviously",
        "butC" : "NO!!",
        "answer" : "NO!!",
    },
];

    //! Should run through all six questions that you built into the array above (test to make sure).

    //** create the variable for the dynamic movement to go through the array that you built above., and also create the variable that will be used for the number of correct answers that you get after taking the quiz.

var i = 0;
var correctCount = 0 ;
var secondsLeft = 60;

var startButton = document.getElementById("startBtn")


    //** */ the generate function should initiate the running of the array from its first part of the array which would be 0.
generate(0);

    //**the next function needs to not only show what the possible answers are to the speed quiz but in needs to show what the question is that was generated in that speedQuiz array.

    function generate(index) {
        document.getElementById("quest").innerHTML = speedQuiz[index].question;
        document.getElementById("buttonA").innerHTML = speedQuiz[index].butA;
        document.getElementById("buttonB").innerHTML = speedQuiz[index].butB;
        document.getElementById("buttonC").innerHTML = speedQuiz[index].butC;
    }

   
    

    function checkAnswer() {
        if (document.getElementById("buttonA").checked && speedQuiz[i].butA == speedQuiz[i].answer) {
        correctCount++;
        }
        if (document.getElementById("buttonB").checked && speedQuiz[i].butB == speedQuiz[i].answer) {
            correctCount++;
        }
        if (document.getElementById("buttonC").checked && speedQuiz[i].butC == speedQuiz[i].answer) {
            correctCount++;
        }
        // increment i for next question
        i++;
        if(speedQuiz.length-1 < i){
            document.write("<body style='background-color:b48966 ;'>");
            document.write("<div style='color:#ffffff;font-size:30pt;text-align:center;'>!!This is your score on the speed quiz : "+correctCount+"!!</div>");
            
            document.write("<div style='color:#ffffff;font-size:20pt;text-align:center;'>save your initials with your score below:</div>");

            document.write("<input type='password' name='password' id='password' placeholder='ABCDEF' />")
            document.write("<<button id='sign-up'>Save initials </button>");





            document.write("</body>");
        }
            //** bellow is the callback function which will be needed in order to generate the questions dynamically for the quiz.

        generate(i);
        
            //TODO commented out thew check answer function so that it could be moved to the index.html where the button is generated.
        ////checkAnswer();

        
    }

    var timeEl = document.querySelector(".time");
var secondsLeft = 60;

var myCountdown = setInterval(function(){
  secondsLeft--;
  timeEl.textContent = secondsLeft + "seconds left until the end";
  if(secondsLeft == 0){
    clearInterval(myCountdown)
  }
}, 1000)





function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till end of quiz.";

    if(secondsLeft == 0) {
      clearInterval(timerInterval);
      sendMessage();
      alert= "time is up";
    }
  }, 1000);
}
setTime();
//checkAnswer();