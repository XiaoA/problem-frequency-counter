function twoArrayObject(keys, values) {
  return keys.reduce((object, current, index) => {
    object[current] = index < values.length ? values[index] : null;
    return object;
  }, {});
}
