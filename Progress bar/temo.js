let innerbar=document.getElementById("innerbar")
innerbar.style.width="0%"
let val=0

document.addEventListener("wheel",function(e){
  // console.log(e)
  
  if(e.deltaY>0){
    // down
    val=val+2

  }
  else{
    // up
    val=val-2
  }
  
  let k=val
  if(k<0){
    val=0
  }
  else if(k>100){
    val=100
  }
  else{}
  innerbar.style.width=val.toString()+"%"
  oldYvalue=e.layerY
  
})
