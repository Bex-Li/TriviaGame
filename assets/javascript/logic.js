var sixtySecNum = 10;
var intervalId;
var correctAnsCounter = 0;
var incorrAnsCounter = 0;
var unAnsweredCounter = 0;
var multiQuestion = [
  "How many slices of pizza did you eat?",
  "Second Trivia Question",
  "Third Trivia Question",
  "Fourth Trivia Question",

]
var multiAnswers = [[
  "one",
  "whole pie",
  "none",
  "three"],

["First Question Answer B-False",
  "Second Question Answer B-False",
  "Third Question Answer B-True",
  "Fourth Question Answer B-False"],

["First Question Answer C-False",
  "Second Question Answer C-True",
  "Third Question Answer C-False",
  "Fourth Question Answer C-False"]

["First Question Answer D-True",
"Second Question Answer D-False",
"Third Question Answer D-False",
"Fourth Question Answer D-False"]

]
var correctAnswers = [
  "one",
  "Second Correct Answer",
  "Third Correct Answer",
  "Fourth Correct Answer",
]

$("#start").on("click", start);
$("#stop").on("click", stop);

// $("#resume").on("click", run);

function start() {
  run();
  writeQuestion();
}

function run() {
  clearInterval(setInterval)
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  sixtySecNum--;
  $("#timerDiv").html("<h2>" + sixtySecNum + "</h2>");
  if (sixtySecNum === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

function writeQuestion() {
  for (i = 0; i < multiQuestion.length; i++) {

    var writeQuestion = $("<br> <p>" + multiQuestion[i] + " </p> <br>");
    writeQuestion.addClass("styleClass");
    writeQuestion.attr("data-questionValue", multiQuestion[i]);
    $(".question").append(writeQuestion);

    for (j = 0; j < multiAnswers[i].length; j++) {
      $(".question").append("<input type= 'radio' name= 'answers"
        + [i] + "' value= '" + multiAnswers[i][j] + "'> "
        + multiAnswers[i][j] + "<br>");
    }
  }
}



