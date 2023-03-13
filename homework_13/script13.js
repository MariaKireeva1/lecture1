const DEFAULT_PARAMETRS = [1, 'two', () => console.log('hello'), true]

class LinkedList {
	constructor(head = null) {
		this.head = head
	}
}

class LinkedListNode {
	constructor (value, next = null) {
		this.value  = value,
		this.next = next
	}
}

// Singly Linked List

const SINGLY_LIST_HEAD = {
	value: 0,
	next: null
}


function addNodeToSinglyList(list, value) {
	let current;
	let node = new LinkedListNode(value);
	if (list.head == null) {
		list.head = node;
	} else {
		current = list.head
		while (current.next) {
			current = current.next;
		}
		current.next = node
	}
}

const SINGLY_LIST = new LinkedList(SINGLY_LIST_HEAD)


// Doubly Linked List
class DoublyLinkedListNode extends LinkedListNode {
	constructor (value, next, prev = null) {
		super (value, next);
		this.prev = prev;
	}
}


const DOUBLY_LIST_HEAD = {
		value: 0,
		next: null,
		prev: null
	}


function addNodeToDoublyList(list, value) {
	let current;
	if (!list.head) {
		list.head = new DoublyLinkedListNode(value) 
	} else {
		current = list.head;
		while (current.next) {
			current = current.next
		}
		current.next = new DoublyLinkedListNode(value, null, current)
	}
}

const DOUBLY_LIST = new LinkedList(DOUBLY_LIST_HEAD)


DEFAULT_PARAMETRS.forEach((item) => {
	addNodeToDoublyList(DOUBLY_LIST, item)
    addNodeToSinglyList(SINGLY_LIST, item)
})

console.log(SINGLY_LIST);
console.log(DOUBLY_LIST);