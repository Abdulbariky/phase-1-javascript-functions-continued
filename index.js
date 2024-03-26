function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
  }

  function wrapAdjective(adj = 'special') {
    return function(param) {
      return `You are ${param} ${adj}!`;
    };
  }

 function wrapAdjective(flair = '*') {
  return function(adj) {
    if (flair === '||') {
      return `You are ||${adj}${flair}!`;
    }
    return `You are *${adj}${flair}!`;
  };
}
