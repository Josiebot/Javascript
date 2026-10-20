// Async/Await

// ABSTRACTINTOFUNCTION

const getDataFromForm = () =>
{
    const requestObj = {
        firstName: "Bruce", 
        lastName: "Lee",
        categories: ["nerdy"]
    };

    return requestObj;
}

const buildRequestUrl = (requestData) => {
    const params = new URLSearchParams({
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        limitTo: requestData.categories.join(",")
    });

    return `https://api.icndb.com/jokes/random?${params}`

    // return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`
}


const requestJoke = async (requestUrl) =>{
    const response = await fetch (requestUrl);
    const jsonResponse = await response.json();
    const joke =jsonResponse.value.joke;

    console.log(jsonResponse.value.joke)

    postJokeToPage(joke);


}

const postJokeToPage = (joke) =>{
    console.log(joke);
}


// requestJoke("Bruce", "Lee");

// Procedural workflow function

const processJokesRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
 }

processJokesRequest()










// //////////////////////////////////////////
// ACCEPY = JSON
// const requestJoke = async (firstName, lastName) =>{
//     const response = await fetch (`https://api.icndb.com/jokes/random?firstname=${firstName}&lastName=${lastName}`&limitTo =[nerdy]);

//     const jsonResponse = await response.json()
//     // console.log(jsonResponse)
//     console.log(jsonResponse.value.joke)

// }


// requestJoke("Clint", "Eastwood");

/////////////////////////////////////////////////////////

// const requestJoke = async (firstName, lastName) => {
//     try {
//         const url =
//             `https://api.icndb.com/jokes/random?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`;

//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }

//         const jsonResponse = await response.json();

//         console.log(jsonResponse.value.joke);

//     } catch (error) {
//         console.error("Unable to fetch the joke:", error);
//     }
// };

// requestJoke("Clint", "Eastwood");

////////////////////////////////////////////////////////

// const jokeObject = {
// id: "JossyzA5MJYDY0Dd",
// joke: "Hi Caltim. I am practicing for a bug-eating contest and I've got butterflies in my stomach."

// }

// const postData = async (jokeObj) =>{

//     const response = await fetch ("https://httpbin.org/post", {
//         method: "POST", 
//         headers: {
//         "Content-Type": "application/json"}, 

//         body: JSON.stringify(jokeObject)

    
//     })

//     const jsonResponse = await response.json()
//     console.log(jsonResponse)
//     console.log(jsonResponse.headers)

// }

// postData();
// postData(jokeObject);
// // // ACCEPY = JSON

// const getDadJoke = async ()=> {

//     const response = await fetch ("https://icanhazdadjoke.com/", {method: "GET", headers: {
//         Accept: "application/json"

//     }
//     });

//     // const jsonJokeData = await response.json();
//     const jsonJokeData = await response.json();

//     // console.log(jsonJokeData);
//     console.log(jsonJokeData.joke);
//     console.log(jsonJokeData.id);

// }
    
// getDadJoke();

//////////////////////////////////////////////
// ACCEPT  TEXT/////////////////////////////////////

// const getDadJoke = async ()=> {

//     const response = await fetch ("https://icanhazdadjoke.com/", {method: "GET", 
//         headers: {
//         // Accept: "application/json"
//         Accept: "text/plain"
// Authorization: "Bearer YOUR_TOKEN",
        // "Accept-Language": "en"
//         }
//     });

//     // const jsonJokeData = await response.json();
//     const textJokeData = await response.text();

//     // console.log(jsonJokeData);
//     console.log(textJokeData);
//     // console.log(textJokeData);

// }
    
// getDadJoke();


////////////////////////////////////////////////
// 2nd EXAMPLE/////////////////////////////////
// getAllUserEmails()

// const getAllUserEmails = async () =>{
    
//      const response = await fetch ("https://jsonplaceholder.typicode.com/users");

//     const jsonUserData = await response.json()
//     // console.log(jsonUserData)
//     // return jsonUserData;/
//     const userEmailArray = jsonUserData.map(user => {
//         // return user.id;
//         // return user.username;
//         // return user;
//         return user.name;
        
//     });

//     //  console.log(userEmailArray)
//      postToWebPage (userEmailArray)
// }
// const postToWebPage = (data) =>{
//     // This means its going to receive data as a parameter

//     console.log(data);
// }

// getAllUserEmails()





///////////////////////////////////////////////////////
// EXAMPLE 2
// const getAllUserEmails = async () =>{
    
//      const response = await fetch ("https://jsonplaceholder.typicode.com/users");

//     const jsonUserData = await response.json()
//     // console.log(jsonUserData)
//     // return jsonUserData;/
//     const userEmailArray = jsonUserData.map(user => {
//         // return user.id;
//         return user.username;
        
//     });

//      console.log(userEmailArray)
// }
// getAllUserEmails()

/////////////////////////////////////////////////




























// ///////////////////////////////////////////////////////////


// const myUsers = {
//     userList: []
// }

// // 2 Ways of doing
// // async function myCoolFunction() {}
// // const myCoolFunction = async() =>{}

//  const myCoolFunc = async() =>{
//     const response = await fetch ("https://jsonplaceholder.typicode.com/users");

//     const jsonUserData = await response.json()

   
//     // console.log(jsonUserData)

//     return jsonUserData;

//  }   

// myCoolFunc()

// const anotherFunc = async ()=>{
//    const data =  await myCoolFunc();

//     // console.log(data)

//     myUsers.userList = data
//     // console.log(myUsers.userList)
//     return myUsers.userList
    
// }

// anotherFunc()

// // console.log(myUsers.userList)


// const userList = async () =>{
//   const newList =   await anotherFunc();
//   console.log(newList[8])
// }

// userList()