function backwards(str) {
  var newstring = "";

  for(var i = str.length - 1; i >= 0; i--) {
    newstring += str.charAt(i);
  }

  return newstring;
}


// console.log(backwards("Hello Goodbye"))

