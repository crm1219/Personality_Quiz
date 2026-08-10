var forestScore = 0
var mountainScore = 0
var oceanScore = 0
var questionCount = 0
var disabledCount = 0

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

var getAnswers = document.getElementById("getAnswers");

var restart = document.getElementById("restart");

function mountain() {
  mountainScore += 1;
  questionCount += 1;
  console.log("Number of questions = "+ questionCount + " Mountain score = " + mountainScore);
}

function forest() {
  forestScore += 1;
  questionCount += 1;
  console.log("Number of questions = " + questionCount + " Forest score = " + forestScore);
}

function ocean() {
  oceanScore += 1;
  questionCount += 1;
  console.log("Number of questions = "+ questionCount + " Ocean score = " + oceanScore);
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
}
function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
}
function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
}
function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
}
function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
}
function disableQ6() {
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
}
function disableQ7() {
  q7a1.disabled = true;
  q7a2.disabled = true;
  q7a3.disabled = true;
}

q1a1.addEventListener("click", forest);
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", ocean);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", mountain);
q1a3.addEventListener("click", disableQ1);
q2a1.addEventListener("click", mountain);
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", ocean);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", forest);
q2a3.addEventListener("click", disableQ2);
q3a1.addEventListener("click", mountain);
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", ocean);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", forest);
q3a3.addEventListener("click", disableQ3);
q4a1.addEventListener("click", forest);
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", mountain);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", ocean);
q4a3.addEventListener("click", disableQ4);
q5a1.addEventListener("click", mountain);
q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", ocean);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", forest);
q5a3.addEventListener("click", disableQ5);
q6a1.addEventListener("click", forest);
q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", mountain);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", ocean);
q6a3.addEventListener("click", disableQ6);
q7a1.addEventListener("click", forest);
q7a1.addEventListener("click", disableQ7);
q7a2.addEventListener("click", ocean);
q7a2.addEventListener("click", disableQ7);
q7a3.addEventListener("click", mountain);
q7a3.addEventListener("click", disableQ7);

getAnswers.addEventListener("click", displayResult);

restart.addEventListener("click", restartQuiz);

function updateResult() {
  if (forestScore >= 4) {
    console.log("You belong in the forest!");
    result.innerHTML = "You belong in the forest!";
    description.innerHTML = "Home of artists and dreamers, the forest is a place of quiet wonder with countless curiosities to be explored and paths to be followed. You will thrive here in this fascinating realm, where a new world lies in every pearl of dew on a leaf and shiver of pine needles against the sky, but don't let its peaceful embrace lull you into a false sense of security. Above all, the woods are a kingdom of imagination - and that is where the darkest monsters may lie.";
  }
  else if (mountainScore >= 4) {
    console.log("You belong in the mountains!");
    result.innerHTML = "You belong in the mountains!";
    description.innerHTML = "The mountains are the realm of darers and adventurers, the hot-blooded and restless-hearted, those who cannot bear to spend life doing anything but chasing the sun. You will find glory and grandeur aplenty here, but don't let your heart lead you down dangerous paths - it's a longer road to the horizon than you may think, and the higher you climb, the deeper the abysses below you.";
  }
  else if (oceanScore >= 4) {
    console.log("You belong in the ocean!");
    result.innerHTML = "You belong in the ocean!";
    description.innerHTML = "The ocean is a realm as deep and breathtaking as the hearts of those ruled by it, who are irresistibly drawn by the calling of gulls and crash of eternal waves. As beautiful as it is wild, it is a place you will lose yourself in as you learn to love the serenity of its waters, the glory of its sunrises. But don't forget that the stillest waters will rage in the grip of a storm, and if you lose yourself to its peace, its fury may consume you.";
  }
  else if (mountainScore == 1) {
    console.log("You belong among rivers!");
    result.innerHTML = "You belong among rivers!";
    description.innerHTML = "A realm for those who overlap with the ocean and forest kingdoms, the lush, intriguing world of rivers belongs to curious and empathetic souls drawn to rivers by both their hidden beauties - waterfalls weaving their way amid rocks, dragonflies glistening in the sunlight - and their quiet passions - rapids thundering into lagoons, grey waters coming to life in the rain. Journey down one for long enough, and you'll come to know all the changes of its heart, complex as any human's.";}
  else if (forestScore == 1) {
    console.log("You belong in the grassland!");
    result.innerHTML = "You belong in the grassland!";
    description.innerHTML = "A realm for those who overlap with the ocean and mountain kingdoms, the grassland belongs to those bold enough to bare their hearts beneath an omnipresent and endless sky. They are no idyll of flowering meadows, roamed by herds of thundering bison and threatened by inescapable storms, but all the same they are no inhuman wasteland. Brave their trials, and you'll come to know they have a gentle grace to them on the days the wind just barely stirs the grasses with its music.";
  }
  else if (oceanScore == 1) {
    console.log("You belong in the tundra!");
    result.innerHTML = "You belong in the tundra!";
    description.innerHTML = "A realm for those who overlap with the forest and mountain kingdoms, it may seem a bleak and brutal place, but survive the bitter winds of winter and you'll find the tundra is truly the home of those at once adventurers and poets. It is a land where glacial mountains soar into the skies and the Northern Lights fill the world with color, a land whose heart of beauty is hidden beneath layers of ice only surmounted by the bravest of explorers.";}
  else if (forestScore == 3) {
    console.log("You belong in the forest!");
    result.innerHTML = "You belong in the forest!";
    description.innerHTML = "Home of artists and dreamers, the forest is a place of quiet wonder with countless curiosities to be explored and paths to be followed. You will thrive here in this fascinating realm, where a new world lies in every pearl of dew on a leaf and shiver of pine needles against the sky, but don't let its peaceful embrace lull you into a false sense of security. Above all, the woods are a kingdom of imagination - and that is where the darkest monsters may lie.";
  }
  else if (oceanScore == 3) {
    console.log("You belong in the ocean!");
    result.innerHTML = "You belong in the ocean!";
    description.innerHTML = "The ocean is a realm as deep and breathtaking as the hearts of those ruled by it, who are irresistibly drawn by the calling of gulls and crash of eternal waves. As beautiful as it is wild, it is a place you will lose yourself in as you learn to love the serenity of its waters, the glory of its sunrises. But don't forget that the stillest waters will rage in the grip of a storm, and if you lose yourself to its peace, its fury may consume you.";
  }
  else if (mountainScore == 3) {
    console.log("You belong in the mountains!");
    result.innerHTML = "You belong in the mountains!";
    description.innerHTML = "The mountains are the realm of darers and adventurers, the hot-blooded and restless-hearted, those who cannot bear to spend life doing anything but chasing the sun. You will find glory and grandeur aplenty here, but don't let your heart lead you down dangerous paths - it's a longer road to the horizon than you may think, and the higher you climb, the deeper the abysses below you.";
  }
}

function displayResult() {
  if (questionCount == 7) {
    updateResult();
    console.log("The quiz is over!");
  }
}

function restartQuiz() {
  questionCount = 0
  forestScore = 0
  oceanScore = 0
  mountainScore = 0
  result.innerHTML = "You belong in . . .";
  description.innerHTML = " ";
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
}

