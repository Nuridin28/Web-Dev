function checkAge(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm('Did parents allow you?');
  // }

  return age > 18 ? true : confirm("Did parents allow you?");

  //  return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
  return a < b ? a : b;
}

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
