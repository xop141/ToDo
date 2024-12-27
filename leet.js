
let ar = []


function sub() {
  
    let obj = {
        title : title.value,
        desc : desc.value,
        
    }

    ar.push(obj)
    if (event.target.id === "choices1") {
        let todo = document.getElementById ("todo1")
        let newelement = document.createElement ("div")
        newelement.id = 'newT'
     
        todo.appendChild(newelement)
    } else if(event.target.id === "choices2"){
       
            let todo = document.getElementById ("inprog")
            let newelement = document.createElement ("div")
            newelement.id = 'newT'
            todo.appendChild(newelement)
        
    }else if(event.target.id === "choices3"){
       
        let todo = document.getElementById ("done")
        let newelement = document.createElement ("div")
        newelement.id = 'newT'
        todo.appendChild(newelement)
        let title1 = document.getElementById ("newT")
 
        
    }
    pol.style.display = "none"
   
}


console.log(ar);


function pop() {
document.getElementById ("pol").style.display = "block"

}
function hide() {
    document.getElementById ("pol").style.display = "none"
}
function choice() {
    document.getElementById ("choices").style.display = "block"
    
}
