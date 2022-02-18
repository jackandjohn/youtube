javascript:
(function(){
  let gameState = JSON.parse(localStorage['nyt-wordle-state']);
  gameState.lastPlayedTs -= 24 *60*60*1000;
  gameState.lastCompletedTs -= 24 *60*60*1000;
  localStorage['nyt-wordle-state'] = JSON.stringify(gameState);
  window.location.reload();
}())
