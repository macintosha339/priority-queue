const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.nodes = [];	
	}

	push(data, priority) {
		var node = new Node(data, priority);
			
	}

	pop() {
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
			
	}

	size() {
		return this.nodes;
	}

	isEmpty() {
		if (this.root == null) {
			return true;
		}
		return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.nodes = 0;
	}

	insertNode(node) {

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}

	hasBothChildren(node) {
		
	}
}

module.exports = MaxHeap;
