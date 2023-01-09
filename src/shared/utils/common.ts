export function hasValue<T>(value: T | null | undefined): value is T {
  if (Array.isArray(value)) {
    return value.length !== 0;
  }
  return value !== null && value !== undefined;
}

export function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
