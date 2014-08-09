var coe = function(loop){
      for(var i=1;i<loop+1; i++){
         
         if((i%3 === 0) && (i%5 === 0) ){
            console.log("ComputerEngineering");
         }
         else if(i%3 === 0){
            console.log("Computer");
         }
         else if(i%5 === 0){
            console.log("Engineering");
         }
         else{
            console.log(i);
         }
      }
}

coe(100);
