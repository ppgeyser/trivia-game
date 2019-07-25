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
    
        //var correct = 0
        //var incorrect = 0
        //var unanswered = 0
        //var questionsUsed = []

        //game function/randomly select a question
            //randomly select a question
            //if question is not in the questionUsed array 
                //print question
                //print answer buttons (randomized)
                //start 30 second timer and print time remaining
            //otherwise randomly select another question

        //if correct answer selected
            //hide question page
            //show answer page
            //print correct answer message
            //correct++
            //wait 5 seconds
            //push question into questionUsed array
            //return to question page
            //run game function

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
            
        //if questionsUsed.length === questionBank.length
            //hide all pages
            //show end page
            //print correct, incorrect, unanswered
            //play again button onclick
                //reset correct, incorrect, unanswered, and questionsUsed
                //run game function
                //hide end page
                //show question page
    })

})