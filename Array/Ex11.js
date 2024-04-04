const sub_String = str => {
    let result = []
    for(let i = 0; i < str.length; i++) {
        for(let j = i+1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    console.log(result);
    return result;
}

sub_String('dog')