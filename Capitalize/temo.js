let aname=prompt("Enter name")
let result=NaN
function convertname(aname){
    let firstletter=aname[0]
    firstletter>='a' && firstletter <='z' ? result=aname[0].toUpperCase():result=aname[0]
    aname=aname.slice(1)
    for (let chr of aname){
        result+=chr
    }
    console.log(result)
    
}
if (aname.length!=0){
    convertname(aname)
}

