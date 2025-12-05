//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // ENleve les espaces
  const trimmedMessage = message.trim();
  // Regarde si le message trimmed a un '?' a la fin
  const isQuestion = trimmedMessage.endsWith("?");
  // Regex, de a-z et A-z, puis retourne un test si il est trimmed ou pas
  const hasLetters = /[a-zA-Z]/.test(trimmedMessage);
  
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
