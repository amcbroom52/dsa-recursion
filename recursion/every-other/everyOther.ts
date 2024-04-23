/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if(!str) return "";

  return str.substring(0, 1) + everyOther(str.substring(2));
}

export { everyOther };