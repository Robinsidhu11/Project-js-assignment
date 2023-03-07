let color1=prompt("Enter First color")

let color2=prompt("Enter Second color")

let bool=true

switch(bool){
    case (color1=="red" && color2=="blue") || (color1=="blue" && color2=="red"):
        
        console.log("purple")
        break
    case (color1=="red" && color2=="yellow") || (color1=="yellow" && color2=="red"):
        console.log("orange")
        break
    case (color1=="blue" && color2=="yellow") || (color1=="yellow" && color2=="blue"):
        console.log("green")
        break
    default:
        console.log("Invalid  color combination")
}