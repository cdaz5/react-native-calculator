import * as actionTypes from '../action-types';

export const pressNum = number => ({
  type: actionTypes.PRESS_NUM,
  data: number
});

export const enter = () => ({
  type: actionTypes.ENTER
});

export const operation = symbol => ({
  type: actionTypes.OPERATION,
  data: symbol
});

export const clear = () => ({
  type: actionTypes.CLEAR
});

export const swap = () => ({
  type: actionTypes.SWAP
});

export const toggleNegative = idx => ({
  type: actionTypes.TOGGLE_NEGATIVE,
  data: idx
});
