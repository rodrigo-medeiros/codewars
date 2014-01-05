// You are given a node, which is the beginning of a linked list. This list always contains a tail and a loop.

// Your objective is to determine the length of the loop.

// RUBY : Use the function #next to get the following node.

// class Node
//       attr_accessor :next
// end
// JS Use the function #getNext() to get the following node.

// function Node() {
//   this.next;
//   this.getNext = function() {
//     return this.next
//   }
// }
// Thanks to shadchnev, I broke all of the methods from the Hash class.

// Don't miss dmitry's article in the discussion after you pass the Kata !!

function Node() {
  this.next = null;
  this.getNext = function () {
    return this.next;
  };
  this.setNext = function (node) {
    this.next = node;
  };
}

function loop_size(node) {
  var turtle = node,
    hare = node.getNext(),
    size = 0;
  while (turtle !== hare) {
    turtle = turtle.getNext();
    hare = hare.getNext().getNext();
  }
  size++;
  turtle = turtle.getNext();
  while (turtle !== hare) {
    size++;
    turtle = turtle.getNext();
  }
  return size;
}