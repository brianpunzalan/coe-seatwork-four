var joinArray = function(inputArray, seperator){
	var text = "";
	for(var i=0; i<inputArray.length; i++){
		if(i === inputArray.length-1){
			text = text.concat(inputArray[i]);
		}
		else{
			text = text.concat(inputArray[i])+seperator;	
		}
	}
	console.log(text);
}

var myColor = ["Red", "Green", "White", "Black"];

joinArray(myColor,',');
joinArray(myColor,'-');
joinArray(myColor,'+');