//#5//
function join(str, concatStr) {
    var combine = '';
    for (var i = 0; i < str.length; i++) {
        combine += str[i] + concatStr;
    }
    return combine = combine.substring(0, combine.length-1);
}

function repeat(str, times) {
    var rep = '';
    for (var i = 0; i <= times-1; i++) {
        rep += str;
    }
    return rep;
}


console.log(repeat('a', 5));
console.log(join([1, 2, 3], '!'));