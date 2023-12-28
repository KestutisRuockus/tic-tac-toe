let player = 1; // to know which player is playing (player '1' or player '2')
let currentPlayersSymbol = "X"; // player symbol

// display current players symbol and check or he won
function markSymbol(id) {
  if (document.getElementById(`${id}`).value === undefined) {
    if (player === 1) {
      document.getElementById("player").innerText = "2";
      document.getElementById(id).style.color = "red";
      changeMarkSymbol(id);
      checkOrPlayerIsAWinner();
      playertwoProperties();
    } else {
      document.getElementById("player").innerText = "1";
      document.getElementById(id).style.color = "green";
      changeMarkSymbol(id);
      checkOrPlayerIsAWinner();
      playerOneProperties();
    }
  }
}

// display players symbol on selected element('X' or 'O')
function changeMarkSymbol(id) {
  document.getElementById(`${id}`).innerText = currentPlayersSymbol;
  document.getElementById(`${id}`).value = currentPlayersSymbol;
}

// set variables and style for player 1 turn
function playerOneProperties() {
  player = 1;
  currentPlayersSymbol = "X";
}

// set variables and style for player 2 turn
function playertwoProperties() {
  player = 2;
  currentPlayersSymbol = "O";
}

// check or player won
function checkOrPlayerIsAWinner() {
  const one = document.getElementById("one").value,
    two = document.getElementById("two").value,
    three = document.getElementById("three").value,
    four = document.getElementById("four").value,
    five = document.getElementById("five").value,
    six = document.getElementById("six").value,
    seven = document.getElementById("seven").value,
    eight = document.getElementById("eight").value,
    nine = document.getElementById("nine").value;

  // if first row has same symbols and elelemts are not empty
  if (one === two && one === three) {
    if (one !== undefined || two !== undefined || three !== undefined)
      showWhoIsWinner();
  }

  // if second row has same symbols and elelemts are not empty
  if (four === five && four === six) {
    if (four !== undefined || five !== undefined || six !== undefined)
      showWhoIsWinner();
  }

  // if third row has same symbols and elelemts are not empty
  if (seven === eight && seven === nine) {
    if (seven !== undefined || eight !== undefined || nine !== undefined)
      showWhoIsWinner();
  }

  // if first column has same symbols and elelemts are not empty
  if (one === four && one === seven) {
    if (one !== undefined || four !== undefined || seven !== undefined)
      showWhoIsWinner();
  }

  // if second column has same symbols and elelemts are not empty
  if (two === five && two === eight) {
    if (two !== undefined || five !== undefined || eight !== undefined)
      showWhoIsWinner();
  }

  // if third column has same symbols and elelemts are not empty
  if (three === six && three === nine) {
    if (three !== undefined || six !== undefined || nine !== undefined)
      showWhoIsWinner();
  }

  // if from left to right diagonal has same symbols and elelemts are not empty
  if (one === five && one === nine) {
    if (one !== undefined || five !== undefined || nine !== undefined)
      showWhoIsWinner();
  }

  // if from right to left diagonal has same symbols and elelemts are not empty
  if (three === five && three === seven) {
    if (three !== undefined || five !== undefined || seven !== undefined)
      showWhoIsWinner();
  }

  // check or there is empty element
  if (one && two && three && four && five && six && seven && eight && nine)
    thereIsNoWinner();
}

// dispplay modal element
function showWhoIsWinner() {
  document.getElementById("winner").innerText = player;
  document.querySelector(".winner-element").style.display = "block";
}

// display modal when there is no winner
function thereIsNoWinner() {
  document.getElementById("modal").innerHTML = `Sorry, there is no winner`;
  document.querySelector(".winner-element").style.display = "block";
}

document
  .getElementById("btn")
  .addEventListener("click", () => window.location.reload());
