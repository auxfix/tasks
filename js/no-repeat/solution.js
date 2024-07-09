function noRepeat(string) {
    let res = [];

    for(let el of string){
        if(el !== res[res.length - 1]){ res.push(el); }
    }

    return res;
}


console.log(noRepeat('AAAABBBCCDDAABBB'));
console.log(noRepeat('ABBCcAD'));
console.log(noRepeat(['1','2','2','3','3']));