var factorial = 1;
var i = 1;

while (true){
    i++;
    factorial = factorial*i;
    if(i === 10){
        break;
    }
}

console.log(factorial);