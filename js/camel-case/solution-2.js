function camelCase(text) {
    let res = [];
    for(let i = 0; i < text.length; i++) {
        if(text[i] === '-' || text[i] === '_') {
            if((i + 1) < text.length){
                res.push((i === 0) ? text[++i] : text[++i].toUpperCase());
            }
        } else {
            res.push(text[i]);
        }
    }

    return res.join('');
}


//console.log(camelCase('what-a-nice-day-today'));
//console.log(camelCase('What_a_nice_day_today'));
//console.log(camelCase('What_a_Nice-day-today'));
console.log(camelCase('_What_a_Nice-day-today'));
console.log(camelCase('_what_a_Nice-day-today'));
console.log(camelCase('What_a_Nice-day-today_'));