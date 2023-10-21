function randomNumberGenerator(i) {
    var randomNumber = Math.floor(Math.random() * 3);
    var borderColor = document.getElementsByClassName('handles')[i];
    borderColor.style.borderColor = 'yellow';
    borderColor.style.borderWidth = '10px';
    compare(randomNumber, i);
  }
  
  var playerScore = document.getElementById('score-player').innerText;
  var computerScore = document.getElementById('score-computer').innerHTML;
  
  function compare(randomNumber, i) {
    if (randomNumber == i) {
      document.getElementById('status').innerText = 'its a draw:-/';
      changeBorder(i);
    } else if (randomNumber == 0) {
      if (i == 1) {
        updatePlayerScore(i);
        document.getElementById('status').innerText = 'Paper captures rock!!';
      } else {
        updateComputerScore(i);
        document.getElementById('status').innerText = 'Rock crushes scissor!!';
      }
    } else if (randomNumber == 1) {
      if (i == 0) {
        updateComputerScore(i);
        document.getElementById('status').innerText = 'Paper captures rock!!';
      } else {
        updatePlayerScore(i);
        document.getElementById('status').innerText = 'Scissor cuts paper!!';
      }
    } else {
      if (i == 0) {
        updatePlayerScore(i);
        document.getElementById('status').innerText = 'Rock crushes scissor!!';
      } else {
        updateComputerScore(i);
        document.getElementById('status').innerText = 'Scissor cuts paper!!';
      }
    }
  }
  
  function updateComputerScore(i) {
    computerScore = parseInt(computerScore) + 1;
    document.getElementById('score-computer').innerHTML = computerScore;
    changeBorder(i);
  }
  function updatePlayerScore(i) {
    playerScore = parseInt(playerScore) + 1;
    document.getElementById('score-player').innerText = playerScore;
    changeBorder(i);
  }
  function changeBorder(i) {
    setTimeout(() => {
      document.getElementsByClassName('handles')[i].style.border =
        '5px solid yellow';
    }, 700);
  }
    const c = document.getElementById('b1');

    c.addEventListener('mouseover', function handleMouseOver() {
      c.style.color = 'yellow';
    });
    
    c.addEventListener('mouseout', function handleMouseOut() {
     c.style.color = '#6E6E6E';
    });

    function submit(id){
      var value = document.getElementById(id).value;
      if(value == ""){
        document.getElementById('you').innerText = "Player";
      }
      else{
        document.getElementById('you').innerText = value;
        window.scrollBy(0, 350);
        document.getElementById('b1').style.color = 'yellow';
      }
    }