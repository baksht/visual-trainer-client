function shuffleArray<T>(array: T[]): T[] {
  if (!array.length) {
    return array;
  }

  const mixedArray = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return JSON.stringify(array) === JSON.stringify(mixedArray) ? shuffleArray(mixedArray) : mixedArray;
}

export default shuffleArray;
