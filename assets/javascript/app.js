// on document load
$(function() {


var correctAnswer;
var question;
var correctAnswer;
var theCorrectAnswer;
var eachAnswer;
var eachAnswers = [];
var wrongAnswer = [];
var chosenAnswer;


// Function to create objects
function questions(theQuestion,thePossibleAnswers,theCorrectAnswer) {
    
        this.question = theQuestion;
        this.possibleAnswers = thePossibleAnswers;
        this.correctAnswer = theCorrectAnswer;
    
        this.showQuestion = function() {
            $('.question').text(this.question);
            console.log('The Question is: ' + this.question);
        }
    
        this.showPossibleAnswers = function() {
            this.possibleAnswers.forEach(function(eachAnswer) {
                console.log("Possible Answers " + eachAnswer);
                $('.game').append('<p>' + eachAnswer + '</p>');
            });
            
        }
    
        this.showCorrectAnswer = function() {
            console.log('The correct answer is: ' + this.correctAnswer);
        }
    
    
    } //  questions function


    // countdown timer

    var i = 5;
    
    function startTimer() {
    
        var countdownTimer = setInterval(function() {
    
            $('.timer').html("Time Left: " + i);
            i = i - 1;
    
            if (i <= -1) {
                clearInterval(countdownTimer);
            }
    
        }, 1000);
    
    }
    
     



var questionOne = new questions("Which of the Beatles is barefoot on the Abby Road album cover?",["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"], "Paul McCartney");
    // questionOne.showQuestion();
    // questionOne.showPossibleAnswers();
    // questionOne.showCorrectAnswer();

var questionTwo = new questions("'Stairway to Heaven' a song by English rock band Led Zeppelin was originally released on which of their albums?",["Led Zeppelin IV","Led Zeppelin II", "Led Zeppelin III", "Coda"], "Led Zeppelin IV");
    // questionTwo.showQuestion();
    // questionTwo.showPossibleAnswers();
    // questionTwo.showCorrectAnswer();

var questionThree = new questions("What American punk rock band released their best-selling album 'Dookie' in 1994?",["Green Day","Rancid", "Blink-182", "The Offspring"], "Green Day");
var questionFour = new questions("American singer-songwriter Johny Cash passed away in what year?",["2003","2001", "1997", "2005"], "2003");





    // on game start show start button only
    $('.question').html('<button type="button" class="btn btn-danger btn-lg btn-block">Start</button>');


    // onclick start button  replace HTML ask a question, and give for answers.  and start timer for 25 seconds
        $('body').on('click', '.questionBtn', function() {

            
            questionOne.showQuestion();
            questionOne.showPossibleAnswers();
            

       

        });

        $('body').on('click', '.game p', function() {

           $(this).addClass('chosen-Answer');

           chosenAnswer = $('.chosen-Answer').text();
           console.log("chosenAnswer: " + chosenAnswer);

           questionOne.showCorrectAnswer();

            if (chosenAnswer === theCorrectAnswer ) {
                alert("you right fool");
            } else {
                alert("you done messed up");
            }


 

        });

        


  



// if user gets it right display "you are right!" and a giphy or something related to the answer

// automatically move on to next questions.

// if user gets it wrong say "you are wrong" and show them the correct answer and giphy.

// At end show them number of right, wrong, and unanswered questions. 




    


});