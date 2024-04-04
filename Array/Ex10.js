const symmetricDifferent = (arr1, arr2) => {
    const filterArr1 = arr1.filter(value => !arr2.includes(value))
    const filterArr2 = arr2.filter(value => !arr1.includes(value))
    const result = filterArr1.concat(filterArr2);
    console.log(result);
    return result;
}

symmetricDifferent([1, 2, 3], [1, 2, 4]);