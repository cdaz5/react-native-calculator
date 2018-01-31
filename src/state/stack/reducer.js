import * as actionTypes from '../action-types';
import { doOperation } from '../../utils/doOperation';
import { togglePolarityOnClick } from '../../utils/togglePolarityOnClick';

export default (state = { stack: [], inputState: 'replace' }, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NEGATIVE:
      return {
        stack: state.stack.map((number, idx) => (action.data === idx ? togglePolarityOnClick(number) : number)),
        inputState: state.inputState
      };
    case actionTypes.SWAP:
      return {
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)],
        inputState: 'push'
      };
    case actionTypes.CLEAR:
      return {
        stack: [],
        inputState: 'replace'
      };
    case actionTypes.OPERATION:
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], action.data)}`,
          ...state.stack.slice(2)
        ],
        inputState: 'push'
      };
    case actionTypes.ENTER:
      return {
        stack: [state.stack[0] || 0, ...state.stack],
        inputState: 'replace'
      };
    case actionTypes.PRESS_NUM:
      switch (state.inputState) {
        case 'append':
          return {
            stack: [(state.stack[0] || '0') + action.data, ...state.stack.slice(1)],
            inputState: 'append'
          };
        case 'replace':
          return {
            stack: [action.data, ...state.stack.slice(1)],
            inputState: 'append'
          };
        case 'push':
          return {
            stack: [action.data, ...state.stack],
            inputState: 'append'
          };
        default:
      }
    default:
      return state;
  }
};
