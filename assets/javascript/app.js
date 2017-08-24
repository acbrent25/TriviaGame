// on document load
$(document).ready(function() {
    
    
    // win loss variables
    wins = 0;
    losses = 0;
    ties = 0;
    
    // Set up questions and answers
    var questions = [
        {
            question: "Which of the Beatles is barefoot on the Abby Road album cover?",
            choices: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
            answer: "Paul McCartney"
        },
    
        {
            question: "'Stairway to Heaven' a song by English rock band Led Zeppelin was originally released on which of their albums?",
            choices: ["Led Zeppelin IV","Led Zeppelin II", "Led Zeppelin III", "Coda"],
            answer: "Led Zeppelin IV"
        },
    
        {
            question: "What American punk rock band released their best-selling album 'Dookie' in 1994?",
            choices: ["Green Day","Rancid", "Blink-182", "The Offspring"],
            answer: "Green Day"
        },
    
        {
            question: "American singer-songwriter Johny Cash passed away in what year?",
            choices: ["2003","2001", "1997", "2005"],
            answer: "2003"
        }
    ] // end questions.
        


    // On page load show title and start button.


    $('.questionBtn').html('<button type="button" class="btn btn-primary btn-lg">Start Game</button>');

    // When user clicks start button start timer and populate questions.

    // on click hide button start timer load questions.

    $('body').on('click', '.questionBtn', function(){

        // hide question btn
        $('.questionBtn').hide();


        // timer 
        var t = 120;
        var timeOut = setTimeout(countDown, 1000);

        function countDown() {
            t--;
            if (t > 0){
                setTimeout(countDown, 1000);
            }
            $('.timer').text(t);
            if(t === 0) {
                // reset game
            } 

        } // timer

    
        

            // Loops through questions and prints
            for (var i = 0; i < questions.length; i++) {
                // Creates question section
                var printQuestion = $("<div>");

                // Add bootstrap class for styles
                printQuestion.addClass("form-group");

                // Create area for question to be actually printed
                var question = $("<label>");

                // Give that section it's question
                question.text(questions[i].question);

                // Loop through possible choices for each question and print them out (using j because i is already being used)
                for (var j = 0; j < questions[i].choices.length; j++) {
                // Create div for each radio button
                var choice = $("<div>");
                // Add bootstrap class to it
                choice.addClass("form-check radio");

                // Create area for choice/possible answer
                var choiceText = $("<label>");
                // Give them styles
                choiceText.addClass("form-check-label");
                // Give it text
                choiceText.text(questions[i].choices[j])

                // Create actual radio button
                var choiceInput = $("<input>");
                // Adds bootstrap class
                choiceInput.addClass("form-check-input");	
                // Sets input type to radio (instead of text, number, etc)
                choiceInput.attr("type", "radio");
                // Give radio buttons for each question same name so they are related to one another (select one and the others deselect)
                choiceInput.attr("name", i);
                // Give it a data attribute to potentially check against for correct question
                choiceInput.attr("data-question", i);
                // Give it a data attribute to check against for correct answer
                choiceInput.attr("data-answer", j);

                // Place ChoiceText and ChoiceInput into Choice div
                choice.append(choiceInput).append(choiceText);

                // Append entire choice to question
                question.append(choice);

                }
                // Append entire question to div
                printQuestion.append(question)

                // Append entire div to form
                $(".form-element").append(printQuestion);

            }

            // Bind event handler for all elements with a radio type (see jQuery selectors)
            $("body").on("change", ":radio", function() {
                console.log($(this).data("answer"))
            })
                
    
    
    
    

}); // question button click / start game



});