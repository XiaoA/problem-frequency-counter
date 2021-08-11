function countPairs(array, number) {
    array.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        let sum = array[start] + array[end];
        if (sum === number) {
            count++;
            start++;
            end--;
        } else if (sum < number) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}
