class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

//constructor for linked list node

class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) { //adding new value to the list
        var newNode = new Node(val) //creates a new node using the value passed to the function
        if(!this.head) {  //if there is no head on the list, set the head and tail to be newly created nodes
            this.head = newNode
            this.tail = this.head
        } else { //otherwise set the next property on the tail to be the new node, and set the tail to new as well
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++ //add to length by one
        return this
    }
    pop() { //removes the tail node from list
    if(!this.head) return undefined //if there are no nodes in the list, return undefined
    var current = this.head
    var newTail = current
    while(current.next) { //loop thru the list until tail is reached
        newTail = current
        current = current.next
    }
    this.tail = newTail
    this.tail.next = null //set the next property of the 2nd to last node to be null
    this.length--
    if(this.length === 0) {
        this.head = null
        this.tail = null
    }
    return current
    }

    get(index) { //gets the value of the node based on the index that you define (a search)
        if(index < 0 || index >= this.length) return null 
        var counter = 0
        var current = this.head
        while(counter !== index) { 
            current = current.next
            counter++
        }
        return current
    }

    set(index, val) { //changes value of node based on position in list
        var foundNode = this.get(index) //uses get function to find the index
        if(foundNode) { //if node if found set value to be the value we passed
            foundNode.val = val
            return true
        } //if its not found, return false
        return false
    }
}
var list = new SingleLinkedList()

console.log(list.push (50))
console.log(list.push (60))
console.log(list.push (70))
console.log(list.pop())
console.log(list)

console.log(list.get(0))
console.log(list.set(0, 40))
console.log(list)



