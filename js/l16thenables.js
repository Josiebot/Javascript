// // fetch API requires a discussion of...
// // callbacks, promises, thenables and Async/Await
// // promises = pending, fulfilled, and rejected
// // .then() in JavaScript means “when this Promise succeeds, do this next.”
// // It allows you to specify what should happen when an asynchronous operation, such as fetching data from an API, produces a successful result.
// // Let's use your Fetch API example to understand it.


// // FetchAPI

const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);
// pending

// // console.log(users);
// ///////////////////////////////////////////////////
// // fetch("https://jsonplaceholder.typicode.com/users").
// // then(response => {
// //     return response.json();
// //     // console.log(response)
    
// // })

// // .then(data =>{
// //     //  console.log(data)
// //     data.forEach(user => {
// //         console.log(user)

// //     });
// // })
// //////////////////////////////////////////////////
// const users = fetch("https://jsonplaceholder.typicode.com/users").
// then(response => {
//     return response.json();
//     // console.log(response)
    
// })

// .then(data =>{
//     //  console.log(data)
//     data.forEach(user => {
//         console.log(user)

//     });
// return data;
// })

// .then(data =>{
//     console.log(data[10])
// })




// // /////////////////////////////////////////////////
// // GET FIRST User/username

// // fetch("https://jsonplaceholder.typicode.com/users")
// //     .then(response => response.json())
// //     .then(data => {
// //         // const user = data.find(user => user.id === 2);
// //         // const user = data.find(user => username ="Bret");
// //         const user = data.find(user => name ="Graham");
// //         console.log(user)

// //         // console.log(data[0]);
// //         console.log(data[0].name);
// //         console.log(data[0].email);
// //     });
// /////////////////////////////////////////////////
// // This reads as Go to the URL and request the list of users.

// // When the server responds, read the response.
// // Convert the response body from JSON into JavaScript data.
// // Go through the list of users one by one.
// // Print each user in the console.
// // pending

// // console.log(users);




// // then() attaches a callback to a Promise.

// // response is the parameter receiving the HTTP response object.
// // response.json() reads the response body and parses its JSON into JavaScript data.
// // return passes the resulting Promise to the next step in the chain.































// THENABLES/
///////////////////////////////////////////////////////////

const myPromise = new Promise((resolve, reject) =>{
    const error=false;
    if (!error){
        resolve("Yes! Resolved the promise!");
        
    } else{reject("No! Rejected the promise.");

    }
});

// ANONYMOUS FUNCTION
// // const greet = function() {
// //     console.log("Hello!");
// // };

// console.log(myPromise);

// myPromise.then(value => {
//     return value+1;
// ;})
// .then (newValue =>{
//      console.log(newValue)
// })
// .catch(err =>{
//     console.error(err);
// })
/////////////////////////////////////////////

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!");
    }, 3000)

} );

myNextPromise.then(value=>{
    console.log(value);

})

myPromise.then(value=>{
    console.log(value)
})
