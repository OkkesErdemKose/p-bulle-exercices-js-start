// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  // .indexOf retourn simplement l'index de l'element card du tableau stack
  return stack.indexOf(card);
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  // Ca renvoie true ou false en fonction de si card est inclus dans stack
  return stack.includes(card);

}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  // Le .every test tous les elements avec la fonction booléean num => num % 2 === 0, sa retourne true si tous on passé le test, si un est false, le return sera false.
  return stack.every((num) => num % 2 === 0);

}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  // le .some est comme le .every sauf que la il suffit que y'ait seleument un true dans le test, et sa retourne true.
  return stack.some((num) => num % 2 !== 0);
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  // .find retourne le premiere elemenent correspondant au test
  return stack.find((num) => num % 2 !== 0);
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  // comme le .find, sauf que si aucun elemenent ne passe le test, il retourne -1
  return stack.findIndex((num) => num % 2 === 0);
}
