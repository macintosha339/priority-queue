class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			node.parent = this;
			return true;
		}
		else if (this.right == null) {
			this.right = node;
			node.parent = this;
			return true;
		}
		else return false;
	}

	removeChild(node) {
		if(this.left == node) {
			this.left = null;
			node.parent = null;
		}
		else if(this.rignt == node) {
			this.right = null;
			node.parent = null;
		}
		else {
			throw new Error('This is not a child!');
		}
	}

	remove() {
		if(this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent != null) {
			let grandParent = this.parent.parent;
		    let parent = this.parent;
		    let leftChild = this.left;
		    let rightChild = this.right;
		    parent.parent = this;
		    this.parent = grandParent;
			if (parent.left === this) {
	    		this.right = parent.right;
	    		this.left = parent;

	    		if (parent.right) {
				parent.right.parent = this;
			}
			
			parent.left = leftChild;
			parent.right = rightChild;

			// maintains correct state of parent.parent.left and parent.parent.right
			if (grandParent && grandParent.right === parent) {
				grandParent.right = this;
			} else if (grandParent && grandParent.left === parent) {
				grandParent.left = this;
			}

			return this.parent;

		} else  {
			this.left = parent.left;
			this.right = parent;

			if (parent.left) {
				parent.left.parent = this;
			}

			parent.left = leftChild;
			parent.right = rightChild;

			if (grandParent && grandParent.right === parent) {
				grandParent.right = this;
			} else if (grandParent && grandParent.left === parent) {
				grandParent.left = this;
			}
			return this.parent;
		}
	}
}
}

module.exports = Node;
