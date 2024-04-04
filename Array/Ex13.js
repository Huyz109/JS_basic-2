const checkDecreaseArr = arr => {
    let result = true
    for(let i = 0; i < arr.length - 1 ; i++) {
        if(arr[i] < arr[i+1] || arr[i] % 2 === 0) {
            result = false;
            break;
        }
    }
    console.log(result);
    return result;
}

checkDecreaseArr([9, 7, 5, 4, 1])