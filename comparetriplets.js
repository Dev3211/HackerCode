function compareTriplets(a, b) {
    let alicescore = 0,
        bobscore = 0,
        arr = [];

    if (a.length == b.length) 
    {
        for (let i = a.length; i--;) {
            let alice = a[i],
                bob = b[i];

            if (alice > bob) {
                alicescore += 1
            } else if (alice < bob) {
                bobscore += 1
            }
        }
        arr.push(alicescore, bobscore)

        return arr;
    } 
}
