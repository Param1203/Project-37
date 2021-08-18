class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

    //write code to change the background color here
     fill("yellow");
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
     getContestantInfo();

    //write condition to check if contestantInfor is not undefined
     if(allContestants !== undefined){
       fill("Blue");
       textSize(20);
       text("NOTE: Contestant who answered correctly are answered in green",130,230);
     }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("Green");}
      else {
        fill("red");
      }
    }
  }
}