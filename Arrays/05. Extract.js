  
function extractSubsequence(arr) {
    arr = arr.map(Number);

    let result = arr.filter((x, i) => x >= Math.max(...arr.slice(0, i + 1))).join('\n');

    console.log(result);
}