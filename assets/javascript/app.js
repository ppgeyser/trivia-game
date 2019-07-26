$(document).ready(function () {

    $('#page-question').hide();
    $('#page-answer').hide();
    $('#page-end').hide();
    $('#page-intro').show();

    //start button on click function
    $("#intro-button").click(function () {

        //hide everything except for question screen
        $('#page-question').show();
        $('#page-answer').hide();
        $('#page-end').hide();
        $('#page-intro').hide();

        var questionBank = [

            {
                "question": "What is Erin's real first name?",
                "correct_answer": "Kelly",
                "incorrect_answers": [
                    "Holly",
                    "Jan",
                    "Megan"
                ]
            },

            {
                "question": "How many times do Jan and Michael have sex while in Jamaica?",
                "correct_answer": "Six Times",
                "incorrect_answers": [
                    "One Time",
                    "Twelve Times",
                    "Two Times"
                ]
            },

            {
                "question": "Where do Jim and Pam have their honeymoon?",
                "correct_answer": "Puerto Rico",
                "incorrect_answers": [
                    "Costa Rica",
                    "Jamaica",
                    "Hawaii"
                ]
            },

            {
                "question": "what is the subject of the painting stuck to wall in Jim's parents' house?",
                "correct_answer": "A Clown",
                "incorrect_answers": [
                    "Jim and his brothers as children",
                    "A bowl of fruit",
                    "The ocean"
                ]
            },

            {
                "question": "What car does Dwight buy from Andy and then immediately re-sell?",
                "correct_answer": "Nissan X-Terra",
                "incorrect_answers": [
                    "Toyota Prius",
                    "Subaru Impreza",
                    "Cadillac Escalade"
                ]
            },

            {
                "question": "Which one of Angela's cats does Dwight stick in the freezer?",
                "correct_answer": "Sprinkles",
                "incorrect_answers": [
                    "Princess Lady",
                    "Bandit",
                    "Mr. Ash"
                ]
            },

            {
                "question": "What is the name of the nightclub Michael and Dwight meet Ryan at in New York City?",
                "correct_answer": "Prerogative",
                "incorrect_answers": [
                    "Serenity",
                    "The Amazon",
                    "The Powder Room"
                ]
            },

            {
                "question": "What movie do Michael and Holly spoof in their company picnic skit?",
                "correct_answer": "Slumdog Millionaire",
                "incorrect_answers": [
                    "Die Hard",
                    "Jaws",
                    "Back to the Future"
                ]
            },

            {
                "question": "What is Katy selling at the office before going on a date with Jim?",
                "correct_answer": "Purses",
                "incorrect_answers": [
                    "Catalogs",
                    "Insurance",
                    "Pretzels"
                ]
            },

            {
                "question": "What is Roy's last name?",
                "correct_answer": "Anderson",
                "incorrect_answers": [
                    "Smith",
                    "Wallace",
                    "Vance"
                ]
            }

        ];

        console.log(questionBank);
        
        var correct = 0
        var incorrect = 0
        var unanswered = 0
        var questionsUsed = []

        //run game function
        gameFunction();

        //game function/randomly select a question
        function gameFunction () {

            //clear question and answers from previous round
            $("#text-question").empty();
            $("#buttons-group").empty();
            
            //randomly select a question
            var random = Math.floor(Math.random() * questionBank.length);
            var questionRandom = questionBank[random];
            console.log(questionRandom);

            //print question
            $('#text-question').text(questionRandom.question);

            //randomize answers

                //create a blank answer bank that both correct and incorrect answers will go into    
                var answerBank = [];

                //push correct answer into answerBank
                answerBank.push(questionRandom.correct_answer);

                //push incorrect answers into answerBank
                for (var i = 0; i < questionRandom.incorrect_answers.length; i++) {
                    answerBank.push(questionRandom.incorrect_answers[i]);
                }

                //shuffle array so that answer isn't constantly in index 0
                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }

                shuffleArray(answerBank);
                console.log(answerBank);

            //print answer buttons
            for (var i = 0; i < answerBank.length; i++) {
                var button = $('<button>');
                var br = $("<br>")
                button.addClass("btn").addClass("btn-primary").addClass("btn-lg").addClass("buttons-answer");
                button.attr("type", "button")
                button.val(answerBank[i]);
                button.text(answerBank[i]);
                $("#buttons-group").append(button);
            }

            //start 30 second timer and print time remaining


            //move question to questionUsed array
            questionsUsed.push(questionRandom);
            questionBank.splice(random, 1);
            console.log(questionsUsed);
            console.log(questionBank);

        }

        //answer button on click
        $(document).on("click", ".buttons-answer", function () {
            var userGuess = $(this).val();
            console.log(userGuess);

            var answer = questionsUsed[(questionsUsed.length)-1].correct_answer;
            console.log(answer);

                //if correct answer selected
                if (userGuess === answer) {
                    console.log("correct!");

                    //hide question page
                    $('#page-question').hide();
                    
                    //show answer page
                    $('#page-answer').show();
                    
                    //print correct answer message
                    var message = $("<h4>");
                    message.text("Correct!");
                    $("#text-answer-alert").append(message);
                    
                    //correct++
                    correct++;
                    
                    //wait 5 seconds
                    setTimeout(fiveSeconds, 5000);

                    function fiveSeconds () {
                        //clear answer screen
                        $("#text-answer-alert").empty();
                        
                        //run game function
                        gameFunction();

                        //return to question page
                        $('#page-question').show();
                        $('#page-answer').hide();
                    }
                }
        
                //if wrong answer selected
                    //hide question page
                    //show answer page
                    //print incorrect answer message
                    //print correct answer
                    //incorrect++
                    //wait 5 seconds
                    //push question into questionUsed array
                    //return to question page
                    //run game function


        })


        //if unanswered
            //hide question page
            //show answer page
            //print unanswered message
            //print correct answer
            //unanswered++
            //wait 5 seconds
            //push question into questionUsed array
            //return to question page
            //run game function
            
        //if questionBank.length === 0;
            //hide all pages
            //show end page
            //print correct, incorrect, unanswered
            //play again button onclick
                //reset correct, incorrect, unanswered, and questionsUsed
                //move all questions questionUsed back to questionBank
                //run game function
                //hide end page
                //show question page
    })

})