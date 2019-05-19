function staircase(n) {
    let str = '#',
        str1 = '',
        i = 0;

    while (i++ < n) {
     str1 += ' '.repeat(n - i) + str.repeat(i) + "\r\n"
    }
    
    console.log(str1)
}
