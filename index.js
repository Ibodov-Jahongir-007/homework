//1
let name = 'John'
let surname = 'John'
let newSurname = surname.replaceAll('John','Doe')
let result = name + ' ' + newSurname
console.log(result);

//2 
let text = 'I have Apples'
let newText = text.replace('have Apples','like Oranges')  
console.log(newText);

//3 
let arr = [ 10.45 ,9.519 ,85.56 ,22 ,6.26 ,98.245 ,15 ,34.2 ]
let max = Math.ceil(Math.max(...arr))
let min = Math.round(Math.min(...arr))
console.log('Min',min);
console.log('Max',max);


//4
let num = 10.4568313123132
let newNum = num.toFixed(3)
let rounNum = num.toFixed(0)
let resultOne = parseFloat(rounNum)
console.log('Num to String -',newNum);
console.log('String to Num + Fixed(0)',resultOne);

console.log('Num length',newNum.length);

