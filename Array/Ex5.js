const mod2Array = arr => {
    const result = arr.map(val => val % 2);
    console.log(result);
    return result;
}

mod2Array([1, 2, 4, 6, 5, 7, 4, 1, 10])