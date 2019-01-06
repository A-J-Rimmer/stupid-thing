// JavaScript File
var Answer1 = 0;
var Answer2 = 0;
var Answer3 = 0;
var Answer4 = 0;
var Answer5 = 0;
var Answer6 = 0;
var Answer7 = 0;
var Answer8 = 0;
var Answer9 = 0;
var Answer10 = 0;
var Answer11 = 0;
function password() {
    var passwordPrompt = prompt("what's teh password");
  if (passwordPrompt !== "heart"){
      alert("nope");
      password();
}else{
    document.getElementById("section1").style.display="block";
}
}

function question1() {
    Answer1 = document.getElementById("button1").value;
    if (Answer1 == 8) {
        document.getElementById("section1").style.display="none";
        document.getElementById("section2").style.display="block";
    }else{
        alert("algebraic division is a thing, y'all. Try again");
    }
}
function question2() {
    Answer2 = document.getElementById("button2").value;
    if (Answer2 == "nanokid") {
        document.getElementById("section2").style.display="none";
        document.getElementById("section3").style.display="block";
    }else{
        if(Answer2 == "nanoputian"){
          document.getElementById("section2").style.display="none";
        document.getElementById("section3").style.display="block";  
        }else{
        alert("Google, bois");
    }
}
}
function question3() {
    Answer3 = document.getElementById("button3").value;
    if (Answer3 == "gym mats") {
        document.getElementById("section3").style.display="none";
        document.getElementById("section4").style.display="block";
    }else{
        if(Answer3 == "gymnastics mats"){
          document.getElementById("section3").style.display="none";
        document.getElementById("section4").style.display="block";  
        }else{
        alert("it's not recycling bins, because I wasn't here when that was a thing");
    }
}
}
function question4() {
    Answer4 = $('input[name="gender"]:checked').val();
    if (Answer4 == "Mrs D'Souza Eva") {
        document.getElementById("section4").style.display="none";
        document.getElementById("section5").style.display="block";
    }else{
        alert("nah try again");
    }
}
function question5() {
    Answer5 = document.getElementById("button5").value;
    if (Answer5 == 36) {
        document.getElementById("section5").style.display="none";
        document.getElementById("section6").style.display="block";
    }else{
        alert("bruh, for real?!");
    }
}
function question6() {
    Answer6 = document.getElementById("button6").value;
    if (Answer6 == "but unfortunately i can't") {
        document.getElementById("section6").style.display="none";
        document.getElementById("section7").style.display="block";
    }else{
         if(Answer6 == "but i can't"){
          document.getElementById("section6").style.display="none";
        document.getElementById("section7").style.display="block";  
        }else{
        alert("did you use all lowercase? I'm too lazy to add other possible answers with capital 'I's, it's like 5 more lines of code each");
    }
}
}
function question7() {
    Answer7 = document.getElementById("button7").value;
    if (Answer7 == 32) {
        document.getElementById("section7").style.display="none";
        document.getElementById("section8").style.display="block";
    }else{
        alert("split up the parallelogram, then get back to me");
    }
}
function question8() {
    Answer8 = $('input[name="pet"]:checked').val();
    if (Answer8 == "Casio fx-CG50") {
        document.getElementById("section8").style.display="none";
        document.getElementById("section9").style.display="block";
    }else{
        alert("goddamn polar graphs");
    }
}
function question9() {
    Answer9 = $('input[name="complex"]:checked').val();
    if (Answer9 == "No") {
        document.getElementById("section9").style.display="none";
        document.getElementById("section10").style.display="block";
    }else{
        alert("FFS, Sophie");
    }
}
function question10() {
    Answer10 = $('input[name="duo"]:checked').val();
    if (Answer10 == "Steve Jobs and Andy Warhol") {
        document.getElementById("section10").style.display="none";
        document.getElementById("section11").style.display="block";
    }else{
        alert("such a power couple");
    }
}
function question11() {
    Answer11 = $('input[name="drink"]:checked').val();
    if (Answer11 == "Fill up water bottles for these thirsty bishes") {
        document.getElementById("section11").style.display="none";
        document.getElementById("section12").style.display="block";
    }else{
        alert("tbh all of these are true but specifically on mondays...?");
    }
}
