// exercise 1

let user = {
    name: 'John',
    years: 30,
}

let {name, years} = user;

console.log(user)


//exercise 2

const world = 'world';

let visitor = 'Visitor comes to the world';


//exercise 3

let phrase = 'Hello'

if(true) {
    let user = 'John';
    function sayHi() {
        alert(`${phrase}, ${user}`)
    }
}

console.log(sayHi)
//Comment: There is an alert when I call the function sayHi(),
//It is always trying to refresh as there is no command to stop or break the alert function.



//exercise 4

let user2 = {
    name: 'John',
    surname: 'Smith',
}

 
let pizza = 'pizza is ok'
pizza = pizza.replace('alright it is ok')
console.log(pizza)

//This pizza example should be working with changing the name.
//But it is not working, I couldn't figure it out.
user2.name = 'John',
console.log(user2.name)
user2.name = user2.name.replace('Pete')
console.log(user2.name)

delete user2.name;
 
console.log(user2)


//exercise 5

//Name is not updated as cont variables can't be updated or re-declared.
const user3 ={
    name: 'John'
}

console.log(user3)

user3.name = 'Pete'


//exercise 6

let salaries ={
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}

sum = (salaries.Fred + salaries.Ted + salaries.Ghaith)

console.log(sum)

if( salaries = ''){
    sum = 0
}

console.log(sum)


//exercise 7

var a = 3
var b = 0

let result= (a + b < 4) ? 'below' : 'over';

console.log(result)


//exercise 8

let login = 'Employee'

let message = (login == 'Employee') ? 'Hello' : 
              (login == 'Director') ? 'Greetings' : 
              (login == '') ? 'No Login' :
              ''



console.log(message)







