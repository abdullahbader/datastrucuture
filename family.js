const prompt = require('prompt-sync')({sigint: true});

class Node {
constructor(name){
this.name=name
this.children=[]
}
}

class Tree { 
    constructor(name){
    this.name=name
    this.children=[]

    }

    addchild=(child) => {
        if(this.children.length < 3)
        this.children.push(child)
    }

    traverse = () => {
       let firstName = prompt("please enter your child name :")
       let parentName =  prompt("please enter your parent name :")
     
       if(parentName === this.name)
       this.addchild(firstName)
       else console.log("parent not found")
       
     //   let nodes = [this]; // to put the root node in our array
     //   while (nodes.length > 0) {
     //     let currentNode = nodes.pop();
     //     console.log(currentNode.data);
     //     nodes = [...nodes, ...currentNode.children];
     //  }
      ;

}
}


const root = new Tree("family")
// cName = prompt("please enter your child name :")



root.traverse()
console.log(root.children)
