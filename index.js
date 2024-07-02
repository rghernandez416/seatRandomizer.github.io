let shufButton = document.getElementById("shuffle-btn");

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

   var seat1 = (document.getElementById("s0").innerHTML = shuffleResult[0]);
   var seat2 = (document.getElementById("s1").innerHTML = shuffleResult[1]);
   var seat3 = (document.getElementById("s2").innerHTML = shuffleResult[2]);
   var seat4 = (document.getElementById("s3").innerHTML = shuffleResult[3]);
   var seat5 = (document.getElementById("s4").innerHTML = shuffleResult[4]);
   var seat5 = (document.getElementById("s5").innerHTML = shuffleResult[5]);
   var seat5 = (document.getElementById("s6").innerHTML = shuffleResult[6]);
   var seat5 = (document.getElementById("s7").innerHTML = shuffleResult[7]);

   // console.log(shuffleResult);

   return shuffleResult;
}
