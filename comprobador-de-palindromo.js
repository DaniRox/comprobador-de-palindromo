function palindrome(str) {
  let newStr = str.match(/[a-z0-9]/gi);
  if (newStr.join().toLowerCase() === newStr.reverse().join().toLowerCase()){
    return true;
  } else {
    return false;
  }
}

//pruebas

console.log(palindrome("eye"));

console.log(palindrome("nope"));

console.log(palindrome("never odd or even"));

console.log(palindrome("_eye"));