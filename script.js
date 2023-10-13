window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function myFunction() {
  var x = document.getElementById("logo");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const dot = document.getElementById("dot");

// Intial Dot Position
let dotX = 0;
let dotY = 0;

// Function
function updateDotPosition(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
}

// Glide
const speed = 0.1;
dotX += (mouseX - dotX) * speed;
dotY += (mouseY - dotY) * speed;

// Update Position
dot.style.left = dotX + "px";
dot.style.top = dotY + "px";

document.addEventListener("mousemove", updateDotPosition);

