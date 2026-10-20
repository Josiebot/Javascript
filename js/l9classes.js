
// FACTORY FUNCTION OF CREATING AN OBJECT IN JS PRIVATE()
// class Pizza{
//     crust = "original";
//     #sauce = "traditional";
//     #size;

//     constructor(pizzaSize){
//         this.#size = pizzaSize;
//     }

//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }

//     hereYouGo(){
//         console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`)

//     }
    
// }

// const myPizza = new Pizza("large")
// // myPizza.setCrust("hard")
// myPizza.hereYouGo()
// console.log(myPizza.getCrust())
// console.log(myPizza.original)
// console.log(myPizza.#size);


// ACESSING A PRIVATE CLASS. 
// Great question! Since #size is a private property, you cannot access it directly from outside the Pizza class. However, you can create a getter method that allows you to read its value safely.

// METHOD 1 (Add a getter method for #size
// Add this method inside your Pizza class:)
//  getSize() {
//     return this.#size;
// }

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getSize() {
        return this.#size;
    }

    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}

const myPizza = new Pizza("large");

myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.getSize());








// function pizzaFactory (pizzaSize){
//     const crust ="original";
//     const size = pizzaSize;

//     return {
//         bake: () => console.log(`baking a ${size}  ${crust} pizza.`)
//     };
//     }

// const myPizza = pizzaFactory("small");
// myPizza.bake();




// PRIVATE PROPERTIES
// class Pizza{
//     constructor(pizzaSize){
//         this._size = pizzaSize;
//         this._crust = "original";
//             }
//     getCrust(){
//         return this._crust;
//     }

//     setCrust(pizzaCrust){
//         this._crust=pizzaCrust;
//     }
    

// }



//////////////CHILD CLASS
// const mySpecialty = new Specialty("medium", "sausage");
// mySpecialty.slice();
// class Pizza{
//     constructor(pizzaSize){
//         this.size = pizzaSize;
//         this.crust = "original";
//             }
//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }
//     getTopping(){
//         return this.topping;
//     }

//     setTopping(pizzaToppings){
//         this.crust=pizzaToppings;
//     }

// }

// class Specialty extends Pizza{
//     constructor(pizzaSize, pizzaToppings){
//         super(pizzaSize);
//         this.type = "The Works";
//         this.topping = pizzaToppings;
//     }
//     slice(){
//         console.log(`${this.type} ${this.size} ${this.topping} pizza has 8 slices`);
//     }
// }

// const mySpecialty = new Specialty("medium", "sausage");
// mySpecialty.slice();

////////////////////////////////////////////////

// const myPizza = new Pizza("Pepperoni", "medium");

// myPizza.setCrust("thin");
// // myPizza.type= "Supreme";
// myPizza.setToppings("pineapple");
// myPizza.setToppings("sausage");

// console.log(myPizza.getCrust())
// console.log(myPizza.getToppings())
// myPizza.bake()

// class Pizza{
//     constructor(pizzaType, size){
//         this.type = pizzaType;
//         // this.size = "medium";
//         this.size = size;
//         this.crust = "original";
//         this.toppings = []

//     }
//     getCrust(){
//         return this.crust;
//     }

//     setCrust(pizzaCrust){
//         this.crust=pizzaCrust;
//     }

//     getToppings(){
//         return this.toppings;
//     }

//     setToppings(topping){
//         this.toppings.push(topping);
//     }
// // // What are getCrust() and setCrust() for?
// // - getCrust() retrieves the current crust.
// // - setCrust(pizzaCrust) changes the current crust.

//     bake(){
//         console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza with ${this.toppings} toppings`);
//     }
// }

// const myPizza = new Pizza("Pepperoni", "medium");

// myPizza.setCrust("thin");
// // myPizza.type= "Supreme";
// myPizza.setToppings("pineapple");
// myPizza.setToppings("sausage");

// console.log(myPizza.getCrust())
// console.log(myPizza.getToppings())
// myPizza.bake()



// Build a javascript class to accept a parameter