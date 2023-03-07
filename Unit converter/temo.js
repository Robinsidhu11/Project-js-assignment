let cel=prompt("Enter Temperature in Celcius")
cel=Number.parseInt(cel)
function convert_to_farhen(cel){
    return (9/5)*cel +(32)
}
console.log("Corresponding Farhenheit value is "+convert_to_farhen(cel))