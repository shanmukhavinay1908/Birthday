// Create shining stars on gallery page
function createStars() {
  const body = document.querySelector(".gallery-page");
  for (let i = 0; i < 60; i++) { // number of stars
    let star = document.createElement("div");
    star.classList.add("star");

    // Random positions
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    // Random speed & delay
    star.style.animationDuration = (1.5 + Math.random() * 2) + "s";
    star.style.animationDelay = (Math.random() * 3) + "s";

    body.appendChild(star);
  }
}

window.onload = createStars;
