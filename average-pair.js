function averagePair(array, number) {
  let start = 0; // left pointer
  let end = array.length - 1; // right pointer

  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === number) {
      return true;
    } else if (avg < number) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
