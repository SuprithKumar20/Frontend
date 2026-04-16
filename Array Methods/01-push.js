//* 01-push()

//: The push() method adds one or more elements to the end of an array and returns the new length of the array.

var res=[]

res.push(1)
res.push("dcs")
res.push(22)
res.push({dept:"Aiml",College:"CEC"})
console.log(res)

console.log(res.length)

res.push([1,2,3,4,5])
console.log(res)
console.log(res.length)