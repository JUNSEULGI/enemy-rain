const divHero = document.querySelector("#hero");

let heroClass = "front-face";

class Hero {
  constructor() {
    this.left = 383;
    this.bottom = 0;
  }

  moveLeft() {
    if (this.left > 0) {
      this.left--;
    }
  }
  moveRight() {
    if (this.left < 765) {
      this.left++;
    }
  }
  moveUp() {
    if (this.bottom < 546) {
      this.bottom++;
    }
  }
  moveDown() {
    if (this.bottom > 0) {
      this.bottom--;
    }
  }
}

const myHero = new Hero();
// const frontHero = new Hero(front);
// const leftHero = new Hero(left);
// const rightHero = new Hero(right);
// const backHero = new Hero(back);
console.log(myHero);
function moveHero(event) {
  const arrow = event.key;
  switch (arrow) {
    case "ArrowLeft":
      divHero.className = "left-face";
      myHero.moveLeft();
      break;
    case "ArrowUp":
      divHero.className = "back-face";
      myHero.moveUp();
      break;
    case "ArrowRight":
      divHero.className = "right-face";
      myHero.moveRight();
      break;
    case "ArrowDown":
      divHero.className = "front-face";
      myHero.moveDown();
      break;
  }
  heroClass = divHero.classList[0];
  divHero.style.left = myHero.left + "px";
  divHero.style.bottom = myHero.bottom + "px";
  console.log(divHero.style);
}

window.addEventListener("keydown", moveHero);
