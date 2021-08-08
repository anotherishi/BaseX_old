function c(n) {
    let s = 0n;
    //let b=BigInt(n)
    let b = n;
    while (b != 1n) {
        if (/[13579]$/.test(b.toString())) {
            b = 3n * b + 1n;
        } else {
            b = b / 2n;
        }
        s++;
        console.log(b);
    }
    return s;
}
