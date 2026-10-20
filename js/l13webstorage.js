// window.alert("ok!")
// alert("ok!");
// Location
// window.alert(window.location)
// alert(location);

// localstorage
const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Jossy",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }

} 

// myObject.logName()

// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore", myObject)); 
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore", myArray)); 
console.log(mySessionData);
console.log(typeof mySessionData);
// web storage only stores string data

// Local Storage
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore;")
// localStorage.clear();
// con+\st key = localStorage.key(0);
const length = localStorage.length;
console.log(length);
const value = localStorage.Value;
console.log(value);

const localData = JSON.parse(localStorage.getItem("myLocalStore", myArray)); 
// console.log(localData);
// console.log(typeof localData);

// localStorage is persistent data\



// ////////////////////////////////
// In JavaScript, localStorage and sessionStorage both allow you to store data in the browser so that you can retrieve it later. The main difference is how long the data remains available.
// 1. The main difference
// Feature	localStorage	sessionStorage
// How long does data last?	Until you remove it or the browser clears it	Until the browser tab's page session ends
// Does it survive a page refresh?	Yes	Yes
// Does it survive closing and reopening the browser?	Usually yes	No, the original page session ends when its tab is closed
// Shared between tabs?	Yes, for the same origin	No, each tab has its own separate session storage
// Typical use	Theme preference, saved settings	Temporary form progress, tab-specific data
// Origin means the same website origin: the combination of protocol, domain and port. For example, https://example.com and http://example.com have different origins.
// 2. Example of localStorage
// Imagine you want your website to remember a user's name even after they close the browser.
// localStorage.setItem("username", "Josephine");


// Let's break it down:
// - localStorage is the browser's persistent storage.
// - setItem() saves a value.
// - "username" is the key used to identify the data.
// - "Josephine" is the value being stored.
// To retrieve the value:
// const username = localStorage.getItem("username");

// console.log(username);


// Output:
// Josephine


// Even after refreshing the page or reopening the browser, the value will normally remain.
// To delete that particular value:
// localStorage.removeItem("username");


// To delete all local storage for the current origin:
// localStorage.clear();


// 3. Example of sessionStorage
// Now imagine a user is completing a form and you want to keep a temporary value while they work in the current tab.
// sessionStorage.setItem("username", "Josephine");


// Retrieve it in the same page session:
// const username = sessionStorage.getItem("username");

// console.log(username);


// Output:
// Josephine


// If the user refreshes the page, the value remains. However, when the tab is closed, its session storage is cleared as that page session ends.
// To remove a particular value:
// sessionStorage.removeItem("username");


// 4. Try it yourself
// The following example lets you save a value using either storage method and retrieve it.
// Browser storage practice
// Choose a storage type, then see the JavaScript you would use.

// localStorage — persists after closing the tab

// sessionStorage — lasts for the page session

// Key

// Value

// YOUR JAVASCRIPT
// localStorage.setItem("username", "Josephine");

// const result = localStorage.getItem("username");
// console.log(result);

//  Copy code
// This practice example generates code for you to copy; it does not save data to your actual browser storage.
// 5. Important: storage saves strings
// Both storage methods store values as strings.
// For example:
// localStorage.setItem("age", 25);

// console.log(localStorage.getItem("age"));


// Although you supplied the number 25, it is retrieved as the string "25".
// If you want to retrieve it as a number:
// const age = Number(localStorage.getItem("age"));

// console.log(age + 1); // 26


// For objects and arrays, you can use JSON.stringify() when saving and JSON.parse() when retrieving.
// const user = { name: "Josephine", age: 25 };

// localStorage.setItem("user", JSON.stringify(user));

// const savedUser = JSON.parse(localStorage.getItem("user"));

// console.log(savedUser.name); // Josephine


// 6. When should you use each one?
// - Use localStorage when you want information to persist, such as a user's theme preference or language setting.
// - Use sessionStorage when you want information to remain available during a particular tab's page session, such as temporary progress through a multi-step form.
// Neither is suitable for storing sensitive information such as passwords or authentication secrets without an appropriate security design.
// Test yourself
// Question: A user saves their preferred dark theme. They close the browser and return tomorrow. Which storage would generally be more appropriate for remembering that preference?

// sessionStorage


// localStorage


// Neither can store strings



// The easiest way to remember it: local storage is for data you want to keep; session storage is for data you want to keep temporarily within a page session.