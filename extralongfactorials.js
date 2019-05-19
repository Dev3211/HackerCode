function extraLongFactorials(n) {
    let i = 0,
        result = [],
        intt = BigInt(n);

    while (i++ < n) {
        let number = BigInt(n - i);
        if (number == 0) break;
        result.push(number)
    }

    for (let i = result.length; i--;) {
        let intz = BigInt(intt * result[i])
        intt = intz
    }
    intt = intt.toString()
    intt = intt.replace('n', '')

    console.log(intt)
}
