//-----------------------------------------------------------------------Linked List---------------------------------------------------------//

class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
// linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end
  // of list
  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  // removes a given element from the
  // list
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds the index of element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // gives the size of the list
  size_of_list() {
    // console.log(this.size);
    return this.size;
  }

  // prints the list items
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    // console.log(str);
    return str;
  }
}

//-----------------------------------------------------------------------Queue---------------------------------------------------------//

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    // Move all elements from s1 to s2
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
      //s1.pop();
    }

    // Push item into s1
    this.s1.push(x);

    // Push everything back to s1
    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
      //s2.pop();
    }
  }

  // Dequeue an item from the queue
  deQueue() {
    // If first stack is empty
    if (this.s1.length == 0) {
      document.write("Q is Empty");
    }

    // Return top of s1
    let x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

//--------------------- Create Linked List------------------------------------

let squareList = new LinkedList();
squareList.add(0);
squareList.add(1);
squareList.add(2);
squareList.add(3);
squareList.add(4);
squareList.add(5);
squareList.add(6);
squareList.add(7);
squareList.add(8);
squareList.add(9);
squareList.add(10);
squareList.add(11);
squareList.add(12);
squareList.add(13);
squareList.add(14);
squareList.add(15);

//--------------------- Create Queue------------------------------------

let ineligibleBoxes = new Queue();

//-----------------------Functions--------------------------------------(703)260-6799

const changeSquareColor = () => {
  //getting a rand num based on list size
  let randNum = randomEl(squareList.size_of_list());
  //removing the element specifiec
  let removedSquare = squareList.removeFrom(randNum);

  // console.log(randNum)
  // console.log(squareList.printList())

  const colorSquare = (document.getElementById(
    `box-${removedSquare}`
  ).style.background = randColor());

  ineligibleBoxes.enQueue(removedSquare);

  intervalForSquareDequeue();

  console.log(squareList.size_of_list());

  return colorSquare;
};

//Dequeue
const squareDequeue = () => {
  const x = ineligibleBoxes.deQueue();
  squareList.add(x);
  console.log(x);
};

const intervalForSquareColorChange = () => {
  setInterval(changeSquareColor, 250);
};

const intervalForSquareDequeue = () => {
  setTimeout(squareDequeue, 2000);
};

// Random Number Generator
function randomEl(max) {
  let randNum = Math.floor(Math.random() * max);
  // console.log(randNum)
  return randNum;
}

// Random Color Picker
const randColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // console.log(color)
  return color;
};

setTimeout(intervalForSquareColorChange, 250);
