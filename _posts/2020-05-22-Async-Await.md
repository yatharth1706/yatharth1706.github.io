---
layout: post
title: Async & Await
description: Will discuss what is Async & Await and how to use them in JavaScript
permalink: /js-asycnandawait
imageurl: /assets/async.jpeg
---


There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use

### Async Functions

Async keyword can be placed before the function definition. Example:
```js
async function f() {
  return 1;
}
```

The async keyword before above function is implying that the above function will always return a promise. All consumer methods of promise like ```` then() ``` , ``` catch() ```, etc. can be used on above function. Example:
```js
async function f() {
  return 1;
}

f().then(alert); // 1
```


**Work in Progress**