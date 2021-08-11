function constructNote(message, letters) {
  const lettersFrequency = {};
  const messageFrequency = {};

  for (let character of letters) {
    lettersFrequency[character] = ++lettersFrequency[character] || 1;
  }

  for (let character of message) {
    messageFrequency[character] = ++messageFrequency[character] || 1;
  }

  for (let character in messageFrequency) {
    if (!lettersFrequency[character]) {
      return false;
    }
    if (messageFrequency[character] > lettersFrequency[character]) {
      return false;
    }
  }

  return true;
}
