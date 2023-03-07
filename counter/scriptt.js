let value=0
let displaybox=document.getElementsByClassName("displayfield")[0]
displaybox.textContent=value

function incrementvalue(){
    value=value+1
    displaybox.textContent=value
}
function decrementvalue(){
    value=value-1
    displaybox.textContent=value
}

let incrementbox=document.getElementById("button2")
incrementbox.addEventListener('click',incrementvalue)

let decrementbox=document.getElementById("button1")
decrementbox.addEventListener('click',decrementvalue)

let resetbox=document.getElementById("button3")
resetbox.onclick=()=>{
    value=0
    displaybox.textContent=value
}

