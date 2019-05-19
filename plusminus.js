function plusMinus(arr) {
    let length = arr.length,
        pos = 0,
        neg = 0,
        zeros = 0;
 
    for (let i = arr.length; i--;) {
        if (arr[i] > 0) pos += 1   
        if (arr[i] < 0) neg += 1
        if (arr[i] == 0) zeros += 1
    }
    let results = (pos / length).toFixed(6) + "\n" + (neg / length).toFixed(6) + "\n" + (zeros / length).toFixed(6)
    console.log(results)
}
