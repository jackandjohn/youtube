javascript:
(function(){
  let url = 'https://www.nytimes.com/games/wordle/index.html';
  let gameState = JSON.parse(localStorage['nyt-wordle-state']);
  if(window.location.href === url) {
    alert(gameState.solution);
  } else {
    window.location.href = url;
  }
}())
