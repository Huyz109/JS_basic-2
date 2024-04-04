const getValuesObject = obj => {
    const result = Object.values(obj);
    console.log(result);
    return result;
}

getValuesObject({
    name: 'Nguyễn Tiến Đạt',
    age: 25,
    email: 'abc@gmail.com'
})