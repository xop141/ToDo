let pop_page = document.getElementById ("pop_page")
let header = document.getElementById ("header")
let bar_container = document.getElementById ("bar_container")

let ready = "false"
function pop() {
pop_page.style.display = 'flex'
header.style.opacity = "0.5"
bar_container.style.opacity = "0.5"
}
function exit() {
  pop_page.style.display = 'none'
header.style.opacity = "1"
bar_container.style.opacity = "1"
}



let ar = [{name:"", description: "", class : "", prior: ""}]
let classAR= []
let priorAR= []
function check() {
  priorAR.push(event.target.id)
}
function check2() {
  classAR.push(event.target.id)
}


  let i =  1
    
function print() {
  
  
  if (ar[i].prior == 1) {
   let newE = document.createElement ("div")
   
   newE.innerHTML = `
  <strong>Title:</strong> ${ar[i].name} <br> 
  <strong>Description:</strong> ${ar[i].description} <br>
  <strong>priority:</strong> ${ar[i].class}
`;
    document.getElementById ("add_container1").appendChild(newE)
   newE.id = "created"
    
  
  } else if(ar[i].prior == 2){
    let newE = document.createElement ("div")
   
    document.getElementById ("add_container2").appendChild(newE)
    newE.addEventListener("dblclick", function() {
      newE.remove(); 
      ar.splice(i, 1); 
    });
    newE.innerHTML = `
    <strong>Title:</strong> ${ar[i].name} <br> 
    <strong>Description:</strong> ${ar[i].description} <br>
    <strong>priority:</strong> ${ar[i].class}
  `;
    newE.id = "created"
    
  } else if(ar[i].prior == 3){
    let newE = document.createElement ("div")
    newE.addEventListener("dblclick", function() {
      newE.remove(); 
      ar.splice(i, 1); 
    });
    newE.id = "created"
    document.getElementById ("add_container3").appendChild(newE)
    newE.innerHTML = `
    <strong>Title:</strong> ${ar[i].name} <br> 
    <strong>Description:</strong> ${ar[i].description} <br>
    <strong>priority:</strong> ${ar[i].class}
  `;
 
  
  }else if(ar[i].prior == 4){
    let newE = document.createElement ("div")
    newE.addEventListener("dblclick", function() {
      newE.remove(); 
      ar.splice(i, 1); 
    });
    document.getElementById ("add_container4").appendChild(newE)
    newE.innerHTML = `
    <strong>Title:</strong> ${ar[i].name} <br> 
    <strong>Description:</strong> ${ar[i].description} <br>
    <strong>priority:</strong> ${ar[i].class}
  `;
  newE.id = "created" + i
  newE.style.width = "200px"
  newE.style.height = "100px"
  newE.style.backgroundColor = "green"
  
  }
  i=i+1
}
let title = document.getElementById ("Title")
    function add() {
      ar.push({name: Title.value, description: Description.value,
         class : classAR[classAR.length-1], prior : priorAR[priorAR.length-1]})
         
         if (ar[i].description !== '' && ar[i].name !== ''){
          
         exit()
         print()
          
         } else{
          ar.pop()
         } 
    }
 
 
  
