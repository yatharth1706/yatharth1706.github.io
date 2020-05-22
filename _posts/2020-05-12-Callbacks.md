---
layout: post
title: Callbacks in JavaScript
description: Introduction to what are callbacks in JavaScript and how to implement them in JS
permalink: /js-callbacks
imageurl: /assets/callbacks.png
---

### Introduction: Callbacks

Callback functions are used to handle asynchronous operations. Asynchronous operations are totally different from normal synchronous operations. They take their time to execute and they don't block other operations to execute, but on the other hand synchronous operations have to wait for previous operations to complete.

You might have used some asynchronous functions in JavaScript like:

```js
setTimeout(), setInterval()
```
which are used to call a function after certain interval of time. Loading of scripts is also another real life example of asynchronos function.

Lets discuss one example of loading script dynamically:

```js
function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}
```

Lets discuss one by one what is happening in the above code. First we are creating dynamic element of script. Then we are setting the src attribute of that dynamic script to the src parameter that is passed to the function. Finally we are appending that script element to the head section of our html file.

To use this function just call the above function with source of javascript file like shown below:

```js
loadScript('/js/newScript.js');
```

Now one thing to note here that this loadscript function is asynchronous and it will take time to download the newScript file and load it to browser. If you write any code below the calling function of loadscript above, it will not get blocked by the above function.

Now how to track when our newScript is loaded properly. To do that we will use callback functions inside our loadScript function. We will add callback function as a parameter inside the loadScript function like shown below:

```js
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}
```

As you can see we did a little change in our old function:
1. We added callback function as a parameter.
2. When script is fullu loaded then we are returning the callback function with the script element.

So in this way you can use callback function to handle asynchronous operations in JavaScript.



