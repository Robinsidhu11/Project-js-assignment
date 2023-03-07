let user_detail={
  "name":"Robin",
  "balance":0
}
function deposit(val){
  user_detail["balance"]=user_detail["balance"]+val
}
function withdraw(val){
  if (val>user_detail["balance"]){
    console.log("insufficient balance")
    return
  }
  console.log(val+" Widthrawn sucessfully")
  user_detail["balance"]=user_detail["balance"]-val
}