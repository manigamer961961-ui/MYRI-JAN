let enteredPassword = "";

const correctPassword = "0907";


function pressKey(number){

  if(enteredPassword.length >= 4){
    return;
  }

  enteredPassword += number;

  updateDisplay();

  if(enteredPassword.length === 4){
    setTimeout(checkPassword,300);
  }
}


function deleteKey(){

  enteredPassword =
    enteredPassword.slice(0,-1);

  updateDisplay();

  document.getElementById(
    "errorMessage"
  ).textContent = "";
}


function updateDisplay(){

  const boxes =
    document.querySelectorAll(
      "#passwordDisplay span"
    );

  boxes.forEach(function(box,index){

    if(index < enteredPassword.length){
      box.textContent = "•";
    }else{
      box.textContent = "—";
    }

  });
}


/* =========================
   PASSWORD + MUSIC
========================= */

function checkPassword(){

  const card =
    document.querySelector(".lock-card");

  const error =
    document.getElementById("errorMessage");


  if(enteredPassword === correctPassword){

    /* START MUSIC AFTER PASSWORD */
    const music =
      document.getElementById("birthdayMusic");

    if(music){

      music.volume = 0.7;

      const playPromise = music.play();

      if(playPromise !== undefined){

        playPromise.catch(function(error){

          console.log(
            "Music could not autoplay:",
            error
          );

        });

      }
    }


    card.style.opacity = "0";
    card.style.transform = "scale(1.05)";


    setTimeout(function(){

      showScreen("screen2");

      card.style.opacity = "1";
      card.style.transform = "scale(1)";

    },600);


  }else{

    error.textContent =
      "WRONG PASSWORD ❤️";

    card.classList.add("shake");

    setTimeout(function(){

      card.classList.remove("shake");

    },400);

    enteredPassword = "";

    updateDisplay();

  }
}


/* =========================
   SCREEN SYSTEM
========================= */

function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(function(screen){

      screen.classList.remove("active");

    });


  const target =
    document.getElementById(id);

  if(target){
    target.classList.add("active");
  }

}


/* =========================
   SCREEN 3
========================= */

function goToScreen3(){
  showScreen("screen3");
}


/* =========================
   SCREEN 4 MEMORIES
========================= */

const memories = [

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260409-WA0009.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0001.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0002.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0003.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0005.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0014.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0017.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0018.jpg",

  "https://raw.githubusercontent.com/manigamer961961-ui/MOMINA-NOOR-/main/IMG-20260702-WA0019.jpg"

];


let currentMemory = 0;


function goToScreen4(){

  currentMemory = 0;

  document.getElementById(
    "memoryPhoto"
  ).src = memories[0];

  document.getElementById(
    "photoNumber"
  ).textContent = "MEMORY 01 / 09";

  showScreen("screen4");
}


function changeMemory(){

  const screen4 =
    document.getElementById("screen4");

  if(!screen4.classList.contains("active")){
    return;
  }

  const photo =
    document.getElementById("memoryPhoto");

  const number =
    document.getElementById("photoNumber");


  photo.style.opacity = "0";
  photo.style.transform = "scale(.94)";


  setTimeout(function(){

    currentMemory++;

    if(currentMemory >= memories.length){
      currentMemory = 0;
    }

    photo.src =
      memories[currentMemory];

    number.textContent =
      "MEMORY " +
      String(currentMemory + 1).padStart(2,"0") +
      " / 09";

    photo.style.opacity = "1";
    photo.style.transform = "scale(1)";

  },700);

}


setInterval(changeMemory,4000);


/* =========================
   SCREEN 5 - 15
========================= */

function goToScreen5(){
  showScreen("screen5");
}

function goToScreen6(){
  showScreen("screen6");
}

function goToScreen7(){
  showScreen("screen7");
}

function goToScreen8(){
  showScreen("screen8");
}

function goToScreen9(){
  showScreen("screen9");
}


function goToScreen10(){

  showScreen("screen10");

  const video =
    document.getElementById("loveVideo");

  if(video){
    video.currentTime = 0;
  }

}


function goToScreen11(){

  const video =
    document.getElementById("loveVideo");

  if(video){
    video.pause();
  }

  showScreen("screen11");

}


function goToScreen12(){
  showScreen("screen12");
}


function goToScreen13(){
  showScreen("screen13");
}


function goToScreen14(){
  showScreen("screen14");
}


function goToScreen15(){
  showScreen("screen15");
}


/* =========================
   START
========================= */

updateDisplay();
