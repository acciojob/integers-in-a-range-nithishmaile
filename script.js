// write your code here
function range(start,end){
	let newArray=[]
	for(let i=start+!;i<end;i++){
		newArray.push(i)
	}
	return newArray
}


// do not change the code below
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end));
