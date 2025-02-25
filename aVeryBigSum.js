function aVeryBigSum(ar) {
    let longInteger = 0;
    let i = 0;
    
    while (i < ar.length) {
        longInteger += ar[i];
        i++;
    }
    
    return longInteger;
}