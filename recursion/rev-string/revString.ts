/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if(!str) return "";

  return str.substring(str.length - 1) + revString(str.substring(0, str.length - 1));
}

export { revString };