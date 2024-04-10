//Task 2
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some python`);

//Task 3
let personName2: string = "Tanzeelah Siddiqui";
//in lowercase
console.log("lowercase:", personName. toLowerCase ());
//in uppercase
console.log("uppercase:", personName. toUpperCase ());
//title casetle
console.log("titlecase:", personName. replace(/\b\w/g,c=> c.toUpperCase()));

//Task 4
let quote: string = "A person who never made a mistake never tried anything new.";
let auther: string = "Albert Einstein";
let fullQuote = `${auther} once said, "${quote}"`;
console.log(fullQuote);

//Task 5
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

//Task 6
let personName: string = "\t\n Tanzeelah Siddiqui \n\t";
console.log("Original:", personName);
console.log("Stripped:", personName.trim());

// Task 7 and 8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Task 9
let favoriteNumber: Number = 7;
console.log(`My favourite number is ${favoriteNumber}.`);

//Task 10
auther: [Tanzeelah Siddiqui]
date: [Wednessday, Feburary 14 , 2024]
//task 9: printing my favourite number.
let favoriteNumber: Number = 7;
reveling my favourite number in message formate.
console.log(`My favourite number is ${favoriteNumber}.`);

//Task 11
var names = ["Ali", "Haseeb", "Wajahat", "Muzamil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//Task 12
let names: string [] = ["Ali", "Haseeb", "Wajahat", "Muzamil"];
let message: string = "Do you like to play football?"
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);

//Task 13
let transpotation: string[] = ["Honda motorcycle", "Audi", "Suzuki"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));

//Task 14
let guestArr: string [] = ["Ali", "Haseeb", "Wajahat", "Muzamil"];
guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));

//Task 15
let guestArr: string[] = ["Feeha", "Fatima", "Ashar", "Hamza"];
let canNotAttend: string = "Feeha"
console.log(canNotAttend + " " + "can not attened the dinner");
let newGuest: string = "Haseeb"
guestArr [guestArr2.indexOf(canNotAttend)] = newGuest
console.log(guestArr);
guestArr.map((items) => 

//Task 16
//Part 1
let guestArr: string[] = ["Feeha", "Fatima", "Ashar", "Hamza"];
let canNotAttend: string = "Fatima"
let newGuest: string = "Ali"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));

//Part 2
let guestBeg: string = "Muizz"
guestArr.unshift(guestBeg);
console.log(guestArr);

//Part 3
let middleGuest: string = "Anas"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr);

//Part 4 append
guestArr.push("Zeeshan")
console.log(guestArr);

//Part 5
guestArr.map((items) =>
console.log(`Dear ${items}, you are invited in the more category on dinner `));

//Task 17
initial list of guests
let guests: string[] = ["Ali", "Bilal", "Carry", "Dawood", "Hamza"];

//informing that only two people invited
console.log("Due to limited space, only two people invited for dinner.");

//Removing guests until only two names remain
while (guests.length >2) {
   const removedGuest = guests.pop(); //removing the last guest from the list
   console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
}

let guests2: string[] = ["Ali", "Bilal"];
//Printing invitations to the remaing two guests
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited  to dinner.`);
});

//Removing the last two names from the list
guests.pop();
guests.pop();

//Printing the final list to confirm it's empty
console.log("Final guest list:", guests);

//Task 18
//store location in array
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];

//print the array in its original order
console.log("original order:", placesToVisit);

//print the array in its alphabetical order without modifying the actual list
console.log("Alphabetical order:",[...placesToVisit].sort());

//show that the array is still in its original order
console.log("Original orer after sorting:", placesToVisit);

//print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

//show that the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

//Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

//Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

//sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

//sort the array in reverse  alphabetical order
placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

//Task 19
let invitations: string[] = ["Ali", "bilal"]
let count_invitation:  number = invitations.length
console.log(`${count_invitation} people will come to the dinner`)

//Task 20 
let country: string[] = ["Pakistan", "India", "NewYork", "Japan", "China"]
console.log(country);

