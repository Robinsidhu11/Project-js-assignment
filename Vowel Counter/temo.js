let aname=prompt("Enter name")
let result=0
function count(aname){
    
    for (let chr of aname){
        if((chr=='a') || (chr=='A') || (chr=='e') || (chr=='E') || (chr=='i') || (chr=='I') || (chr=='o') || (chr=='O') || (chr=='u') || (chr=='U')){
            result++
        }
    }
    return result   
}
console.log(count(aname))


