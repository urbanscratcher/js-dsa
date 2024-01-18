function genDay() {
  //first generate a month
  var month = 1 + Math.round(11 * Math.random());

  if ((month % 2 == 1 && month <= 7) || (month % 2 == 0 && month >= 8)) {
    var day = 1 + Math.round(30 * Math.random());
  } else if (month == 2) {
    var day = 1 + Math.round(27 * Math.random());
  } else {
    var day = 1 + Math.round(29 * Math.random());
  }
  return [day, month];
}

function genBirthdays(n) {
  var birthdays = [];
  var nst = n.toString();
  for (var i = 0; i < n; i++) {
    var str = i.toString();
    var lim = nst.length - str.length;
    for (var j = 1; j <= lim; j++) {
      str = "0" + str;
    }
    birthdays[2 * i] = str;
    birthdays[1 + 2 * i] = genDay();
  }
  return birthdays;
}

// search for unique birthdays in the array
function find(birthdays) {
  let n = birthdays.length;
  let count = 0;
  let players = [];

  for (let i = 1; i < n; i = i + 2) {
    count = 0;
    for (let j = 1; j < n; j = j + 2) {
      if (i != j) {
        if (
          birthdays[i][0] === birthdays[j][0] &&
          birthdays[i][1] === birthdays[j][1]
        ) {
          count++;
        }
      }
    }
    if (count === 0) {
      players.push(birthdays[i - 1]);
    }
  }
  return players;
}

///////////////////////////////////////////

//this function swaps membership numbers and birthdays given two indices
function swap(array, index1, index2) {
  var x1 = array[index2];
  var x2 = array[index2 - 1];
  array[index2] = array[index1];
  array[index1] = x1;
  array[index2 - 1] = array[index1 - 1];
  array[index1 - 1] = x2;
  return array;
}

function bubbleSort(array) {
  var n = array.length;
  for (var i = 0; i <= n - 2; i++) {
    var count = 0;
    for (var j = 1; j <= n - 3; j = j + 2) {
      if (array[j + 2][1] < array[j][1]) {
        swap(array, j, j + 2);
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  return array;
}

function bubbleSortDays(array) {
  var n = array.length;
  for (var i = 0; i <= n - 2; i++) {
    var count = 0;
    for (var j = 1; j <= n - 3; j = j + 2) {
      if (array[j + 2][1] == array[j][1] && array[j + 2][0] < array[j][0]) {
        swap(array, j, j + 2);
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  return array;
}

// sort then search for unique birthdays
function findSorted(birthdays) {
  bubbleSortDays(bubbleSort(birthdays));

  let n = birthdays.length;
  let players = [];

  let check1 =
    birthdays[1][0] === birthdays[3][0] && birthdays[1][1] === birthdays[3][1];

  if (check1 === false) {
    players.push(birthdays[0]);
  }

  let check2 =
    birthdays[n - 1][0] === birthdays[n - 3][0] &&
    birthdays[n - 1][1] === birthdays[n - 3][1];

  if (check2 === false) {
    players.push(birthdays[n - 2]);
  }

  for (let i = 3; i < n - 1; i = i + 2) {
    let check1 =
      birthdays[i][0] === birthdays[i + 2][0] &&
      birthdays[i][1] === birthdays[i + 2][1];

    let check2 =
      birthdays[i][0] === birthdays[i - 2][0] &&
      birthdays[i][1] === birthdays[i - 2][1];

    if (!check1 && !check2) {
      players.push(birthdays[i - 1]);
    }
  }

  return players;
}

///////////////////////////////////////////
//this creates an array for testing
//in this array the only unique birthday is held by member "1"
var birthdays = genBirthdays(100);
console.log(find(birthdays));
console.log(findSorted(birthdays));
//in both cases the array printed to the console should be ["1"]

//if you are feeling confident you can uncomment the following lines of code to test a larger example
// var birthdays = genBirthdays(1589);
// console.log(find(birthdays));
// console.log(findSorted(birthdays));

// Do not modify the code below this point--------------------------------
module.exports = {
  genDay: genDay,
  genBirthdays: genBirthdays,
  find: find,
  swap: swap,
  bubbleSort: bubbleSort,
  bubbleSortDays: bubbleSortDays,
  findSorted: findSorted,
};
