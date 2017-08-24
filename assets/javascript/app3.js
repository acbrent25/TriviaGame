// on document load
$(document).ready(function() {
    
    
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
    var questionList;
    wins = 0;
    losses = 0;
    ties = 0;
    
    var questions = [
        {
            question: "Which of the Beatles is barefoot on the Abby Road album cover?",
            answers: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
            correctAnswer: "Paul McCartney"
        },
    
        {
            question: "'Stairway to Heaven' a song by English rock band Led Zeppelin was originally released on which of their albums?",
            answers: ["Led Zeppelin IV","Led Zeppelin II", "Led Zeppelin III", "Coda"],
            correctAnswer: "Led Zeppelin IV"
        },
    
        {
            question: "What American punk rock band released their best-selling album 'Dookie' in 1994?",
            answers: ["Green Day","Rancid", "Blink-182", "The Offspring"],
            correctAnswer: "Green Day"
        },
    
        {
            question: "American singer-songwriter Johny Cash passed away in what year?",
            answers: ["2003","2001", "1997", "2005"],
            correctAnswer: "2003"
        }
    ]
        



    var intermissionCounter = 5;
    
        function intermissionTimer() {
            var interval = setInterval(function(){
                intermissionCounter--;
                $('.timer').text(cintermissionCounter);
                if(intermissionCounter === 0) {
                    clearInterval(interval);
                }          
            }, 1000);
        }

     //  iterate through each question
        // on game start show start button only
        $('.questionBtn').html('<button type="button" class="btn btn-danger btn-lg btn-block">Start</button>');
    
    
    // onclick start button  replace HTML ask a question, and give for answers.  and start timer for 25 seconds
        $('body').on('click', '.questionBtn', function(){


            var counter = 10;
            
                function triviaTimer() {
                    var interval = setInterval(function(){
                        counter--;
                        $('.timer').text(counter);
                        if(counter === 0) {
                            clearInterval(interval);
                            ties++;
                            $('.question').text("You're out of time!");
                            $('.answers').html('<img src="assets/images/no.gif">');
                            
                            
                        }          
                    }, 1000);
                }



            $('.questionBtn').hide();
            // Print first question and possible answers to dom
            $('.question').text(questions[0].question);
            $('.answers').html('<p>' + questions[0].answers[0] + '</p>' + '<p>' + questions[0].answers[1] + '</p>' + '<p>' + questions[0].answers[2] + '</p>'  + '<p>' + questions[0].answers[3] + '</p>');
            
            // Add Class to selected Answer
            $('body').on('click', '.answers p', function() {
                
                $(this).addClass('selected');
                guessedAnswer = $('.selected').text();
                console.log('guessedAnswer = ' + guessedAnswer);

                    if (guessedAnswer === questions[0].correctAnswer) {
                        wins++;
                        $('.question').text("Good Job! You Know Your Album Covers");
                        $('.answers').html('<img src="assets/images/abbyroad.jpg">')

                    } else {
                        losses++
                        $('.question').text("Sorry, Better Luck Next Time");
                        $('.answers').html('<img src="assets/images/abbyroad.jpg">');
                    }

            });

        }); // body on click question btn

        function nextQuestion() {

            // triviaTimer();
            // Print first question and possible answers to dom
            $('.question').text(questions[1].question);
            $('.answers').html('<p>' + questions[1].answers[0] + '</p>' + '<p>' + questions[1].answers[1] + '</p>' + '<p>' + questions[1].answers[2] + '</p>'  + '<p>' + questions[0].answers[3] + '</p>');
            
            // Add Class to selected Answer
            $('body').on('click', '.answers p', function() {
                
                $(this).addClass('selected');
                guessedAnswer = $('.selected').text();
                console.log('guessedAnswer = ' + guessedAnswer);

                    if (guessedAnswer === questions[0].correctAnswer) {
                        wins++;
                        $('.question').text("Good Job! You Know Your Album Covers");
                        $('.answers').html('<img src="assets/images/abbyroad.jpg">')

                    } else {
                        losses++
                        $('.question').text("Sorry, Better Luck Next Time");
                        $('.answers').html('<img src="assets/images/abbyroad.jpg">');
                    }

            });



        }
    
     

    
    
    // if user gets it right display "you are right!" and a giphy or something related to the answer
    
    // automatically move on to next questions.
    
    // if user gets it wrong say "you are wrong" and show them the correct answer and giphy.
    
    // At end show them number of right, wrong, and unanswered questions.  
    });