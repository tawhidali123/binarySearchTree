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


  breadthFirstSearch(){
    let node = this.root
    let queue = []
    let data = []
    queue.push(node)

    while(queue.length){
      node = queue.shift()
      data.push(node.value)

      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }

    return data 
  }


  depthFirstSearchPreOrder(){
    let data = []

    function traverse(node){
      data.push(node.value)
      if(node.left){
        traverse(node.left)
      }
      if(node.right){
        traverse(node.right)
      }
    }

    traverse(this.root)
    return data
  }


}





let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(12)

tree.find(12)