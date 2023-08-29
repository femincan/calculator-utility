const getKeyByValue = (
  targetObject: Record<string, unknown>,
  searchValue: unknown,
): string | undefined => {
  const foundKey = Object.keys(targetObject).find(
    (key) => targetObject[key] === searchValue,
  );

  return foundKey;
};

export { getKeyByValue };
