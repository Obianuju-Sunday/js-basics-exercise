// ANOTHER CHALLENGE WITH ARRAYS, FUNCTIONS, METHODS, OBJECTS AND LOOPS
var john = {
  firstName: 'Johnson',
  lastName: 'Carson',
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalPaidAmount: [],
  calcTips: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tip;
      var bill = this.bills[i];
      if (bill < 50) {
        tip = bill * 0.2;
      } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;
      } else {
        tip = bill * 0.1;
      }
      // this.tips.push(tip);
      // this.finalPaidAmount.push( bill + tip)
      this.tips[i] = tip;
      this.finalPaidAmount[i] = bill + tip;
    }
  }
}

john.calcTips();


var mark = {
  firstName: 'Markson',
  lastName: 'Duke',
  bills: [77, 475, 110, 45],
  tips: [],
  finalPaidAmount: [],
  calcTips: function () {
    for (var i = 0; i < this.bills.length; i++) {
      var tip;
      var bill = this.bills[i];
      if (bill < 100) {
        tip = bill * 0.2;
      } else if (bill >= 100 && bill < 200) {
        tip = bill * 0.1;
      } else {
        tip = bill * 0.25;
      }
      // this.tips.push(tip);
      // this.finalPaidAmount.push( bill + tip)
      this.tips[i] = tip;
      this.finalPaidAmount[i] = bill + tip;
    }
  }
}

mark.calcTips();

function calcAverageTip(array) {
  sumOfArray = 0;
  for (var i = 0; i < array.length; i++) {
    sumOfArray += array[i];
  }

  return sumOfArray / array.length;
}


// Add an averageTip property to the john object after calculating
john.AverageTip = calcAverageTip(john.tips);
mark.AverageTip = calcAverageTip(mark.tips);

// object.newProperty = value; // This is the syntax used to add a new property to an object

// What I did initially
// var johnsAverageTip = calcAverageTip(john.tips);
// var marksAverageTip = calcAverageTip(john.tips);


if (john.AverageTip > mark.AverageTip) {
  console.log(`John\'s family paid higher tips on an average of $${john.AverageTip.toFixed(2)}`);
} else {
  console.log(`Mark\'s family paid higher tips on an average of $${mark.AverageTip.toFixed(2)}`);
}

console.log(john, mark);