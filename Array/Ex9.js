const similarity = (arr1, arr2) => {
    let result = []
    if (arr1.length >= arr2.length) {
        result = arr2.filter(value => arr1.includes(value))
    }
    else {
        result = arr1.filter(value => arr2.includes(value))
    }
    console.log(result);
    return result;
}

similarity([1, 2, 3], [1, 2, 4])
