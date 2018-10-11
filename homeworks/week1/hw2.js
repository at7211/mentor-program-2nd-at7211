// #2 //

function capitalize(str) {
    if (str[0] >= 'a' && str[0] <= 'z') {
        str = str.replace(str[0], str[0].toUpperCase());
    }
    return str;

}


console.log(capitalize("timing"));

