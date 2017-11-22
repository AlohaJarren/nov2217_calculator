var output;
function calculator (x,y,z) {
  if (x==="+") {
    output = y+z;
  } else if (x==="-") {
    output = y-z;
  } else if (x==="*") {
    output = y*z;
  } else if (x==="/") {
    output = y/z;
  } else {
    output = "Mayn, you gotta set da right operata";
  }
}

calculator ("/", 69, 42);

//calculator ("*", 69, 42);

//calculator ("+", 69, 42);

//calculator ("-", 69, 42);

console.log(output);
