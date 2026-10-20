// JSON



const myObj = {
    name: "Jossy",
    alive: true,
    answser: 42, 
    hobbies : ["eat", "sleep", "code"], 
    
    hello: function(){
        return "Hello World!";
        
    }
}

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON)
// JSON never sends functions so hello does not return
console.log(typeof sendJSON)
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON)
console.log(receiveJSON.name)