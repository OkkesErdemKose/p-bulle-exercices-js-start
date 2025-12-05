// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const rsult = Number(array1.join("")) + Number(array2.join(""));

  return rsult;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    let valueToString = value.toString();
    // Retourne un booleean qui split la variable valueToString, donc il decoup a chaque '' donc a chaque caractere, ensuite sa reverse le tableau et le join re colle toute les char entre elles, donc refait le mot mais a l'envers.
    return valueToString.split('').reverse().join('') === valueToString;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Boolean(Number(input))) {
    return ''
  }
  else if (input === null || input === undefined || String(input).trim() === '') {
    return 'Required field'
  }
  return 'Must be a number besides 0'

}
