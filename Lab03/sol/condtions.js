if ("0") {
  alert("Hello");
} // true

let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

result = a + b < 4 ? "Below" : "Over";

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1, then 2

alert(1 && null && 2); // null firsty falsy val

alert(alert(1) && alert(2)); // 1, then undefined

alert(null || (2 && 3) || 4); // 3

if (age >= 14 && age <= 90) {
  //some code here
}

if (!(age >= 14 && age <= 90)) {
  //some code here
}

// Runs.
// The result of -1 || 0 = -1, true
if (-1 || 0) alert("first");

// Doesn't run
// -1 && 0 = 0, false
if (-1 && 0) alert("second");

// Executes
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert("third");

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
