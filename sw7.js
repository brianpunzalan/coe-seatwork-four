function lettercount(s, force){
	var cs= [], L,
	s= ta.value.toLowerCase().split('').sort().join('');
	var M= s.match(/([a-z])\1+/g)
	M.sort(function(a, b){
		return a.length> b.length? -1: 1;
	});
	if(force) return M;

	L= M[0].length;
	while(M.length && M[0].length== L){
		cs.push(M.shift().charAt(0));
	}
	return cs.join(' and ')+' ( '+L+' times.)'
}
var ta={
value: 'kaldfnklajsfklasndmflkasjfklasdfjkjklkasklaa'
};

console.log(lettercount(ta.value));