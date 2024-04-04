const getKeysObject = obj => {
    const result = Object.keys(obj);
    console.log(result);
    return result;
}

getKeysObject({
    name: 'Nguyễn Tiến Đạt',
    age: 25,
    email: 'abc@gmail.com'
})