let imgele=document.getElementsByTagName("img")[0]
let topi=0
let lefti=0

document.addEventListener("keydown",function(e){
    //left
    if (e.keyCode=="37"){
        
        lefti=lefti-5
        let k=lefti.toString()+"px"
        imgele.style.left=k
    }
    // up
    else if(e.keyCode=="38")
    {
        topi=topi-5
        let k=topi.toString()+"px"
        imgele.style.top=k
    }
    // right
    else if(e.keyCode=="39")
    {
        lefti=lefti+5
        let k=lefti.toString()+"px"
        imgele.style.left=k
    }
    // bottom
    else{
        
        topi=topi+5
        let k=topi.toString()+"px"
        imgele.style.top=k
    }
})