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
                "question": "What is the subject of the painting stuck to wall in Jim's parents' house?",
                "correct_answer": "A clown",
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
                    "Chrysler Sebring"
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
                "question": "What is the name of the bar Michael and Dwight first meet Ryan at in New York City?",
                "correct_answer": "Prerogative",
                "incorrect_answers": [
                    "Bernie's Tavern",
                    "Poor Richard's",
                    "Cooper's"
                ]
            },

            {
                "question": "What movie do Michael and Holly spoof in their company picnic skit?",
                "correct_answer": "Slumdog Millionaire",
                "incorrect_answers": [
                    "Threat Level: Midnight",
                    "Jaws",
                    "Back to the Future"
                ]
            },

            {
                "question": "What Dunder-Mifflin branch is Karen originally from?",
                "correct_answer": "Stamford",
                "incorrect_answers": [
                    "Utica",
                    "Buffalo",
                    "Nashua"
                ]
            },

            {
                "question": "What is Roy's last name?",
                "correct_answer": "Anderson",
                "incorrect_answers": [
                    "Philbin",
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
        var timer = 30;
        var intervalId;

        //run game function and timer
        gameFunction();
        runTimer();

        //answer button on click
        $(document).on("click", ".buttons-answer", function () {
            var userGuess = $(this).val();
            console.log(userGuess);

            var answer = questionsUsed[(questionsUsed.length) - 1].correct_answer;
            console.log(answer);

            stopTimer();

            //if wrong answer selected
            if (userGuess !== answer) {

                //hide question page
                $('#page-question').hide();

                //show answer page
                $('#page-answer').show();

                //print incorrect answer message
                var message = $("<h4>");
                message.text("Incorrect!");
                $("#text-answer-alert").append(message);

                //print correct answer
                $("#text-answer").text("The correct answer was: " + answer);

                //incorrect++
                incorrect++

                //wait 5 seconds
                setTimeout(fiveSeconds, 5000);

                function fiveSeconds() {

                    //clear answer screen
                    $("#text-answer-alert").empty();
                    $("#text-answer").empty();

                    if (questionBank.length == 0) {
                        endGame();
                    } else {
                        //run game function
                        gameFunction();
                        runTimer();

                        //return to question page
                        $('#page-question').show();
                        $('#page-answer').hide();
                    }
                }
            }

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

                function fiveSeconds() {
                    //clear answer screen
                    $("#text-answer-alert").empty();

                    if (questionBank.length == 0) {
                        endGame();
                    } else {
                        //run game function
                        gameFunction();
                        runTimer();

                        //return to question page
                        $('#page-question').show();
                        $('#page-answer').hide();
                    }
                }
            }
        })

        function runTimer() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {

            timer--;
            $("#text-time-remaining").text(timer);

            if (timer === 0) {
                stop();
                outOfTime();
            }
        }

        function stopTimer() {

            clearInterval(intervalId);
            timer = 30;
            $("#text-time-remaining").text(timer);
        }

        function endGame() {

            //hide all pages
            $('#page-question').hide();
            $('#page-answer').hide();
            $('#page-intro').hide();

            //show end page
            $('#page-end').show();

            //print correct, incorrect, unanswered
            $("#text-score-correct").text(correct);
            $("#text-score-incorrect").text(incorrect);
            $("#text-score-unanswered").text(unanswered);

            //play again button onclick
            $("#button-reset").on("click", function () {

                //move all questions questionUsed back to questionBank
                questionBank = questionBank.concat(questionsUsed);

                //reset correct, incorrect, unanswered, and questionsUsed
                correct = 0;
                incorrect = 0;
                unanswered = 0;
                questionsUsed = [];

                console.log(questionBank);
                console.log(questionsUsed)

                //hide end page
                $('#page-end').hide();

                //run game function
                gameFunction();
                runTimer();

                //show question page
                $('#page-question').show();

            })
        }

        //game function/randomly select a question
        function gameFunction() {

            //clear question and answers from previous round
            $("#text-question").empty();
            $("#buttons-group").empty();

            //randomly select a question
            var random = Math.floor(Math.random() * questionBank.length);
            var questionRandom = questionBank[random];
            console.log(questionRandom);

            //print question
            $('#text-question').text(questionRandom.question);

            //==========randomize answers=============//

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

        //if unanswered
        function outOfTime() {

            stopTimer();

            var answer = questionsUsed[(questionsUsed.length) - 1].correct_answer;

            //hide question page
            $('#page-question').hide();

            //show answer page
            $('#page-answer').show();

            //print unanswered answer message
            var message = $("<h4>");
            message.text("You ran out of time!");
            $("#text-answer-alert").append(message);

            //print correct answer
            $("#text-answer").text("The correct answer was: " + answer);

            //incorrect++
            unanswered++

            //wait 5 seconds
            setTimeout(fiveSeconds, 5000);

            function fiveSeconds() {

                //clear answer screen
                $("#text-answer-alert").empty();
                $("#text-answer").empty();

                if (questionBank.length == 0) {
                    endGame();
                } else {
                    //run game function
                    gameFunction();
                    runTimer();

                    //return to question page
                    $('#page-question').show();
                    $('#page-answer').hide();
                }
            }

        }


    })

})