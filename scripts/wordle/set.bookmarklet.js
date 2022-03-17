javascript:
(async function() {
  let game = document.querySelector('game-app');
  let updateTo = prompt(`Wordle # or 5 letter word (or word code)`, game.dayOffset);
  if(updateTo === '' || updateTo === null) return;
  console.log(updateTo);
  let startDate = new Date('2021-06-20');

  let number = Math.floor(updateTo);
  let wordleScript = document.querySelector('script[src*=main]');
  let list = await fetch(wordleScript.src).then(async (d) =>{
    let text = await d.text();
    let firstWord = text.search('cigar')-2;
    let interestingChunk = text.slice(firstWord);
    let endOfList = interestingChunk.search(']')+1;
    let wordListString = interestingChunk.slice(0, endOfList);
    return eval(wordListString);
  });
  
  if(number >= 0) {
    let offset = number % list.length;
    game.solution = list[offset];
    game.dayOffset = number;
  } else if(updateTo.length === 5) {
    game.solution = updateTo.toLowerCase();
    let listIndex = list.indexOf(game.solution);
    let code = game.dayOffset = btoa(game.solution);

    if(listIndex >= 0) {
      game.dayOffset = listIndex;
      let offsetTime = game.dayOffset*24*60*60*1000;
      let puzzleDate = new Date(startDate.getTime() + offsetTime);
      
      alert(`Wordle #${game.dayOffset} (${puzzleDate.toDateString()}) Code: ${code}`);
    } else {
      game.dayOffset = code;
      alert(`Code: ${game.dayOffset}`);
    }
  } else {
    try {
      let solution = atob(updateTo).toLowerCase();
      if(solution.length !== 5) {
        throw new Exception(`Invalid word! ${solution}`);
      }
      game.solution = solution;
      let listIndex = list.indexOf(game.solution);
      game.dayOffset = listIndex >= 0 ? listIndex : updateTo;
    } catch {
      try {
        let dayMils = 864e5;
        let offset = Math.round((new Date(updateTo) - startDate) / dayMils);
        game.solution = list[offset % list.length];
        game.dayOffset = offset;
      } catch {
        alert("Invalid choice! Must enter a number, 5 letter word, date, or recognized code");
      }
    }
  }
}());
