const getLengthObject = obj => {
    const result = Object.keys(obj).length;
    console.log(result);
    return result;
}

const user = {
    name: 'Nguyễn Tiến Đạt',
    age: 25,
    email: 'abc@gmail.com'
}

getLengthObject(user);
