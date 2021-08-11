function separatePositive(numbers) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] < 0 && numbers[end] > 0) {

      let temp = numbers[start];
      numbers[start] = numbers[end];
      numbers[end] = temp;

      start += 1;
      end -= 1;
    } else {
      if (numbers[start] > 0) start += 1;
      else end -= 1;
    }
  }
  return numbers;
}
