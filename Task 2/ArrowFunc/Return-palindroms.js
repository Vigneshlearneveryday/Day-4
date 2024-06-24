const palindromesResult = (arr) => {
  const palindromes = [];

  for (const str of arr) {
    if (Palindrome(str)) {
      palindromes.push(str);
    }
  }

  return palindromes;
};

const arr = ["amma", "father", "lovely", "madam", "civic", "level", "hello"];

console.log(palindromesResult(arr));
