let n=prompt("enter rows ")
n=Number.parseInt(n)
for (let i=1;i<=n;i++){
    let ans=""
    for(let j=1;j<=n-i+1;j++){
        ans=ans+"*"
    }
    console.log(ans)

}