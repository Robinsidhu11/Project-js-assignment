
let button=document.getElementsByTagName("button")[0]

button.addEventListener('click',()=>{
  
  let h1tag=document.getElementsByTagName("h1")[0]

  if (h1tag.textContent=="The most affordable learning platform"){
    h1tag.innerText="PW Skills"
  }
  else{
    h1tag.innerText="The most affordable learning platform"
  }
})