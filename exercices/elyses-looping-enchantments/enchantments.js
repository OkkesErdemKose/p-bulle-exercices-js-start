// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let sameCard = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === card) {
      sameCard++;
    }
  }

  return sameCard;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let count = 0;
  
  for (const carte of stack) {
    if (type && carte % 2 === 0) {
      count++;
    } else if (!type && carte % 2 !== 0) {
      count++;
    }
  }

  return count;
}