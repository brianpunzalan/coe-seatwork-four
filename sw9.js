 var isLeap = function(year){
 	if(year%4===0){
 		if(year%100===0){
 			if(year%400===0){
 				console.log(year+" is leap year");
 			}
 			else{
 				console.log(year +" is not leap year");
 			}
 		}
 		else{
 			console.log(year +" is leap year");	
 		}
 	}
 	else{
 		console.log(year +" is not leap year");
 	}
 }

 isLeap(2014);
 isLeap(2012);