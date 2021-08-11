function sameFrequency(number1, number2) {
  let string1 = number1.toString();
  let string2 = number2.toString();
  if (string1.length !== string2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < string1.length; i++) {
    count1[string1[i]] = (count1[string1[i]] || 0) + 1;
  }

  for (let j = 0; j < string2.length; j++) {
    count2[string2[j]] = (count2[string2[j]] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}
