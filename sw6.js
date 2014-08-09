var reverseString = function(text){
	for(var i=text.length-1; i>0; i--){
		console.log(text.split("").reverse().join(""));
	}
}

reverseString("brianpunzalan");