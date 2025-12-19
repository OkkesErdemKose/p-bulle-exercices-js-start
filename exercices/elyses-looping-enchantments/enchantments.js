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
    // si la carte dans le tas est la meme que la carte, ca incrlmente sameCard, sinon ca fait rien
    stack[i] === card ? sameCard++ : null;
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
    // Ici on verifie 'type' et 'carte % 2 === 0' (= pair), si ils sont true, ca incrémnente count, sinon on verifie si 'type' et carte % 2 !== 0 (= impair) si c'est false ca incrémente count, sinon ca fait rien
    type && carte % 2 === 0 ? count++ : !type && carte % 2 !== 0 ? count++ : null;
  }

  return count;
}