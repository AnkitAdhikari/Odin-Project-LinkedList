class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }


    at(index) {
        if (index >= 0 && index < this.length) {
            let currentNode = this.head;
            for (let i = 0; i < index; i++) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        } else {
            return null;
        }
    }

    pop() {
        if (!this.head) return null;

        if (this.head === this.tail) {
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return nodeToRemove;
        }

        let currentNode = this.head;
        while (currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        const nodeToRemove = this.tail;
        this.tail = currentNode;
        this.tail.nextNode = null;
        this.length--;
        return nodeToRemove;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }
        const newNode = new Node(value);
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
        }
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            const nodeToRemove = this.head;
            this.head = this.head.nextNode;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return nodeToRemove;
        }
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.nextNode;
        }
        const nodeToRemove = currentNode.nextNode;
        currentNode.nextNode = nodeToRemove.nextNode;
        if (index === this.length - 1) {
            this.tail = currentNode;
        }
        this.length--;
        return nodeToRemove;
    }
}


const linkedList = new LinkedList();
linkedList.append(23);
linkedList.append(17);
linkedList.prepend(10);
// console.log(linkedList.head);
console.log(linkedList.at(0));
// linkedList.pop();
console.log(linkedList.contains(23));
console.log(linkedList.find(17));
console.log(linkedList.insertAt(100, -1));
console.log(linkedList.removeAt(2));

console.log(linkedList.size());
console.log(linkedList.toString())