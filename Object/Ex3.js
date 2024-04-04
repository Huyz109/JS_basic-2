const checkKey = (obj, key) => {
    const keysArray = Object.keys(obj);
    const result = keysArray.includes(key);
    console.log(result);
    return result;
}

const user = {
    name: 'Nguyễn Tiến Đạt',
    age: 25,
    email: 'abc@gmail.com'
}

checkKey(user, 'study')