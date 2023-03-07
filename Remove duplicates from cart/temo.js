let cart={}

function addintocart(){
    let askuser=prompt("You want to add item?  Y/N  ")
    if(askuser=="N" || askuser=='n'){
        return
    }
    else{
        let nameofitem=prompt("Enter Name of the item to be added")

        // Below (if else code) is working and keys are getting added but all key correspond to value NaN
        // if (cart[nameofitem]==NaN){
        //     cart[nameofitem]=1
        // }
        // else{
        //     cart[nameofitem]=cart[nameofitem]+1
            
        // }
        //Below code(using ternary operator) is working and maintaining the key and count perfectly fine.
        cart[nameofitem]= cart[nameofitem]? cart[nameofitem]+1:1
        
        addintocart()
    }
}
function preparefinalcart(){
for(let key in cart){
    console.log(key)
}
}
addintocart()
preparefinalcart()
