const app = document.getElementById("app");
const introScreen = document.getElementById("screen-intro");
const nextScreen = document.getElementById("screen-next");
const buttonHitbox = document.getElementById("button-hitbox");

const gameStates = {
  INTRO: "intro",
  NEXT: "next",
};

let currentState = gameStates.INTRO;

const renderState = () => {
  if (currentState === gameStates.INTRO) {
    introScreen.style.display = "block";
    introScreen.setAttribute("aria-hidden", "false");
    nextScreen.style.display = "none";
    nextScreen.setAttribute("aria-hidden", "true");
  } else {
    introScreen.style.display = "none";
    introScreen.setAttribute("aria-hidden", "true");
    nextScreen.style.display = "block";
    nextScreen.setAttribute("aria-hidden", "false");
  }
};

const goToNext = () => {
  currentState = gameStates.NEXT;
  renderState();
};

const hitboxContainsClick = (event, element) => {
  const bounds = element.getBoundingClientRect();
  const x = event.clientX;
  const y = event.clientY;
  return x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom;
};

app.addEventListener("click", (event) => {
  if (currentState !== gameStates.INTRO) {
    return;
  }

  if (hitboxContainsClick(event, buttonHitbox)) {
    goToNext();
  }
});

renderState();
