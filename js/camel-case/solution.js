function camelCase(text) {
    let splittedArray = text.split(/[_-]+/);
    let res = [
        splittedArray.shift(), 
        ...splittedArray.map(s => s[0].toUpperCase() + s.slice(1))
    ];

    return res.join('');
}


console.log(camelCase('what-a-nice-day-today'));
console.log(camelCase('What_a_nice_day_today'));
console.log(camelCase('What_a_Nice-day-today'));