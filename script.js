function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };

  //your code here


	 let m=new Map([
	['I',1],
    ['IV',4],
    ['V',5],
    ['IX',9],
    ['X',10],
    ['XL',40],
    ['L',50],
    ['XC',90],
    ['C',100],
    ['CD',400],
    ['D',500],
    ['CM',900],
    ['M',1000]])

	 let order=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
	let ans=''
    let i=0
    while(num>0){
        if(num>=m.get(order[i])){
            ans=ans+order[i]
            num=num-m.get(order[i])
        }
        else{
            i++;
        }
    }
    return ans

	
	

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));






// do not edit below this line
module.exports = convertToRoman
