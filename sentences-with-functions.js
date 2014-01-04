// Implement all required functions in order to create the following sentences by calling those functions:

// Adam(has(a(dog())));                         ## must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam())))))));   ## must return "The name of the dog is also Adam."

function Adam() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function has() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function a() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function dog() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function The() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function name() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function of() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function the() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function is() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}
function also() {
  var name = arguments.callee.name;
  return arguments.length > 0 ? name + " " + arguments[0] : name + "." ;
}

// This one below is the most elegant solution, IMHO:
// (function(root) {
// 'Adam,has,a,dog,The,name,of,the,is,also'.split(',').forEach(function(w) {
//   root[w] = function(input) {
//       return w + (input ? ' '+input : '.');
//     };
// });
// })(this);