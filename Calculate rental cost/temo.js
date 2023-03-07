let cartype=prompt("Which type of car? Economy / Midsize / Luxury")
let days=prompt("for how many days?")
function calculate_rent(days,cartype){
    if(cartype.toLowerCase()=="economy"){
        return 4000*days
    }
    else if(cartype.toLowerCase()=="midsize"){
        return 10000*days
    }
    else{
        return 20000*days
    }
}
console.log(calculate_rent(days,cartype))