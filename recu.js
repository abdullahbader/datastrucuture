const numbers = [ [1, 2, 3, 4], [3, 6, [5, 6], 8, 2,[2, 4], 9], [4, 2, [6, 7, [2, 6, 1]]]]


const sum = (group) => {
    let total = 0
    group.map((element) =>{
        if(!isNaN(element))
        total += element
        else total +=sum(element)
    })   
   return total
}

