const shuffleArray = arr => {
    const result = [...arr]
    for (let i = 0; i < result.length; i++) {
        const randomIndex = Math.floor(Math.random() * result.length);
        [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
    }
    console.log(result);
    return result;
}

shuffleArray([1, 3, 5, 7])