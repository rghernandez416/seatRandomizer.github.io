let shufButton = document.getElementById("shuffle-btn");

var seat1 = document.getElementById("s0").innerHTML;
var seat2 = document.getElementById("s1").innerHTML;
var seat3 = document.getElementById("s2").innerHTML;
var seat4 = document.getElementById("s3").innerHTML;
var seat5 = document.getElementById("s4").innerHTML;
var seat6 = document.getElementById("s5").innerHTML;
var seat7 = document.getElementById("s6").innerHTML;
var seat8 = document.getElementById("s7").innerHTML;

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

   return array;
}

function displayShuffle() {
   let array = [
      "Gabe",
      "Gisselle",
      "Mary",
      "Matthew",
      "Lanna",
      "Cas",
      "Mike",
      "Lexi",
   ];
   var shuffleResult = shuffleArray(array);

   for (let i = 0; i < 8; i++) {
      document.getElementById("s" + i).innerHTML = shuffleResult[i];

      if (shuffleResult[i] == "Gabe") {
         document.getElementById("s" + i).style.color = "#FB3640";
      } else if (shuffleResult[i] == "Gisselle") {
         document.getElementById("s" + i).style.color = "#1C77C3";
      } else if (shuffleResult[i] == "Mary") {
         document.getElementById("s" + i).style.color = "#EF9CDA";
      } else if (shuffleResult[i] == "Matthew") {
         document.getElementById("s" + i).style.color = "#285943";
      } else if (shuffleResult[i] == "Lanna") {
         document.getElementById("s" + i).style.color = "#7D5BA6";
      } else if (shuffleResult[i] == "Cas") {
         document.getElementById("s" + i).style.color = "#FB3640";
      } else if (shuffleResult[i] == "Mike") {
         document.getElementById("s" + i).style.color = "#D25914";
      } else if (shuffleResult[i] == "Lexi") {
         document.getElementById("s" + i).style.color = "#28262C";
      }
   }

   // console.log(shuffleResult);

   return shuffleResult;
}
