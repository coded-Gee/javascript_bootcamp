console.log('ARRAYS')

const  myStudents = ['Miriam', 'Delight', 'Progress', 'petra', 'Dappa', 'Tems', 'Caleb', 'Felix', 'Henry', 'Cruz', 'Paul', 'Fidelis', 'Camilus', 'Victory', 'Grace', 'Amas'];
console.log(myStudents);

var firstName = myStudents[0];
console.log(firstName)

var myName = myStudents[14];
console.log(myName) 

myStudents[7] = 'Christian';
console.log(myStudents)

myStudents[14] = 'Grace';
console.log(myStudents)

let numOfStudents = myStudents.length;
console.log(numOfStudents)

//Exercise 1
//1
const myShopping = ['Milk', 'Bread', 'Apple'];
console.log(myShopping);
//2
let numOfItems = myShopping.length;
console.log(numOfStudents)
//3
myShopping[1] = 'Bananas';
console.log(myShopping)

//ARRAY METHODS
//Adding Elements
myStudents.push('Grace'); //Adding element to the last of the array
console.log(myStudents);

myStudents.unshift('Wilson'); //Adding element to the start of an array
console.log(myStudents)

myStudents.shift()
console.log(myStudents); //Removing the first element in an array

myStudents.pop()
console.log(myStudents); //Removing the last element in an array


myStudents.splice(11,1) //Removes an element from an array
console.log(myStudents)

myStudents.splice(14, 1, 'Queen'); //Replaces an element
console.log(myStudents)


const graceIndex = myStudents.indexOf('Grace')
console.log(graceIndex)

const arr = ['Wilson', 'Daniel', 'Wilson', 'Joe', 'Raymond', 'Wilson']
const wilsonIndex = arr.filter((name) => name === 'Wilson');
console.log(wilsonIndex);

const sortedArr = myStudents.sort()
console.log(sortedArr)

myStudents.reverse()
console.log(myStudents)

//Exercise 2
//1
const shoppingLists = [];
//2
 shoppingLists.push('Milk', 'Bread', 'Apples')
console.log(shoppingLists)
//3
shoppingLists.splice(1,1,'Bananas', 'Eggs')
console.log(shoppingLists)
//4
const lastItem = shoppingLists.pop()
console.log(lastItem)
console.log(shoppingLists)
//5
shoppingLists.sort()
console.log(shoppingLists)
//6
const milkIndex = shoppingLists.indexOf('Milk')
console.log(milkIndex)
//7
shoppingLists.splice(1,0, 'carrot', 'lettuce')
console.log(shoppingLists)
//8
const newList = ['Juice', 'Pop']
//9
const concatList1 = shoppingLists.concat(newList)
console.log(concatList1)
const concatList2 = concatList1.concat(newList)
console.log(concatList2)
//10
const lastIndex = concatList2.length -1;
console.log(lastIndex)

//MULTIDIMENTIONAL ARRAYS
const myArr =  [
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]],
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,'w',4]],
    [[1,2,3,4], [1,2,3,4], [1,'R',3,4], [1,2,3,4]]
];

console.log(myArr[1] [3] [2])
console.log(myArr[2] [2] [1])


//OBJECTS IN JAVASCRIPT
const grace = {
    firstName: 'grace',
    lastName: 'Anabs',
    age: 21,
    gender: 'Female',
    complextion: 'Light skinned',
    height: '5.2',
    weight: '60'
}

const myHeight = grace.height;//Dot Notation
console.log(myHeight)  

const myWeight = grace['Weight']
console.log(myWeight)

grace['weight'] = '60'
console.log(grace)

grace ['lastName'] = 'Grande'
grace.middleName = 'Anabs'

console.log(grace)
 
//EXERCISE 4
//1
const myCar = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'Blue',
    bodyStyle: 'Hatchbacks',
    carYear: '2021'
};

//2
let carColor = "color";

myCar[carColor] = 'Black';

console.log(myCar)
//3
carColor = 'forsale';
myCar[carColor] = false;
console.log(myCar)

//4
const make = myCar.make;
const model = myCar['model']
console.log(`Make: ${make}`)
console.log(`Model: ${model}`)

//5
const forSale = myCar['forsale']
console.log(`Is car for sale?: ${forSale}`)

//WORKING WITH OBJECTS AND ARRAYS
//OBJECTS IN OBJECTS
const student = {
    fullName: 'Peter Obi',
    jambReg: '40263264HB',
    matNum: 'u2014/5575001',
    bio: {
        age: '32',
        gender: 'M',
        dob: '12/2/1990',
        stateOfOrigin: 'Anambra',
        lga: 'Ni ikoka',
        healthStatus: {
            bloodGroup: 'o+',
            genotype: 'AA',
            mantus: false,
        }
    },
    levels: ['LV100', 'LV200', 'LV300', 'LV400'],
    currentLevel: 'LV300',
    courses: [
        {
            "YR1": {
                sem1: ['Mth110.1', 'GES100.1', 'PHY101.1'],
                sem2: ['Mth114.2', 'GES104.2', 'PHY102.2']
            },
            "YR2": {
                sem1: [],
                sem2: []
            }       
         }
    ]
}
const myGenotype = student.bio['healthStatus'] ['genotype']
console.log(myGenotype)

console.log(student.currentLevel)

const ges104 = student.courses[0].YR1['sem2'][1]
console.log(ges104)

//EXERCISE 5
//1
let people = {
    friends:[],
}
//2
const pupils1 = {
    firstName: 'Becky',
    lastName: 'John',
    idValue: '001'
}
const pupils2 = {
    firstName: 'Precious',
    lastName: 'Okeke',
    idValue: '002'
}
const pupils3 = {
    firstName: 'Favour',
    lastName: 'Amadi',
    idValue: '003'
}
//3
people.friends.push(pupils1,pupils2,pupils3)
//4
console.log(people)

//OPERATORS
console.log('1' + '1')
console.log(1 + 1)
console.log(1 + '1')

const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const raise = 7 ** 3;
const modulus = 7 % 3;

//COMPARISON OPERATORS
console.log(7 > 3) //true
console.log(7 < 3) //false
console.log(7 >= 3) //true
console.log(7 <= 3) //false
console.log(7 === 3) //false
console.log('wilson'=== 'wilson') //false
console.log(7 !== 3) //true

//LOGICAL OPERATORS
//AND, OR
const x = 10; const y = 20;

const myAnswer = 10 < 20 || 'Wilson' === 'Wilson';
console.log(`My Answer: ${myAnswer}`)

const myAnswer2 = 10 < 20 && 'Wilson' === 'Wilson';
console.log(`My Answer: ${myAnswer}`)








