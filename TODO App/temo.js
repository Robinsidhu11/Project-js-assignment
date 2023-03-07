
// let array=["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express","Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"]
let todolist=[]
let textfield=document.getElementsByTagName("input")[0]
let button=document.getElementsByTagName("button")[0]
let tododisplaybox=document.getElementsByClassName("tododisplay")[0]
let ul=document.getElementsByTagName("ul")[0]

function add1item(){
  let textcontent=textfield.value
  if(textcontent.length==0){
    alert("invalid")
    return
  }
  todolist.push(textcontent)
  alert("added, Next one Please")
  textfield.value=""

}
function get_todo(){
  for(let ele of todolist){
    let li=document.createElement("li")
    li.textContent=ele
    ul.appendChild(li)
  }
}
button.addEventListener('click',add1item)

