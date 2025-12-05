//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // ENleve les espaces, tabulations etc
  const trimmedMessage = message.trim();
  // Regarde si trimmedMessage fini pas un'?'
  const isQuestion = trimmedMessage.endsWith("?");
  // Constante qui retourne un booleen si trimmedMessage correspond au regex
  const hasLetters = /[a-zA-Z]/.test(trimmedMessage);
  // true si le message contient des lettres, trimmed et qu'il est ecrit en majuscule
  const isShooting = hasLetters && trimmedMessage === trimmedMessage.toUpperCase();

  if (trimmedMessage === "") {
    return "Fine. Be that way!";
  }
  if (isShooting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }
  if (isShooting) {
    return "Whoa, chill out!";
  }
  if (isQuestion) {
    return "Sure.";
  }
  return "Whatever.";

};
