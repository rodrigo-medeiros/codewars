// Happy Holidays fellow Code Warriors!

// It's almost Christmas! That means Santa's making his list, and checking it twice.
// Unfortunately, Santa's Javascript and CoffeeScript Elves accidentally mixed the Naughty and Nice list together!
// Santa needs your help to save Christmas!

// Save Christmas!

// Santa needs you to write two functions, getNiceNames and getNaughtyNames.
// Both of the functions accept an array of objects.
// getNiceNames returns an array containing only the names of the nice people, and getNaughtyNames returns an array containing only the names of the naughty people.
// Return an empty array [] if the result from either of the functions contains no names.

// The objects in the passed in array will represent people. Each object contains two properties: name and wasNice.
// name - The name of the person
// wasNice - True if the person was nice this year, false if they were naughty

// Person Object Examples:

// { name: 'Warrior reading this kata', wasNice: true }
// { name: 'xDranik', wasNice: false }

// Test Examples:

// getNiceNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
//     { name: 'Santa', wasNice: true }
// ] )
// // => returns [ 'Warrior reading this kata', 'Santa' ]

// getNaughtyNames( [
//     { name: 'Warrior reading this kata', wasNice: true },
//     { name: 'xDranik', wasNice: false },
//     { name: 'Santa', wasNice: true }
// ] )
// // => returns [ 'xDranik' ]
// Want to be in one of the lists?

// The tests I'll be running includes an array of naughty and nice names.
// If you'd like to be in either of the lists, let me know in the discussion page :).
// I'll update it at the end of each day.

function getNiceNames (people) {
  return people.filter(function (person) {
    return person.wasNice;
  }).map(function (person) {
    return person.name;
  });
}

function getNaughtyNames (people) {
  return people.filter(function (person) {
    return !person.wasNice;
  }).map(function (person) {
    return person.name;
  });
}