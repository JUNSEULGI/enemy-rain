const divHero = document.querySelector("#hero");

class Hero {
  constructor() {
    this.left = 383;
    this.bottom = 0;
  }

  moveLeft() {
    if (this.left > 0) {
      this.left -= 3;
    }
  }
  moveRight() {
    if (this.left < 765) {
      this.left += 3;
    }
  }
  moveUp() {
    if (this.bottom < 546) {
      this.bottom += 3;
    }
  }
  moveDown() {
    if (this.bottom > 0) {
      this.bottom -= 3;
    }
  }
}

const myHero = new Hero();

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
  divHero.style.left = myHero.left + "px";
  divHero.style.bottom = myHero.bottom + "px";
}

window.addEventListener("keydown", moveHero);
