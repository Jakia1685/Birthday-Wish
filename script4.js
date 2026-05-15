const surprise = document.getElementById("surprise");
const birthday = document.getElementById("birthday");
const music = document.getElementById("music");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* 🎬 START SURPRISE */
function startBirthday(){
  surprise.style.display = "none";
  birthday.style.display = "flex";

  music.play().catch(()=>{});

  startFireworks();
}

/* 🎂 NAME WISH */
function setName(){
  let name = document.getElementById("nameInput").value;

  if(name !== ""){
    document.getElementById("title").innerText =
      "🎉 Happy Birthday " + name + " 🎉";

    startRoses();
  }
}

/* 🎵 MUSIC */
function toggleMusic(){
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
}

/* 🎆 FIREWORKS */
function startFireworks(){
  setInterval(()=>{
    drawFirework(
      Math.random()*canvas.width,
      Math.random()*canvas.height/2
    );
  },700);
}

function drawFirework(x,y){
  for(let i=0;i<20;i++){
    ctx.beginPath();
    ctx.arc(x+Math.random()*50,y+Math.random()*50,2,0,Math.PI*2);
    ctx.fillStyle = randomColor();
    ctx.fill();
  }
}

function randomColor(){
  const colors=["#ff4fa3","#6a0dad","#ffcc00","#00c2ff","#ff5e5e"];
  return colors[Math.floor(Math.random()*colors.length)];
}

/* 🌹 ROSE AFTER WISH */
function startRoses(){
  setInterval(()=>{
    let rose = document.createElement("div");
    rose.classList.add("rose");
    rose.innerHTML = "🌹";

    rose.style.left = Math.random()*window.innerWidth + "px";
    rose.style.animationDuration = (2 + Math.random()*3) + "s";

    document.body.appendChild(rose);

    setTimeout(()=>rose.remove(),6000);
  },200);
}