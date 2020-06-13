function addRemove(arr) {
let n = 1;
let result = [];

arr.forEach(el => {
    el === 'add' ? result.push(n) : result.pop();
    n++;
});

return result.length===0 ? 'Empty' : result.join('\n');
}

console.log(addRemove(['add', 
'add', 
'add', 
'add']
));
