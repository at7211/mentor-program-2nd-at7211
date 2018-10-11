// #3 //
function reverse(str) {
	var revstr="";
	for(var i =str.length - 1; i >= 0; i--){
		revstr += str[i];
	}
	return revstr;
}
