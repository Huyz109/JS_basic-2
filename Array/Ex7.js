const sample = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const result = arr[randomIndex];
    console.log(result);
    return result;
}

sample([3, 7, 9, 11])