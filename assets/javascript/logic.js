var sixtySecNum = 10;
var intervalId;
var correctAnsCounter = 0;
var incorrAnsCounter = 0;

var multiQuestion = [
  "How many slices of pizza did you eat?",
  "A Question",
  "AA Question",
  "AAA Question"
];

var unAnsweredCounter = multiQuestion.length;

var multiAnswers = [
  ["one",
  "whole pie",
  "none",
  "three"],
  ["A",
  "B",
  "C",
  "D"],
  ["AA",
  "BB",
  "CC",
  "DD"],
  ["AAA",
  "BBB",
  "CCC",
  "DDD"]
];
var correctAnswers = [
  "one",
  "A",
  "AA",
  "AAA",
];

$("#start").on("click", start);
$("#stop").on("click", stop);
$(".question").on("click", "input", checkAnswers);

function start() {
  $("#start").hide();
  run();
  writeQuestion();
  $("#stop").append($('<input id="stop" type="button" class="w3-btn w3-round-xlarge" value="STOP">'));
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
  }
}

function stop() {
  clearInterval(intervalId);
  $(".question").hide();
  $("#timerDiv").hide();
  $(".counters").html("Correct Answers: " + correctAnsCounter + "<br>");
  $(".counters").append("Wrong Answers: " + incorrAnsCounter + "<br>"); 
  $(".counters").append("You Didn't Answer: " + unAnsweredCounter + " questions" + "<br>"); 
}

function writeQuestion() {
  for (var i = 0; i < multiQuestion.length; i++) {

    var writeQuestion = $("<br> <p>" + multiQuestion[i] + " </p> <br>");
    writeQuestion.addClass("styleClass");
    writeQuestion.attr("data-questionValue", correctAnswers[i]);
    $(".question").append(writeQuestion);

    for (var j = 0; j < multiAnswers[i].length; j++) {
      $(".question").append("<input type='radio' class='radio' name='answers" 
      + [i] + "' value= '" + multiAnswers[i][j] + "'> "
      + multiAnswers[i][j] + "<br>");
    }
  }
}

//correctAnswer function
function checkAnswers() {
  var userInput = $(this).val();
  console.log(userInput);
  var name = $(this)[0].name;
  var key = name.split("answers");
  console.log(key);
  var index = key[1];
  console.log(index);
  if (userInput === correctAnswers[index]) {
    correctAnsCounter++; 
    unAnsweredCounter--;
    console.log("answers match");
  } else {
    incorrAnsCounter++; 
    unAnsweredCounter--;
    console.log("answers DON'T match");
  }
  console.log("you didn't answer question #" + unAnsweredCounter);
}



