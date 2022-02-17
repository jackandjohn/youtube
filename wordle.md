# Wordle

<a href="javascript:
(function(){
  let url = 'https://www.nytimes.com/games/wordle/index.html';
  let game = document.querySelector('game-app');
  if(window.location.href === url) {
    alert(game.solution);
  } else {
    window.location.href = url;
  }
}())">Wordle - Spoiler</a>

```javascript
javascript:
(function(){
  let url = 'https://www.nytimes.com/games/wordle/index.html';
  let game = document.querySelector('game-app');
  if(window.location.href === url) {
    alert(game.solution);
  } else {
    window.location.href = url;
  }
}())
```
