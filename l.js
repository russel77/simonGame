var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {
  $("body").removeClass("game-over");
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function handler(event) {

  var userChosenColour = this.id;
  var arr = [];
  if (userChosenColour === "red") {
    arr.push("0");
  }
  if (userChosenColour === "blue") {
    arr.push("1");
  }
  if (userChosenColour === "green") {
    arr.push("2");
  }
  if (userChosenColour === "yellow") {
    arr.push("3");
  }
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var lastElement1 = arr.slice(-1);
  checkAnswer(lastElement1);
});


function checkAnswer(currentLevel) {
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
level++;
    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  } else {


      $("body").addClass("game-over");

    $("#level-title").text("Game Over, Press Any Key to Restart ");
    started = false;
    level = 0;
    console.log("wrong");

  }

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

}


$("#yellow").click(function sound() {
  var audio = new Audio("sounds/yellow.mp3");
  audio.play();
})
$("#green").click(function sound() {
  var audio = new Audio("sounds/green.mp3");
  audio.play();
})
$("#red").click(function sound() {
  var audio = new Audio("sounds/red.mp3");
  audio.play();
})
$("#blue").click(function sound() {
  var audio = new Audio("sounds/blue.mp3");
  audio.play();
})




function animatePress(currentColour) {
  setTimeout(function() {
    $("#" + currentColour).addClass("pressed").removeClass("pressed");
  }, 100);
}



}