//Task 21
let person: {name: string, fname: string, age: number} = {name: "Tanzeelah", fname: "Female", age: 19}
console.log(person)

//Task 22
const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sturday"]
console.log(days{7})
console.log(days[6])

//Task 23
let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda city'? predict true")
console.log(car != 'honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU')

console.log("is car.length == 3? predict true")
console.log(car.length == 3)

console.log("is car.length != 10? predict true")
console.log(car.length != 10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict false")
console.log(72 >= 83)

console.log("is car == 'subaru' && car.length == 6? predict true")
console.log(car == 'subaru' && car.length == 6)

//Task 24
let name_1 : string = "Tanzeelah"
let name_2 : string = "Tanzeelah Siddiqui"
let name_3 : string = "Miss Tanzeelah Siddiqui"
if (name_1 == name_3){
    console.log("names are equal")
}else {
    console.log("names are not equal")
}
if (name_1 != name_2){
    console.log("names are equal")
} else {
    console.log("names are not equal")
}

let age_1 : number = 18
let age_2 : number = 22
if (age_1 == 18){
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2){
    console.log("younger")
}
if(age_2 >= age_1){
    console.log("older")
}
if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}
if(age_1 == 18 || age_2 != 22){
    console.log("person is eligible not for vote")
}
let country : string[] = ["Pakistan", "India", "Japan", "China"]
if (country.includes("Pakistan")){
    console.log("Pakistan is in country list")
}
if(!country.includes("America")){
    console.log("America is not include in an array")
}

//Task 25
let alien_color1 : string = "green"
if(alien_color1 == "green"){
    console.log("you are earn 5 points")
}
let alien_color2 : string = "red"
if(alien_color2 == "green"){
    console.log("no output")
}

//Task 26
let alien_color = "green"
if(alien_color == "green"){
    console.log("player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points")
}

let alien_color3 = "red"
if(alien_color3 == "green"){
    console.log("player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points")
}

//Task 27
let alien_color: string = "Red"
if (alien_color == "green"){
    console.log("5 points")
}else if (alien_color == "yellow"){
    console.log("10 points")
}else{
    console.log("15 points")
}

//Task 28...........................2, 4, 13, 20, 65, older
let age : number = 100
if (age < 2){
    console.log("you are a baby")
}else if (age < 4){
    console.log("you are a toddler")
}else if (age < 13){
    console.log("you are a kid")
}else if (age < 20){
    console.log("you are a teenager")
}else if (age < 65){
    console.log("you are a adult")
}else {
    console.log("you are a older")
}

//Task 29 you realy like bananas
let favourite_fruits : string[] = ["Kivi", "Orange", "Apples"]
if(favourite_fruits.indexOf("Kivi")){
    console.log("Kivi")
}
if(favourite_fruits.indexOf("Apples")){
    console.log("Apples")
}
if(favourite_fruits.indexOf("Orange")){
    console.log("Orange")
}
if(favourite_fruits.indexOf("Berry")){
     console.log("you realy like bananas")
}
if(favourite_fruits.indexOf("Peech")){
     console.log("you realy like bananas")
}

//Task 30
let users : string[] = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"]
for(let user of users){
    if(user === "admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${user}, thank you for loging in again`)
    }
}

