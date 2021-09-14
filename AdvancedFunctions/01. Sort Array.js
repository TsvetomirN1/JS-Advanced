function sortArray(arr, method) {

    const sortType = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    return arr.sort(sortType[method]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));