// Reset Game
document.querySelector(".resetBtn").addEventListener("click", function () {
  for (i = 1; i <= 9; i++) {
    document.querySelector(`.btn${i}`).innerText = "";
  }
});

// Read Love hit Action
function ReadLoveAdction() {
  for (j = 1; j <= 9; j++) {
    document.querySelector(`.btn${j}`).addEventListener(
      "click",
      function () {
        // this.style.display = "none";
        this.innerText = "❤️";
      },
      true
    );
  }
}

// Black love hit Action
function BlackLoveAdction() {
  for (i = 1; i <= 9; i++) {
    document.querySelector(`.btn${i}`).addEventListener(
      "click",
      function () {
        this.innerText = "🖤";
      },
      true
    );
  }
}

//  Take an action from Player One
var countNumber1 = 1;
document.querySelector(".throw1").addEventListener("click", function () {
  var userHitNumber = document.querySelector(".hitNumber1");

  userHitNumber.innerHTML = countNumber1++;

  ReadLoveAdction();
});

//  Take an action from Player Two
var countNumber2 = 1;
document.querySelector(".throw2").addEventListener("click", function () {
  var userHitNumber = document.querySelector(".hitNumber2");

  userHitNumber.innerHTML = countNumber2++;

  BlackLoveAdction();
});

//Add Player Name Option One
document.querySelector(".playerName1").addEventListener("click", function () {
  let userName = prompt("Enter your Name");
  if (
    userName === "" ||
    userName === null ||
    Number(userName) ||
    userName.length > 7
  ) {
    return false;
  } else {
    document.querySelector(".userName1").innerHTML = userName;
  }
});

//Add Player Name Option Two
document.querySelector(".playerName2").addEventListener("click", function () {
  let userName = prompt("Enter your Name");
  if (userName === "" || userName === null || Number(userName)) {
    return false;
  } else {
    document.querySelector(".userName2").innerHTML = userName;
  }
});
