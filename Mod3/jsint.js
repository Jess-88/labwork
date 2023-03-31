console.log("" + 1 + 0); // will display "10"
console.log("" - 1 + 0); // will display -1
console.log(true + false); //will display  1
console.log(6 / "3"); //will display  2
console.log("2" * "3"); // will display 6
console.log(4 + 5 + "px"); // will display "9px"
console.log("$" + 4 + 5); // will display "$45"
console.log("4" - 2); // will display 2
console.log("4px" - 2); // will display NaN
console.log(" -9 " + 5); // will display " -9 5"
console.log(" -9 " - 5); // will display -14
console.log(null + 1); // will display 1
console.log(undefined + 1); // will display NaN
console.log(" \t \n" - 2); // will display NaN

// 2nd question
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
a = parseInt(a);
b = parseInt(b);
alert(a + b); // 3

//3rd question
// Check if 5 is greater than 4
if (5 > 4) {
  console.log("5 is greater than 4."); // Output: 5 is greater than 4.
}

// Compare "apple" and "pineapple"  
if ("apple" > "pineapple") {
  console.log("apple is greater than pineapple."); // This line won't be executed.
} else {
  console.log("apple is not greater than pineapple."); // Output: apple is not greater than pineapple.
}

// Compare "2" and "12"  
if ("2" > "12") {
  console.log("2 is greater than 12."); // Output: 2 is greater than 12.
}

// Check if undefined is equal to null
if (undefined == null) {
  console.log("undefined is loosely equal to null."); // Output: undefined is loosely equal to null.
}

// Check if undefined is strictly equal to null
if (undefined === null) {
  console.log("undefined is strictly equal to null."); // This line won't be executed.
} else {
  console.log("undefined is not strictly equal to null."); // Output: undefined is not strictly equal to null.
}

// Check if null is loosely equal to "\n0\n"
if (null == "\n0\n") {
  console.log("null is loosely equal to \"\\n0\\n\"."); // This line won't be executed.
} else {
  console.log("null is not loosely equal to \"\\n0\\n\"."); // Output: null is not loosely equal to "\n0\n".
}

// Check if null is strictly equal to +"\n0\n"
if (null === +"\n0\n") {
  console.log("null is strictly equal to +\"\\n0\\n\"."); // This line won't be executed.
} else {
  console.log("null is not strictly equal to +\"\\n0\\n\"."); // Output: null is not strictly equal to +"\n0\n".
}

// intermediate
1. console.log(ucFirst("john"));

2. function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); // Output: "What I'd like to te…"
console.log(truncate("Hi everyone!", 20)); // Output: "Hi everyone!"

3. var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
var middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
var firstItem = styles.shift();
console.log(firstItem);
styles.unshift("Rap", "Reggae");
console.log(styles);

4. function camelize(str) {
  var words = str.replace(/-([a-z])/g, function(match, letter) {
    return letter.toUpperCase();
  }).split("-");
  
  var camelCaseStr = words[0];
  for (var i = 1; i < words.length; i++) {
    var capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    camelCaseStr += capitalizedWord;
  }

  return camelCaseStr;
}

console.log(camelize("background-color"));  
console.log(camelize("list-style-image"));  
console.log(camelize("-webkit-transition"));

5. function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  
  this.calculate = function(str) {
    var tokens = str.split(" ");
    var a = +tokens[0];
    var operator = tokens[1];
    var b = +tokens[2];
    
    if (this.methods[operator]) {
      return this.methods[operator](a, b);
    } else {
      return NaN;
    }
  };
  
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

var calc = new Calculator();
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("10 - 5"));
var powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3")); 
console.log(powerCalc.calculate("4 * 5"));
console.log(powerCalc.calculate("10 / 2")); 

// advanced
1. function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());

2. function makeCounter() {
  var count = 0;
  
  function counter() {
    return count++;
  }
  
  counter.set = function(value) {
    count = value;
  }
  
  counter.decrease = function() {
    count--;
  }
  
  return counter;
}
var counter = makeCounter();

console.log(counter()); 
console.log(counter()); 

counter.set(10);
console.log(counter());

counter.decrease();
console.log(counter());

3. function printNumbers(from, to) {
  var current = from;
  var intervalId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(intervalId);
    } else {
      current++;
    }
  }, 1000);
}

printNumbers(1, 5);

function printNumbers(from, to) {
  var current = from;
  setTimeout(function printNumber() {
    console.log(current);
    if (current < to) {
      setTimeout(printNumber, 1000);
      current++;
    }
  }, 1000);
}

printNumbers(1, 5);
