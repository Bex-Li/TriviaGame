You'll create a trivia form with multiple choice or true/false options 
(your choice).

The player will have a limited amount of time to finish the quiz.

The game ends when the time runs out. The page will reveal the number 
of questions that players answer correctly and incorrectly.

Don't let the player pick more than one answer per question.

Don't forget to include a countdown timer.

Pseudo Code: 

Start Button - on click 
    // Timer starts
    //     counting down timer from 1 min 
        (after start click create hide function)

Triva Questions are asked
    List of multiple questions (hardcode in HTML, or with an array in JS & jQeury)
    List of multiple choice answers (with an array in JS & jQeury)

User answers Trivia Questions
    with a condition of if and else 
        What to do if the user answers all questiosn in <60 seconds
            Stop Button 
                on click listener 
                after stop click create hide function on click listener
            Got to results page 
                Display Answered Questions Counter
                    Correct Answered
                    Incorrectly Answered
                    Unanswered
        What to do if the user answers all questiosn in >60 seconds
            Got to results page 
                Display Answered Questions Counter
                    Correct Answered 
                    Incorrectly Answered
                    Unanswered



