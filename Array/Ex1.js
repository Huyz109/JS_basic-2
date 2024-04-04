const minNumbers = arr => {
    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < result) 
            result = arr[i]
    }
    console.log(result);
    return result
}

minNumbers([2, 1, 3])