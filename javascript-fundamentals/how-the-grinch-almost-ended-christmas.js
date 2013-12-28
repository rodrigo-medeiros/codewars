// Happy Holidays fellow Code Warriors!

// You got here right on time Code Warrior!
// The Grinch has initiated an attack on the North Pole!
// We need to take out his Missiles before they hit the workshop and destroy all the gifts!
// Santa's missile tracker Elves have determined how far away each missile is from our position,
// and the speed at which they are traveling.

// Stop the Grinch's Attack!

// Write a function called prioritizeMissiles that accepts an array of Missile objects,
// and returns an array containing the names of the Missile objects sorted by the amount of time left before the missile hits Santa's workshop.
// If multiple missiles are going to hit the workshop at the same time, maintain the same order they appear in in the passed in array.

// Missiles that will hit the workshop sooner should be closer to the front of the list,
// while missiles that will hit later should be closer to the end of the list.
// Santa's anti missile defense system will use your solution to eliminate the missiles.

// Examples:

// prioritizeMissiles([
//   {name: 'DASHER_V3', distance: 1000, speed: 100},
//   {name: 'DANCER_V2.3', distance: 1000, speed:10},
//   {name: 'PRANCER_V1.2', distance: 1000, speed: 1}
// ]); // => returns ['DASHER_V3', 'DANCER_V2.3', 'PRANCER_V1.2']

// prioritizeMissiles([
//   {name: 'VIXEN_V1.1', distance: 500, speed: 4},
//   {name: 'COMET_V4', distance: 1000, speed: 500},
//   {name: 'CUPID_V5', distance: 100, speed: 1}
// ]); // => returns ['COMET_V4', 'CUPID_V5', 'VIXEN_V1.1']

// Hint: The time before a missile hits Santa's workshop can be calculated using the distance and speed of that missile.

function prioritizeMissiles (missiles) {
  return missiles.sort(function (a, b) {
    return a.distance / a.speed > b.distance / b.speed;
  }).map(function (missile) {
    return missile.name;
  });
}