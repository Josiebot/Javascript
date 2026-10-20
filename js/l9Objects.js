const myObj = {name: "Dave"};

const anotherObj = {
    alive: true,
    answser: 42, 
    hobbies : ["eat", "sleep", "code"], 
    beverage: {
        morning: "coffee", afternoon: "Iced Tea"

    },
    action: function(){
        // return "Hello World!";
        return `Time for ${this.beverage.morning}`;
    }
}

console.log(anotherObj.hobbies[1])
console.log(anotherObj["hobbies"])
console.log(anotherObj.action())

const vehicle = {
    wheels: 4, 
    engine: function(){
        return "vroom";
    }
}

// INHERITANCE
const truck = Object.create(vehicle);
truck.doors =2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());
const car= Object.create(vehicle);
car.doors =4
car.windows=4,
car.engine = function(){return "Whooosh!";

};

console.log(car.engine())

const tesla = Object.create(car);
console.log(tesla.wheels);
// console.log(tesla.engine());

tesla.engine = function(){
    return "shhhh....";
};

console.log(tesla.engine())


const band = {
    vocals: "Robert Plant", 
    guitar: "Jimmy Paige", 
    bass: "Paul Jones",
    drums: "John Bonham"
}

console.log(Object.keys(band));
console.log(Object.values(band));
console.log(band.hasOwnProperty("drum"));

for (let job in band){
    console.log(`on ${job} it's ${band[job]}`);
};


// delete band.drums;

// dESTRUCTURING OBJECTS

const {guitar: myVariable, bass: myBass} = band;
console.log(myVariable);
console.log(myBass);

const {guitar, bass, drums, vocals} = band;
console.log(guitar);
console.log(bass);

function sings({vocals}){return `${vocals} sings!`}
console.log(sings(band))