var output;
function calculator (x,y,z) {
  if (x==="+", "sum", "add", "addition", "plus") {
    output = y+z;
  } else if (x==="-", "difference", "subtract", "subtraction", "minus") {
    output = y-z;
  } else if (x==="*", "product", "multiply", "multiplication") {
    output = y*z;
  } else if (x==="/", "quotient", "divide", "division") {
    output = y/z;
  } else {
    output = "Mayn, you gotta set da right operata";
  }
}

calculator ("lololol", 69, 42);

//calculator ("*", 69, 42);

//calculator ("+", 69, 42);

//calculator ("-", 69, 42);

console.log(output);
