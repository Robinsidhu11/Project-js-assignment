
let arr=[1,5,3,2,7,8,15,60,78,55,343,56,51,57]
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        continue
    }
    if(arr[i]%3==0){
        console.log(arr[i])
    }
}