const filterUser = arr => {
    const result = arr.filter(obj => obj.age > 25 && obj.isStatus)
    console.log(result);
    return result;
}

const users = [
    {
        name: 'Abc',
        age: 24,
        isStatus: true
    },
    {
        name: 'Bcd',
        age: 30,
        isStatus: true
    },
    {
        name: 'OIP',
        age: 26,
        isStatus: false
    },
]

filterUser(users);