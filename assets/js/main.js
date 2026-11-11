// WEEK 10: JavaScript as Writing and Behavior

// 1. Select all poem words.
const words = document.querySelectorAll(".word");
const froggie = document.getElementById("froggie")

// 2. Create a reusable random-number function.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. Create the behavior.
function changePoem() {
  words.forEach(function (word) {
    const rotate = randomNumber(-30, 30);
    const moveX = randomNumber(-180, 180);
    const moveY = randomNumber(-150, 150);
    const scale = randomNumber(70, 150) / 100;

    word.style.transform =
      `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(${scale})`;

    word.style.opacity = randomNumber(50, 100) / 100;
  });
}

// 4. Listen for a click.
document.addEventListener("click", changePoem);

froggie.addEventListener("mouseover", function() {

  const froggieX = window.innerWidth - froggie.offsetWidth;
  const froggieY = window.innerHeight - froggie.offsetHeight;

  const moveX = Math.random() * froggieX;
  const moveY = Math.random() * froggieY;

  froggie.style.left = moveX + "px";
  froggie.style.top = moveY + "px";
    
});