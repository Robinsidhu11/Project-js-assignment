
let array=["HTML and Semantics","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML & CSS","Version Control and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making Projects using HTML, CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Understanding the Database","Starting with NodeJS and Express","Understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"]
let ollist=document.getElementsByTagName("ol")[0]
let button=document.getElementsByTagName("button")[0]
function add1item(){
  if(array.length==0){
    alert("all items have been added")
    return
  }
  let listele=document.createElement("li")
  listele.innerText=array.shift()
  ollist.appendChild(listele)


}
button.addEventListener('click',add1item)