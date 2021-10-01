const num = [10, 15, 20, 25, 30];
// num.forEach(function (ele) {
//    console.log(ele); 
// });

// myForEach
function myForEach(arr, callBack) {
    for (let i = 0; i < arr.length; i++){
        callBack(arr[i]);
    }
};

myForEach(num, function (n) {
   console.log(n); 
});
// myFilter