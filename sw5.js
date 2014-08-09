var countBs = function(word,charact){
	var count = 0;
	for(var i=0; i<word.length; i++){
		if(word[i]===charact){
			count++;
		}
	}
	return count;
}

console.log(countBs("BrianBbbb","b"));