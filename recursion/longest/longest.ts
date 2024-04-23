import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if (words === null) return 0;

  const currLength = words.val.length;
  const maxLength = longest(words.next);

  return (currLength > maxLength) ? currLength : maxLength;
}

export { longest };
