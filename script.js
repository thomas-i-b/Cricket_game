let computerChoise;
let result;
let myChoise;


let scoreStr=localStorage.getItem('Score');
let score;
resetScore(scoreStr);


function resetScore(scoreStr){
  score = scoreStr ? JSON.parse(scoreStr) : {
      win:0,
      lost:0,
      tie:0,
    };
  score.displayScore= function(){
    return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  }
  computerChoise=undefined;
  result=undefined;
  myChoise=undefined;
  finalAlert(myChoise, computerChoise, result );
}

// if(scoreStr!==undefined){
//   score=JSON.parse(scoreStr);
// }else{
//   score={
//     win:0,
//     lost:0,
//     tie:0,
//   }
// }




function test(myChoise){
  let randomNumber=Math.random()*3;
  if(randomNumber>0 && randomNumber<=1){
    computerChoise='Bat';
  }else if(randomNumber>1 && randomNumber<=2){
    computerChoise='Ball';
  }else{
    computerChoise='Stump';
  }

  if(myChoise==='Bat'){
    if(computerChoise==='Bat'){
      score.tie++;
      result=`It's a TIE`;
    }else if(computerChoise==='Ball'){
      score.win++;
      result=`You WIN`;
    }else if(computerChoise==='Stump'){
      score.lost++;
      result='You LOSE';
    }
  }else if(myChoise==='Ball'){
    if(computerChoise==='Bat'){
      score.lost++;
      result=`You LOSE`;
    }else if(computerChoise==='Ball'){
      score.tie++;
      result=`It's a TIE`;
    }else if(computerChoise==='Stump'){
      score.win++;
      result='You WIN';
    }
  }else if(myChoise==='Stump'){
    if(computerChoise==='Bat'){
      score.win++;
      result=`You WIN`;
    }else if(computerChoise==='Ball'){
      score.lost++;
      result=`You LOSE`;
    }else if(computerChoise==='Stump'){
      score.tie++;
      result=`It's a TIE`;
    }
  }
  
}

function finalAlert(myChoise, computerChoise, result){
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user-move').innerText= myChoise ?`You have chosen ${myChoise}`:'';
  document.querySelector('#computer-move').innerText= computerChoise ?`Computer has chosen ${computerChoise}`: '';
  document.querySelector('#result').innerText= result || '';
  document.querySelector('#score').innerText= score.displayScore();
}