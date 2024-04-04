const removeDuplicate = arr => {
    const result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

const max2Numbers = arr => {
    const removeDuplicateArr = removeDuplicate(arr);
    const sortArray = removeDuplicateArr.sort();
    const result = sortArray[sortArray.length - 2];
    console.log(result);
    return result;
}

max2Numbers([2, 1, 3, 2, 3, 3])