var output;
function calculator (x,y,z) {
  if (x==="+" || x==="sum" || x==="add" || x==="addition" || x==="plus") {
    output = y+z;
  } else if (x==="-" || x==="difference" || x==="subtract" || x==="subtraction" || x==="minus") {
    output = y-z;
  } else if (x==="*" || x==="product" || x==="multiply" || x==="multiplication") {
    output = y*z;
  } else if (x==="/" || x==="quotient" || x==="divide" || x==="division") {
    output = y/z;
  } else {
    output = "Mayn, you gotta set da right operata";
  }
}

calculator ("divide", 69, 42);

//calculator ("*", 69, 42);

//calculator ("+", 69, 42);

//calculator ("-", 69, 42);

console.log(output);

