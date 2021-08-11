function isSubsequence(string1, string2) {
  let string1Index = 0;
  let string2Index = 0;
  if (!string1) return true;
  while (string2Index < string2.length) {
    if (string2[string2Index] === string1[string1Index]) {
      string1Index += 1;
    }
    if (string1Index === string1.length) return true;
    string2Index += 1;
  }
  return false;
}

