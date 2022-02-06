// class Enemy {}

function createGhost() {
  const ghostDiv = document.createElement("div");
  ghostDiv.className = "ghost";
  ghostDiv.style.left = `${Math.floor(Math.random() * 756)}px`;
  ghostDiv.style.top = 0;
  document.querySelector("#bg").appendChild(ghostDiv);
}

function moveGhost() {
  const ghostsArr = document.getElementsByClassName("ghost");
  const ghostsLeng = ghostsArr.length;

  if (ghostsLeng > 0) {
    for (let i = 0; i < ghostsLeng; i++) {
      const ghost = ghostsArr[i];
      let ghostTop = parseInt(ghost.style.top);

      if (ghostTop < 536) {
        ghostTop += 15;
        ghost.style.top = ghostTop + "px";

        // const ghostLeft = parseInt(ghost.style.left);
        // const heroBottom = parseInt(divHero.style.bottom);
        // const heroLeft = parseInt(divHero.style.left);

        // if (
        //   600 - ghostTop - 54 === heroBottom + 54 &&
        //   ghostLeft + 45 === heroLeft
        // ) {
        //   ghost.classList.add("ghostPang");
        // }
      } else {
        clearInterval(createInterval);
        clearInterval(moveInterval);
      }
    }
  }
}

const createInterval = setInterval(createGhost, 8000);
const moveInterval = setInterval(moveGhost, 1000);