//Task 31
let users : string[] = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"]
if (users.length ===0){
    console.log("We need to find some users!")
}else{
    for(let user of users){
        if(user === "admin"){
            console.log("Hello Admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${users}, thank you for loging in again`)
        }
    }
}
users=[]
if (users.length === 0){
    console.log("We need to find some users!")
}

//Task 32
let current_users : string[] = ["Admin", "Eric", "Haseeb", "Ali", "Fatima"]
let new_users : string[] = ["Admin", "Fatima", "Haseeb", "Aliza", "Noor"]
let current_users_lower : string[] = current_users.map(user => user.toLowerCase())
for(let new_user of new_users){
    if(current_users_lower.indexOf (new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken`)
    }else{
        console.log(`yes ${new_user}, is still in available list`)
    }
}

//Task 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for (let number of numbers){
    if (number === 1){
        console.log(`${number}st`) //1st
    }else if (number === 2){
        console.log(`${number}nd`) //2nd
    }else if (number === 3){
        console.log(`${number}rd`) //3rd
    }else {
        console.log(`${number}th`) //4th , 5th , 6th , 7th , 8th , 9th
    }
}

//Task 34
let favourite_pizza : string[] = ["Pepperoni", "chicken", "Veg"]
for (let pizza of favourite_pizza){
    console.log(pizza)
}
console.log("\n")
for (let pizza of favourite_pizza){
    console.log(`I really like ${pizza} pizza!`)
}
console.log("\n I realy love pizza!")

//Task 35
let animals : string[] = ["Cat", "Loin", "Dog"]
for (let animal of animals){
    console.log(animal)
}
console.log("\n")
for(let animal of animals){
    console.log(`A ${animal} has a tail`)
}
console.log("\n all of these are great pets! but I love cats more");

//Task 36
function makeShirt(size: string, text: string): void{
    console.log(`you have older a ${size} shirt that says ${text}`)
    
}
makeShirt(`large`,`"I love typescript"`)
makeShirt(`medium`,`"I need a big shirt"`)

//Task 37
function makeShirt(size: string = 'large', text: string = 'Ilove typescript'): void{
    console.log(`you have older a ${size} shirt that says ${text}`)
}
//makeshirt();
//makeShirt('medium')
//differnt message
makeShirt(`small`, `I need a big shirt to wear`)

//Task 38
function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}
describe_city(`Karachi`)//defult sentence
describe_city(`France`, `Europe`)
describe_city(`Lahore`, `Punjab`)

//Task 39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}
let c1 = cityCountry('Lahore', 'Pakistan')
let c2 = cityCountry('Tokyo', 'Japan')
let c3 = cityCountry('Paris', 'France')
console.log(c1)
console.log(c2)
console.log(c3)

//Task 40
function makeAlbum(artist: string, title: string): {artist: string; title: string} {
    const dictionaries ={
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let Album1 = makeAlbum("Ali","Light")
console.log(Album1)
let Album2 = makeAlbum("Bilal","Red wave")
console.log(Album2)
let Album3 = makeAlbum("Hamza","seenbreez")
console.log(Album3)

//Task 41
function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician: string[] = ["Ali", "Hamza", "Bilal",];
show_magicians(magician);

//Task 42
function make_great(magicians: string[]): void{
     for (let i = 0; i < magicians.length; i++){ //i stand for index string
         magicians[i]= magicians[i] + ` the great`
      }
}
const magicians2: string[] = ["Usman", "Haseeb", "Wajhat"];
make_great(magicians2);
show_magicians(magicians2);
console.log(magicians2);

//Task 43
function make_great2(magicians: string[]): string[] {
      const greatMagicians: string[]=[];
      for(let i = 0; i < magicians.length; i++){
          greatMagicians.push(magicians[1] + ` the great`);
      }
      return greatMagicians;
}
const magicians3: string[] = ["usman", "haseeb", "wajahat"];
const greatMagicians2: string[] = make_great2(magicians3);
make_great2(magicians3);
show_magicians(greatMagicians2);
console.log(greatMagicians2);

//Task 44
function sandwich(...items: string[]): void{
    console.log("sandwich order:")
    for (let i = 0; i < items.length; i++){
        console.log(`- ${items[i]}`)
    }
}
console.log("enjoy your sandwich Hamza");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');

//Task 45
type car ={
    manufacture: string
    modle: string
    [key: string]: any;
}
function createCar(manufacture: string, modle: string, optional: Record<string,any>): car {
    return{
        manufacture,
        modle,
        ...optional
    }
}
const mycar: car = createCar("Toyota", "Corolla",{color: "silver", year: "2024"});
console.log(mycar);