// let i = 3;

while (i) {
  alert(i--);
} // last alert displays 1

let i = 0;
while (++i < 5) alert(i); // last alert displays 4

// let i = 0;
while (i++ < 5) alert(i); // last alert displays 5

for (let i = 0; i < 5; ++i) alert(i);

for (let i = 0; i < 5; i++) alert(i);

// from 0 to 4 (inclusive)

for (let i = 2; i <= 10; i++) {
  i % 2 === 0 ? alert(i) : "";
}

// let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);

  //   alert( i );
}

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
