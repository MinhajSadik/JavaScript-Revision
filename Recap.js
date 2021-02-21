// what is javascript description.
/*
javascript is a lightweight interpreted just-in-time compiled.
with fast class function. single threaded and client side.
node is javascript runtime envairoment.
javascript prothotype based use event loop and working asynchronously.
*/

// what is javascript
//1 javascript single threaded.
//2 javascript interpreted and just-in-time compiled.
//3 javascript is client side and node is js runtime envairoment.


//Revisit String , Array, Loop. when 
// When Loop I was Used
// for loop 
// for(var startIneseasion = 0; condition < 10; changeModifications = true) {
    
// }
var marks = [56, 45, 17, 45, 25, '50 Marks Panding'];
for (let i = 0; i < marks.length; i++){
    const element = marks[i];
    console.log(element);
};
console.log('outside');
console.log('outsideOfLoop');

// When Function I was Used

function add(number1, number2){
    var total = number1 + number2;
    return total;

}
const result = add(1, 2);
console.log(result);

console.log('outside');
console.log('outsideOfFunction');

const result1 = add(3, 4);
console.log(result1);


function getNumber(numbers){
    var larger = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
getNumber([39, 40, 41, 42])

var numbers = [32, 45, 100, 100, 100, 100, 100, 100, 100];
var output = getNumber(numbers);
console.log('output', output);

// JavaScript Five Gold
//1 Variable 
//2 Condition
//3 Loop
//4 Array
//5 Function
