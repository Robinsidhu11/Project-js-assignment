let arr=[2,4,6,7,54,65,56,87,3,567,89]
console.log("OLD ARRAY IS "+arr)
for (let index in arr){
    arr[index]=arr[index]*2
}
console.log("NEW ARRAY IS "+arr)