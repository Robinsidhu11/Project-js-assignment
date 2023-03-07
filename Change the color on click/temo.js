let colors = ['red', 'green', 'blue', 'orange', 'yellow','grey','pink','cyan','purple','white'];
let button=document.getElementsByTagName("button")[0]
function colorrandom(){
  
  let randomindex=Math.floor(Math.random()*(colors.length))
  document.body.style.background=colors[randomindex]
}

button.addEventListener('click',colorrandom)