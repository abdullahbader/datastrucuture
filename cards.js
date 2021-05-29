const prompt = require('prompt-sync')({sigint: true});

Array.prototype.getRandom = function () {
    return this.slice(Math.floor(Math.random() * this.length), 1)[0];
}

class Node {
    constructor(color,number,nextnode = null){
    this.color = color
    this.number= number
    this.nextnode=nextnode

    }
}


class Stack{

    constructor(limit = 20){
    this.limit = limit
    this.size  =   0
    this.topnode= null

    }

    push = (color,number)=>{
        if(this.size === this.limit){
        console.log("stack is full")}
        else{
        const newNode = new Node(newraan)
        newNode.nextnode= this.topnode
        this.topnode = newNode
        this.size++
        }
    }

    pop = (data) => {
        if(this.size === 0){
        return "stack is empty "
        }        
        else
        while(this.size< 5 ){}
        const poped = this.topnode
        const player1= player1.push[poped]
        this.topnode = poped.nextnode
        this.size--
        return poped.data

    }


    get peek() {
        return this.topNode.data;

}
}


const newraan= raan([red,blue,yellow,green],[1,2,3,4,5,6,7,8,9]) 


const raan = (color,number)=>{
    let i = 0;
    while (i < 1){
      newcards.push([color.getRandom(), number.getRandom()]);
     i++ }
    return newcards;
}
