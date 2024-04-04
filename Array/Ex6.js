const filterLongest = arr => {
    const longestLength = arr.reduce((longest, a) => longest > a.length ? longest : a.length, 0);
    const result = arr.filter(value => value.length === longestLength)
    console.log(result);
}

filterLongest(['abv', 'a', 'bc', 'bhu', 'ak'])