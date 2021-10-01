// 1
const palindrome = str => {
    let ans = '';
    for (let i = str.length - 1; i >= 0; i--)
        ans += str[i];
    return (ans === ans1);
};

console.log(palindrome('malayalam'));

// 2
const arrayWithout = (arr, indices) => {
    let ans = [];
    for (let i = 0; i < arr.length; i++)
        if (!indices.includes(i))
            ans.push(arr[i]);
    return ans;
}
console.log(arrayWithout(['a','b','c','d','e'], [1,3]));