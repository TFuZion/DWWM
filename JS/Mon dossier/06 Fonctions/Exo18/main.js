
function palindrome(word) {
  if (word === word.split('').reverse().join('')) {
    console.log(`C'est un Palindrome`);
  }
  else {
    console.log(`Ce n'est pas un palindrome`);
  }
}

palindrome("voiture")