// on document load
$(function() {


var correctAnswer;
var wrongAnswer;
var unAnswered;
var guessedAnswer;
var question;
var answers;
var correctAnswer;
var randomQuestion;
var chosenQuestion = [];
var whatever;
var theCorrectAnswer;

var questions = [
    {question: "Which of the Beatles is barefoot on the Abby Road album cover?",
    answers: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
    correctAnswer: "Paul McCartney"},

    {question: "'Stairway to Heaven' a song by English rock band Led Zeppelin was originally released on which of their albums?",
    answers: ["Led Zeppelin IV","Led Zeppelin II", "Led Zeppelin III", "Coda"],
    correctAnswer: "Led Zeppelin IV"},

    {question: "What American punk rock band released their best-selling album 'Dookie' in 1994?",
    answers: ["Green Day","Rancid", "Blink-182", "The Offspring"],
    correctAnswer: "Green Day"},

    {question: "American singer-songwriter Johny Cash passed away in what year?",
    answers: ["2003","2001", "1997", "2005"],
    correctAnswer: "2003"}
]
    
;



console.log("test " + questions[1].question + " " + questions[1].answers[2] + " " + questions[1].correctAnswer);

for (var i = 0; i <  questions.length; i++) {
    chosenQuestion = questions[i].question;
    console.log('questions ' + chosenQuestion);

    theCorrectAnswer = questions[i].correctAnswer
    console.log('theCorrectAnswer ' + theCorrectAnswer);

    

    for (var j = 0; j < questions[i].answers.length;  j++ ) {

        whatever =  questions[i].answers[j];
        console.log('answers ' + whatever);
    }
    
}

 //  iterate through each question
    // on game start show start button only
    $('.question').html('<button type="button" class="btn btn-danger btn-lg btn-block">Start</button>');


// onclick start button  replace HTML ask a question, and give for answers.  and start timer for 25 seconds

    $('.questionBtn').on('click', function(){
        
       

    
        // Ask the Questions




        
        

        
        // Possible Answers
     
    });

 



// if user gets it right display "you are right!" and a giphy or something related to the answer

// automatically move on to next questions.

// if user gets it wrong say "you are wrong" and show them the correct answer and giphy.

// At end show them number of right, wrong, and unanswered questions.  
});