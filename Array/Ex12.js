const checkIncreaseArr = arr => {
    let result = true
    for(let i = 0; i < arr.length - 1 ; i++) {
        if(arr[i] > arr[i+1]) {
            result = false
            break;
        }
    }
    console.log(result);
    return result;
}

checkIncreaseArr([1, 2, 4, 7, 9, 11, 1])