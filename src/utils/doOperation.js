export const doOperation = (firstRow, secondRow, operation) => {
  const row1 = parseFloat(firstRow);
  const row2 = parseFloat(secondRow);
  switch (operation) {
    case 'pow':
      return row2 ** row1;
    case '+':
      return row2 + row1;
    case '-':
      return row2 - row1;
    case 'X':
      return row2 * row1;
    case '/':
      return row2 / row1;
    default:
      return 0;
  }
};
