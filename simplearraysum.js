function simpleArraySum(ar) {
    let temp = 0

    for (let i = ar.length; i--;) {
        let element = ar[i]
        if (Number.isInteger(element)) {
            temp += element
        }
    }

    return temp;
}
