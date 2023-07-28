// custom cursor
let innerCursor = document.querySelector(".inner-cursor");
// let outerCursor = document.querySelector('.outer-cursor')

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX; // logs x-y coors
  let y = e.clientY;

  innerCursor.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 750, fill: "forwards" }
  );

  // innerCursor.style.left = `${x}px`;
  // innerCursor.style.top = `${y}px`;

  // outerCursor.style.left = `${x}px`;
  // outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});
