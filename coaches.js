var team1;
function yesFunction1(){
   team1 = "coaches";
   alert("You pick coaches! Let's see if your opinion changes or stays the same.")
}

function noFunction1(){
   team1 = "players";
   alert("You pick players! Let's see if your opinion changes or stays the same.")
}

function playersFunction2(){
   if(team1=="players"){
     alert("You still like players. GO players.")
   }else{
     alert("You changed your mind or you continue with the same with players GO players.")
   }
}

function coachesFunction2(){
   if(team1=="coaches"){
     alert("Changed your mind or remain the same with players . GO coaches.")
   }else{
     alert("You changed your mind for the coaches, GO coaches.")
   }
}