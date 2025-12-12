// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    let number;
    switch (name) {
      case "Pure Strawberry Joy":
        number= 0.5;
        break;
      case "Energizer":
      case "Green Garden":
        number= 1.5;
        break;
      case "Tropical Island":
        number = 3;
        break;
      case "All or Nothing":
        number = 5;
        break;
      default:
        number = 2.5;
        break;

    }
    return number;

}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) { 
  let wedges = 0;
  let limesCutted = 0;
  let i=0;

  // La boucle continue tant que le parametre wedgesNeeded et supérieur a wedge ET que i soit inférieur a la logneur du tab limes
  while (wedges < wedgesNeeded && i < limes.length)
  {
    const lime = limes[i];

    switch (lime) 
    {
      case "small":
        wedges += 6;
        break;

      case "medium":
        wedges += 8;
        break;

      case "large":
        wedges += 10;
        break;

    }

    limesCutted++;




    i++;
  }


  return limesCutted;


}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;

  // Continu tant que le temp est supérieure a 0 et i est inferieur a la longueur du tap orders
  while (timeLeft > 0 && i < orders.length)
  {
    let order = orders[i];

    timeLeft -= timeToMixJuice(order);

    i++;

  }

  // Retourne un tableau coupé a l'index i puis garder le reste
  return orders.slice(i);

}
