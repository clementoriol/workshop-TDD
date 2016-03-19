import { isString, isNumber } from 'lodash';
/*
  Truncates a string to the passed limit, and append it the '...'
  symbol (by default)
*/
export const truncate = (text, limit, symbol = '...') => {
  if (!isString(text)) {
    console.error(`Truncate: invalid 'text' argument: '${text}' should be a String`);
  }
  if (!isNumber(limit) || limit < 0) {
    console.error(`Truncate: invalid 'limit' argument: '${limit}' should be a positive Number`);
    return;
  }

  if (text.length > limit) {
    if (text[limit - 1] === ' ') {
      text = text.substring(0, limit - 1) + symbol;
    } else {
      text = text.substring(0, limit) + symbol;
    }
  }
  return text;
};
