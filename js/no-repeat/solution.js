function noRepeat(string) {
    let splitArray = string.split('');
    let res = [];

    for(let el of splitArray){
        if(el !== res[res.length - 1]){ res.push(el)}
    }

    return res;
}


console.log(noRepeat('AAAABBBCCDDAABBB'));
console.log(noRepeat('ABBCcAD'));
console.log(noRepeat('1223377377'));