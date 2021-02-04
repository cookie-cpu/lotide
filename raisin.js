//Pair programmed by Jesse, Gio and Matt

const raisinAlarm = function(cookie){
  for (let i = 0; i <= cookie.length; i++){
    if (cookie[i] === "🍇") {
      return 'Raisin alert!';
    }

  }
  return 'All good!';
};

// Test cases
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  const output = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        output.push('Raisin alert!');
      } else {
  
    cookies.push("All good!")

      }
    }
  }
  return output;

}
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));