// class Enemy {}

function gameOver() {}

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
        ghostTop += 10;
        ghost.style.top = ghostTop + "px";
      } else {
        gameOver();
      }
    }
  }
}

setInterval(createGhost, 5000);
setInterval(moveGhost, 1000);
