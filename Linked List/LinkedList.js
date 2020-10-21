class LL {

    constructor() {
        this.head = null;
        this.tail = null;
    }
 
    addNewNode(value) {                 // Adding New Node in Linked List (Normal - Add at the End of LL)

        const newNode = {               // Creating New Node
            value: value,
            next: null
        };

        if (!this.head) {               // Checking if First Node, if yes, setting new node as Head
            this.head = newNode;
        } else {
            this.tail.next = newNode;   // If Not, then Changing the previous tail to newNode
        }

        this.tail = newNode;            // Setting the tail = newnode

    }

    addNewNodeAtBegining(value) {

        const newNode = {               // Creating New Node
            value: value,
            next: this.head             // Setting Next as the Head : Because - this is going to be the new head.
        };

        if (!this.tail) {               // If first node, then setting tail as new node-
            this.tail = newNode;        //      - because the new node is going to be added at the begining. That's the common part. Have to take care of the tail here.
        }

        this.head = newNode;            // Setting the Head as the New Node
    }

    deleteNode(value) {                 // Delete Node

        while (this.head && this.head.value == value) {     // Checking if the Head is target. If yes then shifting head to the next and checking again.
            this.head = this.head.next;
        }

        let tempNode = this.head;                     // Setting head to the temo Node. NOTE: Head is not target any more. Head is safe.

        while (tempNode.next) {                         // Starting Checking if next node of tempNode / Head is target
            
            if (tempNode.next.value == value) {         // If next of Temo Node is target, then setting the next of tempNode as next of next of tempNode. Skipping the next node of tempNode.
                tempNode.next = tempNode.next.next;
            } else {                                    // Else, moving to the next node
                tempNode = tempNode.next;
            }
        }

        if (this.tail.value == value) {                 // If Target Node is the last node, then setting the tail of LL to Current Node
            this.tail = tempNode;
        }
    }


    viewLinkedList() {                  // To print the Linked List

        let tempNode = this.head;
        let tempList = [];

        while (tempNode) {

            tempList.push(tempNode);
            tempNode = tempNode.next;
        }

        return tempList;
    }
}


const list = new LL();
list.addNewNode('One');
list.addNewNode('Two');
list.addNewNode(3);
list.addNewNode('LOLOL');
list.addNewNode(69);
list.addNewNode('LOLOL');
list.addNewNode(4);
list.addNewNode('Suckit');
list.addNewNodeAtBegining('F O U R');
list.addNewNodeAtBegining('F O U R');

console.log(list.viewLinkedList());

list.deleteNode('F O U R');
list.deleteNode('Suckit');
list.deleteNode('LOLOL');
list.deleteNode(69);

console.log(list.viewLinkedList());