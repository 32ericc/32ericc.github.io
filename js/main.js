// preloader
const loadingScreen = document.querySelector(".loading-screen");
const animatedDesc = document.querySelector(".dcontainer");

function loadingComplete() {
  setTimeout(function () {
    loadingScreen.style.opacity = "0"; // Apply fade-out effect
  }, 4000);

  setTimeout(function () {
    loadingScreen.style.display = "none";

    // animate after loading screen hidden
    animationElements.style.display = "block";
  }, 6000);
}

window.onload = function () {
  loadingComplete();
};

// scramble text
function reanimate() {
  const text = baffle(".data");
  text.set({
    characters: "▒▓█ />▒░░ ▒▒▓>> ▒>▒ ▒▓█░▒ ▒▓<░ ▓▓█ ░▒▓/ ░░▒█",
    speed: 200,
  });
  text.start();
  text.reveal(1000);
}

// check if elem in view
function isElemInView(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// listen for scroll, text scramble effect
document.addEventListener("scroll", function () {
  const aboutSection = document.getElementById("about");
  // const projectsSection = document.getElementById("projects");
  if (isElemInView(aboutSection)) {
    reanimate();
  }
});

// bento hover effect
document.getElementById("bento-container").onmousemove = (e) => {
  for (const box of document.getElementsByClassName("box")) {
    const rect = box.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    box.style.setProperty("--mouse-x", `${x}px`);
    box.style.setProperty("--mouse-y", `${y}px`);
  }
};

// scroll behavior: move page right on scroll down, move left on scroll up
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // scroll down
    window.scrollBy(300, 0);
  } else if (event.deltaY < 0) {
    // scroll up
    window.scrollBy(-300, 0);
  }
});

// explode text
const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");

  element.innerText = "";

  text.forEach((letter) => {
    const span = document.createElement("span");

    span.className = "letter";

    span.innerText = letter;

    element.appendChild(span);
  });
};

enhance("some-link");

// vanilla tilt
VanillaTilt.init(document.querySelector(".card"), {
  max: 25,
  speed: 400,
});
