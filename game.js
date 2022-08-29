

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var   started =false;

function nextSequence() {userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  level++;
  $("#level-title").text("Level" + level);


}
$(".start").click(function() {
  if (!started) {
  $("body").removeClass("game-over");
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
$(".btn").click(function handler() {
  var userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  var lastElement1 =(userClickedPattern.length)-1;
  // console.log(lastElement1);
  // console.log(gamePattern[1]);
  // console.log(userClickedPatter[1]);
  checkAnswer(lastElement1);

});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);

}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");setTimeout(function() {nextSequence();
    }, 1000);

  }else{   $("body").addClass("game-over");$("#level-title").text("Game Over, Press Any Key to Restart" );
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();

  startOver();
    setTimeout(function() {
    $("body").removeClass("game-over");
    }, 1000);}

}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
