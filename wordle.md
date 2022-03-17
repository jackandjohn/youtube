# Bookmarklets

Bookmarklets are javascript applciations that you install and run by simply creating a bookmark.

How to use:

1. Open your bookmark toolbar: `ctrl + shift + b`
2. Drag any links on this page to your bookmark toolbar
3. Click the bookmark to run the script

Alternatively you can create a new bookmark and copy the link location then paste the code as the bookmark link.

## Wordle Bookmarklets

<a href="javascript:(function(){let url = 'https://www.nytimes.com/games/wordle/index.html';let game = document.querySelector('game-app');if(window.location.href === url) {alert(game.solution);} else {window.location.href = url;}}())">Wordle - Spoiler</a> #cheat

This script will open the wordle page if you aren't already on it. Once on the page, activating this bookmarklet will show you the solution to the puzzle.

<a href="javascript:(function(){let gameState = JSON.parse(localStorage['nyt-wordle-state']);gameState.lastPlayedTs -= 24 *60*60*1000;gameState.lastCompletedTs -= 24 *60*60*1000;localStorage['nyt-wordle-state'] = JSON.stringify(gameState);window.location.reload();}())">Wordle - clear (keep streak)</a> #replay

This script will clear today's guess, allowing you to play again. Successive wins count to your total streak. Useful to combine with the `Set Wordle` mod allowing you to play as much Wordle as you want.

<a href="javascript:(async function() {let game = document.querySelector('game-app');let updateTo = prompt(`Wordle # or 5 letter word (or word code)`, game.dayOffset);if(updateTo === '' || updateTo === null) return;console.log(updateTo);let startDate = new Date('2021-06-20');let number = Math.floor(updateTo);let wordleScript = document.querySelector('script[src*=main]');let list = await fetch(wordleScript.src).then(async (d) =>{let text = await d.text();let firstWord = text.search('cigar')-2;let interestingChunk = text.slice(firstWord);let endOfList = interestingChunk.search(']')+1;let wordListString = interestingChunk.slice(0, endOfList);return eval(wordListString);});if(number >= 0) {let offset = number % list.length;game.solution = list[offset];game.dayOffset = number;} else if(updateTo.length === 5) {game.solution = updateTo.toLowerCase();let listIndex = list.indexOf(game.solution);let code = game.dayOffset = btoa(game.solution);if(listIndex >= 0) {game.dayOffset = listIndex;let offsetTime = game.dayOffset*24*60*60*1000;let puzzleDate = new Date(startDate.getTime() + offsetTime);alert(`Wordle #${game.dayOffset} (${puzzleDate.toDateString()}) Code: ${code}`);} else {game.dayOffset = code;alert(`Code: ${game.dayOffset}`);}} else {try {let solution = atob(updateTo).toLowerCase();if(solution.length !== 5) {throw new Exception(`Invalid word! ${solution}`);}game.solution = solution;let listIndex = list.indexOf(game.solution);game.dayOffset = listIndex >= 0 ? listIndex : updateTo;} catch {try {let dayMils = 864e5;let offset = Math.round((new Date(updateTo) - startDate) / dayMils);game.solution = list[offset % list.length];game.dayOffset = offset;} catch {alert('Invalid choice! Must enter a number, 5 letter word, date, or recognized code');}}}}());">Set Wordle</a> #free-play

This script will allow you to play any date (YYYY-MM-dd), any wordle #, or any valid wordle guess you want (not limited to just puzzle answers) and it will generate a code to share with others to try and guess your word. Use with the `Wordle - clear` Bookmarklet to play more than one game per day.

## Sources

Source code for these may include full wordle list! View at your own risk!

* [Source Code - Wordle spoiler](https://github.com/jackandjohn/youtube/blob/main/scripts/wordle/spoiler.bookmarklet.js)
* [Source Code - Wordle clear](https://github.com/jackandjohn/youtube/blob/main/scripts/wordle/clear.bookmarklet.js)
* [Source Code - Wordle set](https://github.com/jackandjohn/youtube/blob/main/scripts/wordle/set.bookmarklet.js) 
