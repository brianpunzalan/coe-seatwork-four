var countBs = function(word){
	var count = 0;
	for(var i=0; i<word.length; i++){
		if(word[i]==="B"){
			count++;
		}
	}
	return count;
}

console.log(countBs("BrianBbbb"));