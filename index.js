// Binary search Tree

class Node {
  constructor(val){
    this.value = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(val){
    let newNode = new Node(val)

    if(this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root

      while(true) {
        if(val < current.value){
          if(current.left === null){
            current.left = newNode
            return this
          }
          current = current.left
        } else {
          if(current.right === null){
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }


  find(val){
    if(this.root === null) return false
    let current = this.root
    let found = false

    while(current && !found){
      if(val < current.value){
        current = current.left
      } else if(val > current.value){
        current = current.right
      } else {
        // we found value
        found = true
      }
    }
    if(!found) return false
    return current
  }


}





let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(12)

tree.find(12)