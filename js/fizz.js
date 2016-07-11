$(document).ready(function() {
  var limit = userInput();
  runLoop(limit);
});
    function userInput() {
    var insertNumber = prompt("Enter a numerical number between 1-100");
    return parseInt(insertNumber);
  }
  function runLoop(limit) {
      for (var number = 1; number <= limit; number++) {
        if (number % 15 === 0) {
          $('ul').append('<li>' + 'FizzBuzz' + '</li>');
        } else if (number % 3 === 0) {
          $('ul').append('<li>' + 'Fizz' + '</li>');
        } else if (number % 5 === 0) {
          $('ul').append('<li>' + 'Buzz' + '</li>');
        } else {
          $('ul').append('<li>' + number + '</li>');
        }
      }
    }
    