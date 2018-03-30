var sixtySecNum = 10;
var intervalId;
var correctAnsCounter = 0;
var incorrAnsCounter = 0;
var unAnsweredCounter = 0;
var multiQuestions = [

]
var multiAnswers = [

]
var correctAnswers = [
  
]

$("#start").on("click", start);
$("#stop").on("click", stop);

// $("#resume").on("click", run);

function start() {
  run(); 
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


