import { GET_NUMBERS_BASKET } from './types.js';

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting all Basket Numbers!");
    dispatch({
      type: GET_NUMBERS_BASKET
    });
  }
}