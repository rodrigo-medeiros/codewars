// Sometimes it's useful to know on which day of week the holly holiday will occur.
// But just don't limit ourselves to this year and write a function which consumes a Christmas date and outputs a name of weekday.

// Example:

// findOutChristmasWeekday('2013 12 25') // returns 'Wednesday'
// Only valid Christmas dates will be passed to the function.

// Date parameter could be a string or a Date object. If it's a string here are possible date parameter formats:

// '2013 12 25'
// '12 25 2013'
// '25 December 2013'

function findOutChristmasWeekday(date) {
  if (typeof date == "string") date = date.replace(/ /g, '-');
  return ['Sun', 'Mon','Tues','Wednes','Thurs','Fri','Satur'][new Date(date).getDay()] + "day";
}