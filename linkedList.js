// creating a node
class Node{
  constructor(data,next = null){
    this.data = data
    this.next = next
  }
}


 //create a linkedlist
 class LinkedList{
   constructor(head = null, size = 0){
     this.head = head
     this.size = size
   }
//insert the node in the first position
    insertFirst(data){
    this.head = new Node(data, this.head)
    this.size++
    }
//insert the node into the last position
    insertLast(data){
    let node = new Node(this.head,data)
    let current
    if(this.head === null){
        this.head = node
    }
    else{
        current = this.head
    while(current.next){
        current = current.next
    }
    current.next = node
    this.size++
    }
    }
//print the data in the linkedlist
    PrintListData(){
    let current = this.head

    while(current){
        console.log(current.data)
        current = current.next
    }
    }

 }