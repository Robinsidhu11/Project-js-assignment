let email_field=document.getElementById("email")
let pass_field=document.getElementById("pass")
let formbox=document.getElementById("forms")

let button=document.getElementsByTagName("button")[0]
function checkemail(email){
  for(let chr of email){
    if(chr=="@"){
      return 1
    }
  }
  return 0
}
function checkpass(pass){
  if(pass.length>=8){
    return 1
  }
  return 0
}

function fun(){
  let emailcontent=email_field.value
  let password=pass_field.value

  if( checkemail(emailcontent)==1 && checkpass(password)==1){

    let ptag=document.getElementsByTagName("p")[0]
    ptag.textContent="valid email & password!"
    ptag.style.color="green"
    
    formbox.setAttribute("onsubmit","return true")
    
  }
  else{
    
    let ptag=document.getElementsByTagName("p")[0]
    ptag.textContent="Invalid email or password!"
    ptag.style.color="red"
  }
}

button.addEventListener('click',fun)