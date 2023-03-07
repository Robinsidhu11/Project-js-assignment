let button=document.getElementsByTagName("button")[0]

let actual_ptag=document.getElementsByTagName("p")[0]
let new_ptag=document.createElement("p")
let count=0
function highlight(){
  
  new_ptag.textContent=""
  let actual_p_text=actual_ptag.textContent
  let array_from_text=actual_p_text.split(" ")
  for(let word of array_from_text){
    if(word.length<=8){
      new_ptag.append(word)
      new_ptag.append(" ")
    }
    else{
      let spantag=document.createElement("span")
      spantag.append(word)
      spantag.append(" ")
      new_ptag.append(spantag)
    }
  }
  count++
  actual_ptag.innerHTML=new_ptag.innerHTML
}
button.addEventListener('click',highlight)