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

        //var questionBank = [
            //{
                //"question": "Ipsum lorem?",
                //"correct_answer": "ipsum",
                //"incorrect_answers": [
                    //"imsum",
                    //"lorem",
                    //"istrum"
                //]
            //},
            //{
                //"question": "Ipsum lorem?",
                //"correct_answer": "ipsum",
                //"incorrect_answers": [
                    //"imsum",
                    //"lorem",
                    //"istrum"
                //]
            //},
            //{
                //"question": "Ipsum lorem?",
                //"correct_answer": "ipsum",
                //"incorrect_answers": [
                    //"imsum",
                    //"lorem",
                    //"istrum"
                //]
            //}
        //];

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