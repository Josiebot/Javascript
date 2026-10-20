// #Higher Order Functions takes one or more functions as an argument(paraemeter) and returns a function as the result

import {posts} from "./posts.js";

// posts.forEach((post) =>{
//     console.log(post)
// })

// “For each item in the posts array, call that item post and print it to the console.”

for (let i=0; i<=posts.length; i++){
    console.log(posts[i])
}

console.clear();

// FILTERING

const filteredPosts = posts.filter(post =>{
    // return post.id >=41 && post.id <= 50;
    return post.userId===2
})

console.log(filteredPosts);

// ALTERNATIVE

// const filteredPosts = [];

// for (let i = 0; i < posts.length; i++) {
//     if (posts[i].userId === 1) {
//         filteredPosts.push(posts[i]);
//     }
// }

// console.log(filteredPosts);

// posts[i] accesses the current object using an index.



// if checks the condition.
// .push() adds matching objects to the new array.
// filter() handles this process for you automatically.

// MAP

const mappedPosts = filteredPosts.map(posts =>{
    return posts.id*10;
});

console.log(mappedPosts)


// REDUCEDPOSTS

const reducedPostsValue = mappedPosts.reduce((sum, posts) =>{
    return sum+posts;
});

console.log(reducedPostsValue)