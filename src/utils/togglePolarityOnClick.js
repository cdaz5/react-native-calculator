export const togglePolarityOnClick = (number) => {
  if (number.startsWith('-')) {
    return number.slice(1);
  }
  return `-${number}`;
};
