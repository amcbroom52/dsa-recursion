/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  debugger

  return isPalindrome(str.substring(1, str.length - 1));
}

export { isPalindrome };