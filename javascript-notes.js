/*
----Web Dev Notes----

*********************************
-----Add methods to object-----
*********************************

-You can add functions to an object that you can later tap into using dot notation 
like this: 


const myObject = {
  fistName: "Ben",
  lastName: "Daniels",
  sayWhatsUp: function () {
    console.log("wassssssup!");
  },
};

myObject.sayWhatsUp();

-However, this is a little cluttered, so we can make it even easier, and drop the colon 
and just write a plain function name which will take the place of the key. Like this:

const myNewObject = {
  title: "The Catcher in the Rye",
  youPhony() {
    console.log("You phony");
  },
};

myNewObject.youPhony();

Just make sure that you add a comma after the method, so you don't get an error!

*********************************
----‘This’ Keyword----
*********************************

-It’s going to return an object 
-It’s a keyword 
-depending on the scope of  the returned ‘this’ object may change. 
-using 
-If the "this" keyword is used just in a plain ol' function it's going to return the window
object 
    For example: 
    function myBooty(){
        console.log(this)
    }
-Here, 'this' returns the window, because it doesn't live inside an object.
-If 'this' lives inside a method (i.e.) inside an object we define, then we get the object back
    For Example: 

const dog = {
  first: "Bill",
  last: "Daniels",
  nickName: "Barky Barker",
  cryForFood() {
    console.log(`${this.nickName} says "please give me food!"`);
  },
};

dog.cryForFood();

-The value of 'this' will change depending on how it is called!!
-If you access the method using standard dot notation then 'this' will reference the object
but if you call it using some other way then it may not work the way you intend it to. 

-Arrow functions and 'this' work differently!!!
    -If you use an arrow function to define a method it will not reference the object that it's contained within,
    instead it will reference the global object (the window!). This is why we don't use arrow functions to define methods
    within an object...we lose that ability to use 'this' as a reference to the object it's inside. 
    -HOWEVER if you're using "this" INSIDE of a method you can use the arrow function in order to jump to the parent object.
    -Take aways: don't use arrow functions to define a method...use them INSIDE of the method (like in a setInterval, etc.)


*********************************
-----The Window-----
*********************************

-This is the global object 
-As you declare functions they’re added as methods to the window object. 
-contains tons of properties
	-like alert()
-When you use the “var” keyword those variables are added to the window object (globally scoped) BUT NOT LET AND CONST

*********************************
---The DOM---
*********************************

-HTML, CSS, etc. goes in...JS objects come out! 
-Each one of these objects has different properties that we can access
-Set up in a tree structure with the Document on top and then all the different elements as child nodes. 
-There are lots of methods we can use to interact with the objects/elements on the page. 
-Document is the root of the tree. Every webpage has a document. 
-console.dir(document) will show you the actual object 
-There are tonnnnnns of methods to use 

*********************************
---Selecting DOM elements---
*********************************

-document.getElementById('someId') will grab an element with that Id 
  -Will return that element as an object...because the element is an object! 
-There are different categories of elements (paragraph elements vs. image element)
-document.getElementsByTagName
  -will return multiple elements if there are multiple! 
  -it'll look like an array, but it's actually an HTML collection
    -sort of like the arguments object...which is also not really an array. 
    -You can do some array-ish things on this collection 
      -You can use array indices to grab each one. 
      For example: 
      const inputs = document.getElementsByTagName('input') <--- collects all the elements with the input tag
      inputs[0]  <--- this grabs the first one...if it exists
      -You can iterate through them 
      -You can also spread them 
          Example: const inputArr = [...inputs] <---this will return an array with each element
-document.getElementsByClassName('someClassNameHere');
  -This will return multiple as well if there are multiple! 
  -Same stuff as the tag name can be done. 
-If you have multiple elements with the same tag name or class name you can save them to a variable and then
dig deeper into them by using class name or some other identifier (or by using their index in that HTML collection)

-getElementById('#someId') is different in that you can't search deeper within it because Ids are supposed to be UNIQUE across the entire document

******************************************************************
---querySelector and querySelectorAll---
******************************************************************

-Can use it like getElementByClass name, or Id name, or by tag
-In order to tell it what to look for (element vs. class vs. Id) use the CSS style selectors 
  -querySelector('h1') <--- selects an element
  -querySelector('.big') <--- selects the FIRST element with this class
  -querySelector('#title') <--- selects the element with Id of 'title'
      -remember, only one unique Id per document! 

-You can use CSS style selectors like finding a particular element with a class name
    Example: document.querySelector('li.home') <--- selects the li with the class "home"
      document.querySelector('section li.home') <--- looks inside the section element for an li with the class 'home'

-querySelectorAll will return all of the elements that meet that criteria       
  -returns multiple if there are multiple...but it's in a NodeList 
      -Another type of collection...nbd, not crazy important 

*********************************      
---Manipulate DOM Elements---
*********************************

-You're not always actually changing the element, sometimes you're just getting data from the element
-Getting text from an element: 
  -start by selecting an element:
    const h1 = document.querySelector('h1');
    h1.innerText <--- will return the text inside the element
  -if the selector contains multiple child elements it'll return the text from each of that element's children
  -For example if you did a document.body.innerText it'll return ALL the text on the body. 
-Changing the text: 
  -you can set the text to something else like this: 
    const h1 = document.querySelector('h1')
    h1.innerText = "I Changed!!"
  -It's kind of silly to do this because it won't persist if the page is reloaded if done in the console
    -Also silly to load a page an immediately change text.
      -But events make this very useful. Maybe we wanna change the text once something happens.

*********************************      
---innerText vs. textContent---
*********************************

-innerText doesn't know about formatting
-textContent does! 
-innerText also doesn't know about hidden text! 
  -if you added some styles that had "display: none"
-textContent is faster, but it doesn't really matter which you use...not super important. 

*********************************
---innerHTML---
*********************************

-retrieve text and all tags inside as well 
  -returns a string of all the stuff inside that particular selector 
-this will allow you to add elements to the page, but it's gotta be in the form of a string. 
-If you use innerText instead then it'll get messed up because it only knows that you want to add text. 

******************************************************************
---Changing and accessing attributes: src, value, href, etc. ---
******************************************************************

-if you use the .value will return the value of that element. 
  -You can use this to access the value or use .value property and set it to a new value
  Example: 
    const input = document.querySelector('input')
    input.value <--- will return the current value
    input.value = "Something new" <--- this will change the value 

-.href will access the url of the href 
  -You can change it by setting it to something else. 

-.getAttribute('attribute') will return the value of that particular attribute if it exists
  if you add a comma and another value it will set the value of the attribute to that 
  Example: 
  document.getAttribute('min', '500') <--- sets the min to 500 
  -You can even use the second value to change the type of attribute
      -pretty cool stuff. 
-This is helpful when you don't have a dedicated way to tap into a particular attribute

*********************************
---accessing parent and child elements---
*********************************

the .parentElement will give you the parent
  -you can chain it together with other.parentElement to go up another level

the .children will give you the children  

.nextElementSibling will give you the next sibling (good for li elements)
.previousElementSibling will give the previous sibling 

*********************************
---changing multiple elements---
*********************************

-We can select multiple elements at once. 
-We then can iterate over the object 
Example: 

const allLis = document.querySelectorAll('li')

for (let i = 0; i < allLis.length; i++){
  console.log(allLis[i].innerText); <--- will get the text of each li 
  allLis[i].innerText = 'We are the champions'; <---changes the text of each li
}

Example using for...of loop:

for(let li of allLis){
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'; <---will read it as html and use the bold tag to style the text accordingly
}

*********************************
---changing styles---
*********************************

-every element has a .style property object attached 
  -if you console.log it it won't give you any useful info though
  -style property will only read inline styles, but that's no bueno 
  -You can set the styles using that property and it will add it to the html inline
  -in JS you need to use camelCase to access the properties that are multi word
    Example:  
    -So background-color needs to be accessed via element.style.backgroundColor = "red" <---using camelCase for the style (backgroundColor)
  -This isn't the best approach if you're trying to add lots of different styles to an element and would require lots of typing
  -Better approach:
    const allLis = document.querySelectorAll('li') <--- select multiple elements
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'] <---array of the properties to add to the different elements

    allLis.forEach((el, idx)=>{  <--- loop over each element in the NodeList or HTMLCollection
      const color = colors[idx];  <--- using the index (idx) to access each element of the array
      el.style.color = color;    <---change each li and use the array index to assign the color 
    })     

NOTE: IN-LINE STYLES WIN OVER CLASSES. 

*********************************
---getComputedStyle---
*********************************

-this will return an object with ALLLLLLLLL the styles on an element 
-it will display the actual style that is "winning" out 
    -you use the properties of the object to look at what you want to see (like color, or fontSize, etc.)...USE CAMEL CASE!

*********************************
--adding a class to an element---
*********************************

-you can access an elements class by checking its attributes...using .getAttributes
  -then add class using .setAttribute('class', 'new-class') <--takes 2 arguments (attribute, newValue)
  -Kinda clunky! 
    -It will erase any classes previously added in the style sheet unless you add them to the list of attributes 

A better way: 

*********************************
---.classList---
*********************************

-Shows the classes on an element and provides methods! 
    -add, contains, toggle, remove
    -Makes life easier! 
      -You can check which classes are on something, or add new classes on it! 
-todo.classList.add('done')
-todo.classList.toggle('done') <---will toggle between adding and removing some class! 

*********************************
---creating new elements---
*********************************

-const newH2-document.createElement('h2')
    -it makes an empty element 
      -it's actually an object! 
    -it has no content 
      -newH2.innerText = 'I like candy.'
  -This doesn't put it into the DOM! 
    -You have to put it somewhere and tell the DOM where it goes. 
    -Let's say we have a <section></section> that we want to put it in.
    -We can select that section and then add it in like this: 
    const section = document.querySelector('section');
    section.appendChild(newH2) <---this puts it inside that section. 

***************************************
---append, prepend, and insertBefore---
***************************************

-You can use each of these to put an element in a specific place
-insertBefore requires you to target the parent and then pass in the new element and then also pass in the sibling that you want it before
    -it would look like this: 
      parentEl.insertBefore(newEl, siblingEl)

-append() allows us to insert multiple elements if we want to 
  -puts it at the end of the targeted element. 

-prepend() same as append but puts element at the beginning. 

*********************************
---removeChild() and remove()---
*********************************

-removeChild() will remove a child element from its parent
    Example: 
      parentEl.removeChild(childEl)


-remove() doesn't need the parent! 
    -remove(removedEl)
    
*********************************
---Events---
*********************************

-We have tons of events that we can listen for 
-Clicks, drags, drops, scrolls, etc. 

*****************************
---How NOT to add an event---
*****************************

-Adding events has a few different parts:
1. The thing that is listening for an event
2. The type of event that we're listening for (click, scroll, etc.)
3. The code we want to run when the event happens 

TWO things to avoid: 
1. adding event listeners "in line" on the element in the html 
    Example: 
    <button onClick="alert('You clicked me!)"></button>
    This makes things more cluttered 
2. adding an event in javascript directly to the element. 
    Example:
    btn.onclick = () =>{
      console.log("Clicked")
    }
    This means you can only use it once...couldn't add two things for it to do. 
    
*********************************
---addEventListener---
*********************************

-You can add any type of event listener we want 
    -click, mouseover, etc. 
-We can use as many as we want! 
    -Hooray! 
-Can even have multiples of the same event type 
 

**************************************
---Add events to multiple elements---
**************************************

-You can use loops to create multiple elements 
-if you create an element, remember to append it. 

You can use the 'this' keyword to access something that has happened to an HTML element because
ELEMENTS ARE OBJECTS!! 
    -if you console.dir(element) it'll show you that the element is indeed an object 


**************************************
---The Event Object---
**************************************

-Gives you access to lots of data about the event! 
    -It's automatically passed to an event 
-some events like keypress won't give us all the data we want, but others will (like keydown).
-console.log is your friend because you can use it to see what is being sent to the DOM and extract the data that you want 
to work with 

keydown/keyup vs keypress 
-keypress only fires when something shows up in an input.
-the other two will fire whenever something is pressed! 
    -A little harder to control 




*********************************
---working with Forms---
*********************************

-Forms are usually designed to take data from an input (checkboxes, text inputs, dropdowns, etc.) and send it somewhere 
    -usually sent to some url 
-The old way of working with forms had the page refresh when the form was submitted, but with the rise of Single Page Applications like React, Angular, and Vue we now can catch that data, use it (or send to a database) without a page refresh. 

-Form submission can be a pain because the form, once submitted, will want to refresh the page or direct you to a new endpoint...

-To stop this we can use preventDefault on the submit event 

***********************
---Input Event---
***********************

-This is a way for us to keep track of a form as the data changes, instead of waiting for a submit button to be clicked. 


***********************
---Change Event---
***********************

-Very similar to input event but text won't be submitted until you're not clicked into the text box. 


*********************
---The Call Stack---
*********************

The way that JS uses to keep track of where it is in the code. How JS knows what function is currently being run and what are called and what's not done yet

The "call" makes intuitive sense...it keeps track of the things that we're asking it to do (or calling). 

The "stack" part has to do with the order in which things are done. Think of a stack of books! The last one you add will be the first thing out...you don't grab from the bottom. 

When a function is called, it's added to the top of the stack, and if there are any other functions that are called by that function they're added on top of the stack further up and run where their calls are reached. When a function completes (returns a value), it's taken off the top of the stack. 


***************************************************
---Using the Dev Tools to Access the Call Stack---
***************************************************

In the chrome dev tools you can use the "Sources" tab to step through your code. If you want the code to not run past a certain line you can insert a breakpoint by highlighting the line. 
-You can see a section on the side that says "Call Stack"
    -This will show you where you are in the stack! 
-If you press the forward arrow it'll step through the code 
    -Things stay on the stack until something is returned! (IMPORTANT)


******************************
---JS is Single Threaded---
******************************

-Only one thing happens at a time. 
Example:
console.log("I happen first");
alert("I'm alerting you!");
console.log("I happen second!")

-The alert is going to pop up and will stop everything until 
the ok button is pressed.

-This is because JS is single threaded and can only complete one task at a time. 

-We ask JS to do things that take time...like API requests...
    -How does this work? Why doesn't everything stop???
    -It doesn't actually stop everything, because of asynchronous code! 

-JS has ways around it's singlethreadedness (is that a word??)


*****************************
---Asynchronous Callbacks---
*****************************

-So what if we have something like this: 

console.log("I happen first");
setTimeout(function(){
  console.log("I happen third")
}, 3000);
console.log("I happen second!")

-It would seem like JS wouldn't be able to do anything but deal with the second line until the timer is up...but that's not what
happens. That's because the browser does the work! 

-The browser !=== Javascript 
  -The browser runs JS code, but is written in another language
    -usually C++

-The browser does a lot, like making API calls and requests! 

-Web APIs 

********************
---callback hell---
********************

-callback hell happens when we have things that need to run in succession. 
-If we had a series of setTimeouts you can imagine that we'd have tons of nesting 
  -Makes life a mess and difficult to read! 
    -No. Fun. 


********************
---Promises---
********************

-A promise is an object that represents the eventual completion or failure of an asynchronous task and its resulting value.

-They get you out of callback hell.

-While a promise is waiting to resolve it's put into a 'pending' state

-You can do things after a promise resolves with a .then()
-You can do things after a promise is rejected with .catch()

-You can chain a .then() and .catch() together to handle errors

-When you reject/resolve a promise you can resolve it with a value. 
  -The whole point is to either get some data or to show why it failed. 

  -Similar to how HTTP requests work...status codes give you info about what happened...200 vs. 404 

-In your resolve and reject you can return data to the user (values, objects, etc.)

-This is sort of the req and res side of HTTP requests...making more sense now. 



***********************
---Promise Chaining---
***********************

-Promises can be chained together such that one waits for another to resolve. 
-For example: You have a webpage endpoint that needs to exist before checking for another potential endpoint
  -/users  <---maybe this is ALL of the users
  -users/1 <---this could be a single user's data 
-Each chained promise would be nested inside the request 
  -Not too different than callback hell...
-You can actually NOT NEST the promises! 
  -You can just go: 
    .then(something happens).then.(more things happen after the first thing happens)
-You can add a .catch() to catch any errors at the end of the chain. It'll only run if ANY of the .then() don't work/return 

-The benefit of Promise chaining is that the code is so much easier to read, which is a huge advantage. 
-It's not just about being "ugly" or "beautiful", it's mostly about readability
  -You want to be able to look at some code, or have someone that looks at YOUR CODE be able to understand what's going on
    -Comments help! But so does having a solid and logical structure to the code itself. 


********************
---HTTP Requests---
********************

-These are async actions because you're requesting data! 
-XMLHTTP 
-Fetch
-Axios
  -Library to make HTTP requests 

AJAX
  -Asynchronous Javascript and XML 
  -Using Async requests to communicate w/ a server 


JSON
  -A format for sending data 
  -JavaScript Object Notation 
  -A protocol for formatting data 
  -Looks like JS but it's not. 
    -Can be TURNED into JS easily 
  -You could use another language with that data...
    -Doesn't have to use JS, could use Python, Ruby, etc. 


XML 
  -Like the parent of HTML 
  -Looks a lot like html with tags <example></example>
  

**********************
---Sending Requests---
**********************


XML Http Requests
  -original way of sending requests via JS 
  -Doesn't support promises 
  -XHR is an XML Http Request 

There are alternatives to XHR! 

***********************
---Working with JSON---
************************

-JSON is not javascript 
-JSON.parse will give us valid JS 
  -This allows us to use all of the magic of JS on this data! 


**********************
---More on Requests---
**********************

-The pain in the ass part is when you send a request and get back data that would necessitate another request.
  -This is where you need some async magic to happen
-The reason we use Fetch or another method is that they can handle promises. 


**********************
---Fetch API---
**********************

-Was created because XHR sucks. 
-The only problem with Fetch is that it's not supported in internet explorer

-To use Fetch we pass in a url 
-Fetch returns a promise! 
  -We can use .then and .catch 
-it will respond with a response object 
  -It's a little different than just a normal object.
  -The data lives inside the Body which is a "readable stream"
  -A stream is a way of accessing large amounts of data that is processed as we go.
  
-The body.json will read the stream 
  -I can take a while...and returns another damn promise!! 

-If HTTP response is 404 fetch will still resolve the promise and not run the .catch()
  -only if something prevents the response from completing like a network failure 

-The reason that fetch is preferred over XMLHttp is that fetch will return promises which means that you can use the .catch and .then syntax which is much more readable.
  -After this resolves, do THIS
  -If there's an error do THAT 

You can create a resolved promise with Promise.resolve(data);
  -This can help in refactoring and having a more terse chain of .thens 


**********************
---Axios---
**********************


-An alternative to Fetch! 
-Can find it on github 
-Uses fetch behind the scenes 
-Makes fetch a little more simple
-Promise based
-Can use it on the client or server side 

when you make a request it gives you back a promise that has a data property that you can immediately tap into...don't have to a deal with bad status codes 
  -Because Fetch will resolve even with a 404 
    -Not great, because that's really an error. 
-Gets rid of doing a bunch of .thens because we're not having to turn anything into JSON and so forth

-If you get a 404 then you use .catch to throw an error. MUCH EASIER. 

-Allows us to other types of requests easily (post, put, etc.)


****chaining in Axios****

axios.get(url)
.then(({data}) => {
console.log(data)
for(let planet of data.results){
  console.log(planet.name)
}
axios.get(data.next).then()... <--- you can do your chaining here but it's not as readable...
  //The nice thing is that Axios can return a promise by just doing return axios.get(data.next) <---this is a promise, so you can move the .then outside of this function. 
})

-Don't have to worry about status codes so much 
-You can also define functions above all of your calls instead of defining functions inline, inside of the axios get calls 





**********************
---Async/Await---
**********************

-syntactic sugar for promises 
  -Makes it easier to do the same dang thing
  -An easier syntax that accomplishes the same task

-Makes it easier to work with promises 


-Async and Await are keywords we can use to tell the program to WAIT until the promise
is resolved

-In order to use it you start by using the async keyword.
  Like this: 
    async function hello(){
      return "Hey dude";
    }
  -When you use async it will automatically return a promise! 
  -You don't have to explicitly say "return me a promise, function!"
  -You can use the "throw" keyword within the function to deal with errors 
    
  async function add(){
    if (typeof a !== 'number' \\ typeof b !== 'number'){
      throw 'A and B must be numbers!'
    }
    return a + b;
  }
  -This helps deal with rejected promises 

  'await' will make stop everything from moving on until a promise is resolve 
    -MUST be used INSIDE the async function 
  Like this: 

  async function getPlanets(){
    const res = await axios.get(starWarsAPICall)
    console.log(res.data)
  }

  ^^^ this will WAIT until the data is fetched from the API (promise resolves) before going on to the console log


multiple awaits: 
You can simply add multiple awaits in an async function and, so long as they resolve, they'll keep moving along

Handling errors in async functions:
You can use a try/catch inside the function like this

async function exampleFunc(){
  try{
    do something here
  } catch {
    error handling goes here
  }
}

It sort of looks like an if/else statement 

otherwise you can add a .catch to the function call to handle the error

exampleFunc().catch(err => {
  console.log(err);
})

*************************************
--Parallel vs. Sequential Requests--
*************************************
-Sequential requests will wait until the promise resolves
-Parallel requests are fired off immediately and will go while the previous requests are pending
  -This is the way to go if the promises are not dependent upon one another 

-Sequential will take a little longer 

*********************************
--Promise.all--
*********************************
-returns an array of promises 
-looks like this:
  await Promise.all([prom1, prom2, prom3]);

-It will wait until ALL the promises are resolved and then moves on. 


*********************************
--Constructor Function--
*********************************

If you're using a an object and define a method on it, every time you make
a new object it will create a new copy of that method.

However if you call a method on a string or array and check for equality then it'll return true. 
This is because these methods are defined on the object prototype...not in each instance of the data type. 
  -can see it by console.log and look @ __proto__ section 

Constructor function 

Example: 

function Car(name, model, color){
  this.name = name; 
  this.model = model;
  this.color = color;
}

-Notice how the function name is capitalized
  -A way to show or indicate this is a way to make new things based on the function 

When you just call the function and pass in arguments you get undefined.
  -"this" is set to the window object...not the object itself
  -Ex:

  Car('George', 'Prius', 'blue')
      -Returns undefined ^^^^^



If you use the "new" keyword then you'll get what you want
  -It will return the value of the given newly created object

  Ex: 
  const car1 = new Car("Betty", "Camaro", "Pink");


*********************************
--JS Classes--
*********************************


keyword "class"

class Color {
   constructor(r,g,b){
    console.log('inside color');
    console.log(r,g,b);
   }
}


-you must have the class keyword and use the constructor function inside
  -both are needed 

class Color {
   constructor(r,g,b){
   this.r = r;
   this.g =g;
   this.b = b;
   this.name = name;
   }
   greet(){
    return `Hello from ${this.name}`
   }
}

const color1 = new Color(255, 55, 50, "tomato");

  -This will make a brand new object with all of these properties. 
    -So fancy
  -greet() will be a __proto__ method! 

*********************
--Extends and Super--
*********************

class Cat{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`
  }
  meow(){
    return 'Meow!!!'
  }
}


class Dog {
   constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating`
  }
  bark(){
    return 'woof'
  }
}


-Both of these classes are extremely similar...we can use some JS tools to help us make it easier


class Pet {
  constructor(name, age){
    this.name = name; 
    this.age = age;
  }
    eat(){
    return `${this.name} is eating`
  }
}


class Cat{
  meow(){
    return 'Meow!!!'
  }
}


class Dog {
  bark(){
    return 'woof'
  }
}


-Up to this point we have extracted the common aspects of the Dog and Cat original classes, but since we took out the constructor function
we can no longer create a new Dog or Cat with the "new" keyword
-We're going to add the "extends" keyword to utilize the functionality of the Pet class inside these other two classes

class Cat extends Pet{
  meow(){
    return 'Meow!!!'
  }
}


class Dog extends Pet{
  bark(){
    return 'woof'
  }
}

-Now we could run this code and it would work in the browser:
  const wyatt = new Dog('Wyatt', 6);

-Even though we don't have a constructor it's referenced from the extended class, unless we put a constructor inside of the class
-This could be useful if we want different info in a particular class. If some of the info comes from the extended class, then we can use the "super" keyword to reference that info, like this:  


class Cat extends Pet{
  constructor(name, age, livesLeft = 9){
    super(name, age);
    this.livesLeft = livesLeft; 
  }
}
*******************************
--determine value of 'this'---
*******************************

To determine value of 'this' 

Did you use an arrow function --> write a console.log on the first valid line above the arrow function. Value of 'this' in the arrow function will be equal to that console log
    -will result in the window object usually 
Dig you call 'bind', 'call', or 'apply' on the function when you invoked it? --> 'this' is equal to the first argument of 'bind', 'call', or 'apply'

All other cases --> 'this' is equal to whatever is to the left of the '.' in the method call. 


*******************************
--getters and setters---
*******************************
I'm confused about this part...look into it more. 


*******************************
--SVGs---
*******************************

-SVG elements in HTML basically create a little canvas for you to draw
-Origin is the top left 
-Don't use negative values
    -That's outside the canvas 
    -Anything that's outside the canvas will get clipped 
-There are different SVG elements that you can use (circles, rectangles, polygon)   
-SVGs have fill and stroke 
-stroke-dasharray is the amount of strokes around a circle 
-circle boarders start on the right and go around clockwise


*******************************
--Working with an API---
*******************************

-We need an API key usually 
-async and await are helpful for waiting for a request to resolve before doing something 


*******************************
--setTimeout and clearTimeout---
*******************************

setTimeout will do something after a given interval of time 
  setTimeout( () => {
    console.log('yo');
  }, 1000)
    -This will console.log after 1 sec 

*******************************
--Debouncing---
*******************************

-This is when we wait until something has finished until we actually do the thing
-Like "wait until a user is done inputting text into the field before running the function or API call"
-Reasons: limiting API calls due to limits of requests per day allowed 

*************************************
--Using functions in separate files---
*************************************

-If you have some functions/data and you want to use it in a page you can make sure that you reference in the HTML first 
  -Ex: if you have some utility funcs that you want to use...first reference them <script src='utils.js'></script> 
  and then the other js files that are dependent on that one 


*******************************
--Middleware---
*******************************

-Function that does some pre-processing on 'req' and 'res' objects 
-Primary means of code reuse in express 

*******************************
--Cookies for Authentication---
*******************************

-Cookies are a very common way for websites to handle authentication. 
-When a website does a request from a server for the first time the server will ofter respond with a cookie 
-A cookie is a small string of characters that the server asks the web browser to store 
  -It allows for server to identify a user 
  
*******************************
--Hashing---
*******************************

-An algorithm that takes a given input and outputs a long string of characters 
-There are many different types of hashing algos 
-Makes it possible for you to store passwords/emails safely 
-You can't go from hashed value to the original input 

***Salting***
-a random string of characters appended to a password 
-Makes even a common password ('password') harder to figure out 

****************
--Validation--
****************
-Making sure a user's input matches a given criteria 


--sanitization--
-changing a user's input so it conforms to a standard
  -Examples: trimming out leading or trailing whitespace(s)


****************
--HTML Forms--
****************

-Forms have a default GET method attached
  -With GET it will append the data to the url 

-You can change the method with the "method" property on the Form element 

-POST requests will wrap the data in a post request to the server 

-You can use enctype= "" to specify encoding type 
  -Default value is "application/x-www-form-urlencoded"
    -This means take all data and transport it inside of a url 
    -turns it into a query string 
    -The problem with this is that the data inside may not be safe or efficiently transferred via string
        -It might just ignore the values because it can't be transferred via a string.
        -An image isn't able to be transferred via a string 
  -We're using ="multipart/form-data" to transfer an image 
bump

****************
--Testing--
****************

-lots of people spend more time setting up testing than actually writing tests
  -People will sometimes spend more time fighting the tests than running and using them 

-Many frameworks are doing the same thing 

-You don't need a testing library to test your code 

-When we write a test we will usually use a naming convention like index.test.js if we're testing the index.js file




*************************
----------Git------------
*************************

-What is a git repo? 
  -a workspace that tracks and manages files within a folder 

-Whenever you want to use git you have to tell git to create a new repo. 

-Git status 
  -gives info on the current repo and its contents 
  -it'll tell us if we're in  a repo or not. 
    -If we are, it'll tell us what files have been modified, etc. 

-Git init
  -Initialize new repo 
  

*************************
----------Scope----------
*************************

-Scope refers to the places where you have access to a variable's value
-Some variables have local scope (only available where they're declared)
-Other variables have global scope (available everywhere)

-If a variable is created within a function, it cannot be accessed outside the function: 

-var, let, and const 
  -const can't be reassigned to a new value 
    -Unless it's an object or array...we can add properties or values into those 

-If any of these are declared outside the function, it's global scoped
-Var can be accessed outside of an if/else statement. 
  -This is not ideal, because it creates situations where bugs can be introduced 

-Use let or const 



*************************
----------JS modules-----
*************************

-Modules allow you to package bits of code together and use them around your codebase
-Ex: If you had a calendar app and you wanted to have all of the logic for finding what day it is, it would make sense to keep that separate from the other parts of the app. 

*************************
----------EJS-----
*************************

-EJS is a templating framework that allows for users to make reusable components 
  -Sort of like an early version of React 

*************************
----------SQL-----
*************************

- Structured Query Language 
  -Can be used with a variety of software (mySQL, postgreSQL)

-SELECT <-- grabs data from a table 
-FROM <-- specify table to grab data from 

-* <--- Grab everything 

- SELECT * FROM products <--- select everything from the 'products' table 

-UPDATE <--- update a table 
    -Ex: UPDATE products <---update the products table 

-SET something = value <--- set will change a value 

-WHERE <-- a set of conditions to be met 
    -Ex: SET price = 1.20 WHERE id = 1
        - Sets the price of product with id of 1 to 1.20 

-DELETE <-- deletes something 
  -Ex: DELETE FROM products WHERE id = 1
      -deletes the item with id 1 from products table 



*************************
----------MongoDB-----
*************************


-First create a directory for your DB 
  -Create a folder in there called "data"
-cd into that directory 
  -sudo mongod --dbpath=data
-This starts the mongo server

-In a separate terminal start the mongo shell with "mongosh" command 

Create: 
  -db.<name of collection>.insertOne()   <---inserts one document into (schema??)
  -Example: db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
      -This will create a collection (like a table column in SQL) "products" and insert a new  document (record) into it ("Pen" with a price of 1.20)

  -'show collections' will show you all the collections in your document 

  -you can also create a new collection by using the db.createCollection("nameHere")
    -Otherwise it'll get created when you insertOne()

    -A COLLECTION ISN'T CREATE UNTIL IT GETS CONTENT

Read: 
  -use the .find() to show the contents of a collection
    -Ex: db.products.find() will list everything in the products collection...all of the documents will be shown. 
  -.find() can be passed parameters for finding specific records 
    -Ex: db.posts.find( {category: "News"} )
        -Looks in the posts collection and returns all documents with the news category. 
  -.find() takes a second parameter called the 'projection'
    -This tells us which fields to include in the results
        -Maybe we just want to find the address of the user with id: 1
        -db.users.find({_id:1}, {address: 1})  the "1" after means include the field...0 means to exclude the field. 
        -We can use this to only return the data necessary to our search
    -You can keep the first argument empty to return all the documents in the collection, but add second arguments to filter out the bits of info that you don't care about
        -Ex: You have a list of books, you want to return all the books, but you only want the title and author fields.

Update:
  -To update a document we use the .updateOne() method 
    -we specify the document with our first argument ({_id: 1})  <-- document w/id 1
    -the second argument will specify the value we want to change ({_id: 1}, {$set: {stock: 32}})...we use the "$set" keyword 
  -

Delete: 
  -to delete a document we use the .deleteOne() or .deleteMany();
    -to delete one document you pass in an argument that matches the document (use the id)
      -Ex: db.products.deleteOne({_id: 1}) <--- this finds the product with id: 1 and deletes it. 
    -to delete ALL documents within a collection, just pass an empty object into the .deleteMany()
      -Ex: db.products.deleteMany({})  <-- deletes ALL documents within the products collection 

Relationships: 
  -To create a relationship between two collections you can embed data within a document.
    -Ex: if we had a person document we could embed address data inside of that document.
      -{
        _id: 1,
        name: "Joe Smith",
        address: {
          street: "123 Fake St.",
          city: "Cape Fear",
          state: "MO",
          zip: 12345
        }
      }
  Nested Documents: 
    -The value of a field can be a nested document 
      - {
        title: "Prisoner of Azkaban",
        genres: ["fantasy", "young adult"],
        reviews: [
          {
            name: "Ben",
            body: "lorem ipsum"
          },
            {
            name: "Greta",
            body: "lorem ipsum"
          }
        ]
      }
    -The benefits include speeding up read times because it might make it so you don't have to make an entire new collection
    -
Method Chaining
  -We can add methods to our searches. 
      -Let's say we want to look into our books collection and return the total number of books:
        -db.books.find().count() <--- returns # of book documents in our collection

    .limit()
      -you can pass in a number to limit the amount of documents returned. 
          .limit(3) will return three documents

    .find().sort({field: 1 (sort ascending) or -1(sort descending)})
    -Ex: finds documents in collection and sorts them in an order according to a field.  

-Complex queries 
  -use the $ to perform a query
    -db.collection.find({rating: {$gt: 7}}) <---all ratings greater than 7
    -db.collection.find({rating: {$lt: 7}}) <---all ratings less than 7
    -$lte <-- less than or equal
    -$gte <-- greater than or equal
  -Multiple queries: 
      -db.books.find(rating: {$gt: 7}, author: "JK Rowling") <-- all books above 7 rating whose author is JK Rowling
  -db.books.find({$or: [{rating: 7}, {rating: 9}]}) 
      -the $or works like || in JS...it will return all books with rating of 7 OR 9
  -$in means "in"
    -db.books.find({rating:{$in: [7,8,9]}}) <--book with rating of 7, 8, or 9
  -$nin means "not in"
    -db.books.find({rating: {$nin: [7,8,9]}}) <--book with rating that isn't 7, 8, or 9
Query array values: 
  -To query a document that has a field that is an array:
      -db.books.find({genres: "fantasy"}) <--look in genres and see if there is a match
        -This doesn't mean that "fantasy" is the only thing in the array...but if it's in the array at all it will return the document to us
  -What if you want an exact match? 
      -db.books.find({genres: ["magic"]})  
        -This returns books that ONLY have the genre of magic and no other values 


    
  
    

Using MongoDB with node: 
  -Using an ODM (object data modeling) library like Mongoose is the most common way to use MongoDB within a node app
  -Mongoose makes life much easier  


*************************
----------React-----
*************************

-Render method only returns a single element 
      -ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"));
  -We use a <div> to use multiple JSX Components
      -These are "children" of the main element
-To use JS inside React
  -Use the {} to write JS inside of JSX.
  -You can declare variables outside of some JSX and then inject those values into JSX using curly braces 

-Passing Props to a component
  -In the parent of a component we can pass down attributes to that component through props
  -So let's say we have all of our components being rendered in our parent App.js:
      const App = () => {
        return(
          <OurComponent />
        )
      }
        -In the component we can pass down properties by setting them in the component:

        <OurComponent name = "Ben" />   <---- Now we're passing the value "Ben" to the component through the name property

        -In the component we need to receive these props: 

          const OurComponent = (props) => {
        return(
          <h1>{props.name}</h1>  <---- this will receive the value "Ben" because it's been passed through via props
        )
      }

        -This is an example of passing a hard coded value as props --> "Ben" , but the data could come from an array or some other place 
          Ex: 
            <OurComponent name = {namesArray[0]} />  <--- receives its value from an array of names
-Wrapper Components
  -If you have a component that is going to wrap another then you need to pass it {props.children} in order for it to work properly
      -This happens often for Card components 

-Component Organization
  -Try to organize components into folders based on their function within an app 
      -Maybe some components are UI based where others may contain more of the logic of the app, so create folders for each if possible. 

-State
  -Since components are just functions, when you invoke a component it's like calling a function. 
    -IF that component has other child components, then the same happens with them and we return whatever they return
      -Once this is all done, React draws the info on the screen. 
 -If we need to update the screen in some way we need to use State to update a component and rerender it. 

-useState
 -This is a function that is included with React
    -it's called a "hook"
      -all hooks start with the word "use"
    -We make a special variable inside of it.
    -We initialize it with an array of two values...the first is the initial value and the second is an updating function
      -It looks like this: 
        - const [something, setSomething] = useState(); <---here we're destructuring this array because useState is an array with 2 values always in this order
          -We use the convention of [something, setSomething] in our destructuring 
      -When we want to update the component we use the updating function...setSomething() and pass a new value to it.

      Ex:
        - const [title, setTitle] = useState(props.title) <--- the value we pass to useState will be the initial value.
        -Later we can call the setTitle("Updated Title") and it will rerender the component with the new value. 
  -React will keep track of the updates to the state and will only use the passed in value to useState the FIRST TIME 

-Changing State
  -State can be changed for a variety of reasons:
      -user inputs something so we want to update the UI
      -http request resolved so we want to display some data
      -etc.
      -React checks the DOM nodes when state is changed and updates the appropriate nodes. 
      -If there are things within the component that haven't changed then they'll stay the same.
        -If you have a button that requires state changes, but an input that doesn't...the input will allow you to keep typing inside without refreshing its value once the button is clicked


-When State Relies on Previous State
  -When your state relies on the previous state of the component do not just pass in the values to the updating function directly. 
      -Don't do this:
          setAmount(amount + 1)
  -When you need to update state this way pass in a function to the updater
      -Like this: 
         setAmount((prevState) => {
          prevState + 1; 
         })

-Passing state up
  -This is possible!     
  -In order to pass state up to a parent you need to put the logic in the parent component and use props in the child component to call the function that is housed in the parent component.   

-Controlled Component
  -When one component is reliant on logic within a parent component. It's being controlled by another component. 

-Stateless vs. Stateful (dumb vs. smart) Components
  -Some components will manage state. 
  -Others will not. They'll just present something 
  -We want mostly stateless components and keep each component very simple and straightforward. 
  -Typically only a few components actually need state. 

-Hooks
  -Call them within the functional component



-Conditional Rendering
  -We can wrap some JS in curly braces in the return statement of the Component and use a ternary operator
      -Ex: 
         {filteredExpenses.length === 0 ? <p>Nothing to Show</p> : <ComponentToDisplay />}
            -The expression before the "?" will evaluate as true or false...if it's true then the first item before the colon will happen, if it's false, the second item will happen.
              -So here if the length of expenses is zero, then we'll get a message saying "nothing to show", otherwise we'll show our component.

  -An alternative to the ternary operator is to use the && which will only render the stuff afterwards if the condition is met. This will allow you to have less complicated statements that are hard to read.
         -Ex:
         {filteredExpenses.length === 0 && <p>Nothing to Show</p>} <---only displays if condition is met
         {filteredExpenses.length > 0 && <Component />} <---only displays if condition is met
         
  -You can ALSO put all of the logic above the return statement and set it to a JS variable that returns JSX and inside the return point to that variable
         -Ex: 
            let expensesContent = <p>Nothing to show</p>
            if (filteredExpenses.length > 0){
              expensesContent = filteredExpenses.map(expense => (
                <ExpenseItem name={expense.name}/>
              ))
            }
            
            return (
              {expensesContent}
            )

*************************
------CSS Modules-----
*************************
-A way to create custom stylings for a react component so that no other components will get the wrong styles applied
    -Ex: if you have a ".button" class that you want to apply to a component you can just add it to the component and import a .module.css file and a custom, distinct class will be applied
      -This allows you to use the same class name in multiple components without fear of the classes overlapping 

-To use CSS module you have to create a .module.css file and import it. 
  -Create React App automatically allows use of CSS modules
      -Make sure to check for compatibility 

*************************
------JSX Limitations-----
*************************

-You can only have ONE root JSX element. 
  -Why we wrap everything in a single element (usually a div).
  -In JS we can only return one thing! 
      -We can't have two separate return statements. 
      -You could have an array, or an object, or some more complex data structure, but ultimately it's just one thing returned.
  -You could put all of your components inside of an array that you return, but if you do that then React is going to ask that each component/element returned have an associated key. 
    -Like when you map through an array and return JSX elements. 
Problem with wrapping divs: 
  -You can end up with "Div Soup".
    -When you're actually converting the JSX down it can make for TONS of unnecessary divs.

    <div>
      <div>
        <div>
          <div>
            <h2>Hello, World</h2>
          </div>
        </div>
      </div>
    </div>
  
  Problems:
  -These divs have no semantic meaning...it doesn't make any sense. 
  -You're rendering stuff that doesn't need to happen...makes things slower

  Solutions: 
  -Create a Wrapper Component
    -Make a component that only serves to wrap a component that just returns 
    props.children
  -Use a react fragment
    -This is just an empty opening and closing bracket
    <> </>
    -If it doesn't work you can also use 
    <React.fragment></React.fragment>
  
*************************
------React Portals-----
*************************
-Let's say we have a modal that we want to use. 
  -A modal, by nature should sit on TOP of everything on the page when it is active.
  -This means that when a modal is triggered we would want it to sit semantically ABOVE everything in the rendered HTML.
  -If we had a component that rendered a modal, it could very easily cause the modal to not sit on top of the rest of the components, but next to them. 

-Portals are used to put a component in a specific place on the place

-To use one, go into the root HTML file, make a div where you want the component to be in the page's structure, and give it and id (like 'backdrop-root')
  -to portal, we import ReactDOM and in our component we can do something like this:

    const ErrorModal = (props) => {
      return (
        <> 
          {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
        </>
      )
    }


*************************
------React Refs-----
*************************

-A ref allow us to get access to DOM elements 
-To use it: const somethingHere = useRef();
    -They have an undefined initial value 
    -Add the "ref" prop to the html element you want to wire up 
      -Let's say it's an input element: 

          const nameInputRef = useRef();
          
          <input id="username" type= "text" value={enteredUsername} ref={nameInputRef}/>

      -This will return an object with a bunch of properties...like the "current" property 
        -Inside 'current' we have a 'value' property.
      -so if we were to console.log(nameInputRef.current.value) we'd get the current value of that input without having to rerender the element at every keystroke. 

-Why do we use this? 
  -They allow us to store values without causing a rerender 
  -useState() causes the component to rerender, which can decrease speed.

*************************************************
------Controlled vs Uncontrolled Components-----
*************************************************

-Uncontrolled components manage their own internal state. They're not dependent on another component to manage their state.

-Controlled components have their state and behavior controlled by the parent component (using props).
  -Maybe there is a component that receives props to manage an input's value upon form submission. 


*************************
------Side Effects-------
*************************
-React's job is to render the UI and update the UI when the user interacts with the application

-A side effect is anything happening outside of this functionality. 
  -Rendering an HTTP request
  -Calls to an API 
  -Timers 

-All of these things arent directly related to drawing something on the screen. 

-Tasks that happen outside of the component function may need to be taken into account. 
  -If state changes, that causes the component to re run, which would in turn trigger the side effect if it's inside of the function body. 

-It's easy to accidentally create infinite loops or unintended HTTP requests


*************************
------useEffect-----
*************************

useEffect(() => {...}, [ dependencies ])  <--- looks like this in use

Called with two arguments 
  -First is a function that is ran if the specified dependencies change. 
  -Second is the dependencies that you want to use to trigger your function 

This allows useEffect() to only run when the dependencies change and NOT WHEN THE COMPONENT RE-RENDERS 

If the dependencies array is empty, useEffect will only run the first time that the component renders. 

**You do not need to add state updating functions as dependencies (React guarantees those never change, so they don't need to be added as dependencies)
**You don't need to add built in APIs or functions like fetch or localStorage

We can also have a "cleanup function" in our useEffect().
  -Looks like this: 

  useEffect(() => {
   console.log("this is useEffect");

   return () => {console.log("This is the cleanup function")}
  }, [])

  -The cleanup function will NOT run on the first render. So we'd only get "this is useEffect". We're going to see the cleanup function AFTER that first render. So on every subsequent re-render. 


*************************
------Debouncing-----
*************************
-Programming practice that makes sure time consuming tasks don't fire so often. 

-For example: You're checking if a password/username is valid. Instead of checking on every keystroke you could wait for the pause that happens once a user stops typing for a few seconds. 
  -This will make the page faster because you're invoking a function less. 


*************************
------useReducer-----
*************************

-used for managing more complex state. 
  -multiple states, multiple dependencies, etc. 
  -If you are updating state based on another state, it's helpful to use useReducer 

-Can be used to replace useState
  -Many times you'll just use useState, but in some situations it'll be better to use useReducer 

-Example: 
  We have an email input that also needs to be validated. 
  We could definitely go the useState route and manage both pieces of state separately, but really these things are linked

How it works:

const [state, dispatchFunction] = useReducer(reducerFunc, initialState, initFunc);

-state = state snapshot used in the component re-render/evaluation cycle
-dispatchFunct = A fn that can be used to dispatch a new action [i.e. trigger an update of the state]
-reducerFunc = A funct that is triggered automatically once an action is dispatched (via dispatchFunct) -- it receives the latest state snapshot and should return the new, updated state. 
    -It's like an updated form of useState 
-initial state = the initial state (less important)
-A function to set the initial state programmatically (less important)


*************************
------Context API-----
*************************

-In some cases you'll pass down props through several components. 
-This can be unnecessarily complex. 
-For example: maybe you have an e-commerce website that requires a login in order to buy something. You'd want to be able to share that login state around the app (In the check out section, for example)
  -There might not be a direct connection between two components. 
    -one may not be the child of another 

-Context is behind the scenes state storage
-You use it by wrapping everything you want to have access to this state in a context component. 
  -Create the component by using React.createContext() and export it so it can be imported in other files
    -This function will hold your state 
    - const AuthContext = React.createContext({     <---can call it anything, but i'm using "AuthContext" as an example
      isLoggedIn: false 
    })

    -Then you'll wrap anything that you want to have access: 

    const App = () => {

      return (
        <AuthContext.Provider value={{isLoggedIn: false}}
          <Header/>
          <Main/>
          <Footer/>
        </AuthContext.Provider>
      )
    }

    -Now the Header, Main, and Footer components can consume that global state. 
    -To consume the state you can wrap the components that you want to use inside an <AuthContext.Consumer>

    ***You should use Context when you're FORWARDING data through several components.
    
    ***Context isn't optimized for high frequency changes

*************************
------useContext Hook-----
*************************
-This is the easiest way to use context. 
-You import useContext at the top of the component file and then you can pass your context to the useContext hook: 
  import {useContext} from 'react'
  import MyContext from  './MyContext'
  
  const SomeComponent = () => {

    const ctx = useContext(MyContext)

    return (
      {ctx.isLoggedIn}
    )
  }


**********************************
------Rules for React Hooks-----
**********************************
-You can only call hooks in React Functions 
  -React component functions and custom hooks are used INSIDE the component function or custom hook
-On call hooks at the top level.
  -Don't call them in nested functions 
  -Don't call them in block statements
-useEffect always add everything you refer to inside of useEffect as a dependency. 
  -if you refer to some setter function inside, then you should include it as a dependency so you only rerender when that data changes.


**********************************
------How does React work?-----
**********************************

-React is a js library for building user interfaces
-It's all about components 
-React DOM is the interface to the web
  -Components go to React DOM and that's what the user sees

-Props: data from parent component
-State: internal data
-Context: component-wide data 

-React tells React DOM what to render to the screen. 

-Virtual DOM
  -React looks at the component tree and then looks at the virtual DOM and updates a component if there are any changes
  -Re-evaluating a component isn't the same as re-rendering the DOM
    -Components re-evaluate when props, state, or context change
  -The real DOM isn't always changed 
  -React looks to see what exactly has changed so it only changes what is needed. This makes it much more performant. 
  -If the parent component function runs, so too will the child component functions! 
    -This is true even if the child component doesn't itself have any changes...the parent component rerendering is enough to trigger a reevaluation of the child component
    -This doesn't mean that it will trigger a change to the real DOM though
      -Is this bad??
        -Wouldn't this cause massive performance issues in a big app?
      


****************************
------React.memo-----
****************************

-This is a way to prevent unwanted renders of the DOM
-This only works for functional components 
-used on child components
-memo tells react to look at the props a component receives and only to rerender IF the props changed. 
-If the parent component changed, but the props for the child components didn't then those won't render again. 
-Why shouldn't we use this on all components?
  -This optimization comes at a cost...
    -It makes react compare versions of the components which takes time.
      -So sometimes if you have a component tree that has lots of child components and a parent that is getting rerendered...in this case memo can help out a lot! 
-The problem is that if the props contain objects they will no evaluate like we might think because objects are not primitive values in JS 
  -Primitives are: numbers, strings, booleans, bigint, symbol, null, and undefined
  -These will work when you compare them like: 
    false === false  ---> returns true because we're comparing two primitive values
    "hi" === "hi" ---> returns true
    12 === 12 ---> returns true

  -HOWEVER... [1,2,3] === [1,2,3] ---> returns false because an array is not a primitive value
    -This is because these two arrays point at different memory locations so they're not seen as being the same. 

****************************
------useCallback-----
****************************
-Stores a function across component executions 
-This will evaluate the function versions like we want them to be evaluated...if nothing changes then we want the component to not rerender. 
  -This is similar to having two arrays that point to the same place in memory: 
    let arr1 = [1,2,3];
    let arr2 = arr1; <--- this means they're both stored in the same memory location so JS evaluates them as the same. 

-to use useCallback we wrap the func that we want to be evaluated and we also have to give it an array of dependencies (if needed), or we pass an empty array (like useEffect)




*************************
------ Random Learning-----
*************************

.env files: these allow you to set "environment variables" in a plain text file and then reference them in other parts of your code. This is nice because it can allow you to hide bits of data that you don't want others to have access to, like API keys. 
  you can use the dotenv package to manage these files.  
  Some hosting platforms will have their own ways of hiding these files. 
  when using github, use a .gitignore file to ignore your .env file so it doesn't get synced to your github


*************************
------Algo Practice-----
*************************

Linear Search:
  -Go through an array of elements one by one to see if an element exists 

Problem to Solve: 

  Linear Search Exercise
  Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

  My Solution:
    const linearSearch = (arr, number) =>{
    let returnVal = -1;
    for(let i = 0; i<arr.length; i++){
        if (arr[i] === number){
          returnVal = i;
          } 
      }
      return returnVal;
    }

    This can be simplified...
      - const linearSearch = (arr, val) => {
        for(let i = 0; i<arr.length; i++){
          if(arr[i] === val){
            return i;
          }
        }
        return -1 // this is if we DON'T find a match. 
      }

Binary Search: 
  -Works on sorted arrays only! 
    -Takes an array...looks at the halfway point...checks how that value compares to our searching criteria...and continues to divide in half 

    -Ex: Let's say we've got an array of numbers from 1 - 1000 and we want to see if the number 600 is inside it. 
      -With linear search you'd have to perform 599 searches to get to the desired number 
      -With binary search we immediately start at the halfway point (500) and see if the halfway point (500) is greater than or less than our input number of 600
      -This will dramatically decrease the amount of searches we need to perform to find our input number 


*************************
----Data Structures-----
*************************
-Data structures are collections of values, the relationships among them, and the functions/operations, that can be applied to them
-Different DS excel at different things, some are specialized, others (like arrays) are more generally used. 
-The more you code the more likely you'll need to use one of these DS

*************************
----Class Syntax-----
*************************
-In ES2015 Javascript created a class keyword to better support object oriented programming (OOP)
-What is a class? 
      -A blueprint for creating objects with predefined properties and methods 
      -JS doesn't REALLY have classes...it's not really object oriented. 
        -Class syntax just makes it easier to define class like structures 
      -classes are actually special functions 
-The class keyword: 
 
  class Student {    <---- use uppercase 
    constructor(firstName, lastName){
      this.firstName = firstName; 
      this.lastName = lastName;
    }
  }

  let firstStudent = new Student("Ben", "Daniels") <--we use the "new" keyword to create a new student object
  let secondStudent = new Student("Bill", "Daniels")

-When we define the class it doesn't really do anything...it's just creating the blueprint to create the object. 
-Inside of the constructor "this" refers to individual instance of the class. 
  -When we make a new student the constructor is saying THIS particular object will have a firstName property that gets it's value from the one passed into the function.
  -These don't have to match in name. 
  -We could have a year parameter that we pass into the constructor and set it's value equal to the student's grade property

      constructor(firstName, lastName, year){
        this.firstName = firstName; 
        this.lastName = lastName;
        this.grade = year; 
      }

  -When we create a new student we will get an object with 3 properties: firstName, lastName, and grade...each with the values corresponding to the connections that we establish in the constructor function. 

-Instance methods:
  -These are methods that work on the individual instance of the class. 
    -Our firstStudent, for example 
       constructor(firstName, lastName, year){
        this.firstName = firstName; 
        this.lastName = lastName;
        this.grade = year; 
      } 
      fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`
      }
  
  -If we run this method on firstStudent we'll get back: "Your full name is Ben Daniels" because that's what we passed into it. 

-Class Methods
  -The static keyword defines a static method for a class. 
  -These are called often to create utility functions for an application
  
  -Let's say on our Student class we could have a method that enrolls students. 
    -This isn't related to the particular instance of the class (i.e. the individual student objects)

  To use it: 

  -add the "static" keyword and declare a function:

      static enrollStudents() {
        return "enrolling students"
      }
      
  -This is not a method you can call on an instance: 
   you can't do firstStudent.enrollStudents() <-- won't work! 

  -You have to use this method on the class itself
      Student.enrollStudents() <---this works because "Student" is the actual class.

  -You can use the instances as parameters to a class method. 
    -If you made a class that took in two points and had a class method that would calculate the distance between two points you could call that method with any points that you had made in order to get their distance apart. 


*************************
------Static Arrays-----
*************************

 -Static arrays are of fixed size. 
 -You cannot add new values to static arrays
 -You can remove values, though
 -These are ordered arrays where each value has an index. 

-To insert a value into a static array you end up shifting the previous values of the array. 
      -Ex: if we have an array that is three elements long ... [5,6,7] and we remove the last element ... [5,6,[removed]] and we want to insert
      a 4 into that array in such a way that the elements all stay in numerical order it means that the values 5 and 6 need to be shifted over 
      by one index. 
      -The shifting would have to happen FIRST before inserting the new value into the array. 
        -This isn't too much of a problem if the array is small...but if it's a large array then the "Big O" becomes less performant
          -It's an O(n). <--- Linear Time
        -Adding to the end of an array is way more performant like O(1) <---constant time. 


*************************
------Dynamic Arrays-----
*************************

-A dynamic array doesn't have an initialized size. 
  -In some languages an array will be initialized to a certain size even if there aren't values inside of it. 
-Pushing to an array increases its size and adds element to end of array.  
-Popping will remove the last element. 
-When we add a value to an array we actually are creating a new array in memory so the array elements can be stored contiguously in memory. 
  -When the new array is created we deallocate the memory for the old version of the array. 
  -When new values are added the size of the array is actually doubled, giving us extra room if needed.
    -Why is the size doubled? When we create a new array it's O(n) but if we add to the new array it's O(1).

*******************************
------Array Time Complexity-----
********************************
Read/Write the xth element: O(1)
Insert or Remove last element: O(1)
Insert or Remove middle element: O(n)  <---- this one involves shifting elements...hence it takes more time

*************************
------Pointers-----
*************************

-A pointer is an object that stores a value
-A pointer is helpful in many algorithms...frequently we need to keep track of values in order to check if some set of circumstances are true. 
  -When we iterate through an array we are looking at each value...so we have a pointer there looking at each value. 
-Sometimes we may want to have multiple pointers 
  -Maybe we're looking at both ends of an array at the same time...here we'd need to keep track of the first AND last values of the array so we'd need two pointers.


*************************
------Linked Lists-----
*************************

-A linked list is a DS that is ordered [like an array]
  -However an array has indices 
  -A linked list does not. 
-It has a head, a tail, and a length property
-It's made up of nodes, each nodes has a value and a pointer to the next node. 

Example: 4 -> 5 -> 6 -> null

-It's just a list pointing to the next one. 
-Like a skyscraper with no elevators...we have to go floor by floor 
-The "singly" part means it only has a pointer pointing to the next node. 
-If we want to search we have to go node by node 
-REALLLLLY easy to insert into, because we just create a new node and make that node the new head
  -Unlike an array where you'd need to shift every value into a new index. 
-"head" is just a pointer
-next is also a pointer
-Random access is not allowed!

Creating a Linked List with different methods: 

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
      var newNode = new Node(val);
        
      if (!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
        this.length++;
        return this;
      
    }
    pop(){
    if (!this.head) return undefined;
    let current = this.head;  
    let newTail = current;   
   
    while(current.next){
       newTail = current; 
       current = current.next;
         
    }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
      return current;
    }
    shift(){
        if(!this.head){
            return undefined;
        } 
        let currentHead = this.head; 
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
        unshift(val){
        let newHead = new Node(val) <---create new node
        if(!this.head){    <---check if there is a head node already...if not then make the new node the head and the tail
            newHead = this.head;
            this.head = this.tail;
        } else {  <--- only runs if there is already a head node. 
            newHead.next = this.head; <---set the new node's next to the value of the head 
            this.head = newHead  <---now actually set the new node as the head 
        }
       
        this.length++; <--- increment the list 
        return this; <--- return the list
    }
}


let list = new SinglyLinkedList()
list.push("hello");
list.push("there");
list.push("friend");


-This data type has a value and a pointer 
  -We create "nodes" when we're constructing a linked list. 
  -These nodes are connected to one another through their pointers
-Let's say we have 3 nodes with the values: "Red", "Green", and "Blue"
  -These are currently unconnected nodes (not linked).
-We can connect them by connecting them through their pointers 
  -Ex: ListNode1.next = ListNode2 <--- Here the .next property points at the next list node
-Connecting them via pointers allows the computer to store the date in a random order and we can access them in a sort of sequential order that we define. 
  -Arrays, on the other hand, are stored in memory in the same way that we define them. 
-To iterate through a linked list is going to be O(n) because as the size grows so does the time it takes to go through it. 
-In a linked list we are keeping track of the head and the tail of the linked list. 
  -First node and last node
  -We can create pointers to keep track of where the head and the tail are 
  - head = ListNode1
  - tail = ListNode3 
-If we wanted to add a node we could do this
  - tail.next = ListNode4
  OR we could do this
  - tail = tail.next
-Adding a node is O(1) or constant time 
-Removing a node is also O(1) so long as we have access to the previous node
  -If we have 3 nodes and we want to remove node 2 
      -head.next = head.next.next <--points at the 3rd node
      -Initially head.next points at node 2 and we set it to node 3
      -Now node 1 points at node 3. 

**********************************
------Iterating over an object-----
**********************************
-You can't use a For...Of loop for an object, but if you use a For...In loop it will iterate over the object's keys! 

  const scores = {
    Ben: 90,
    Nick: 94,
    Joe: 89
  }

  for (let name in scores) {
    console.log(name);
  }

-Another way is to use the Object.keys method, and pass it your object 
  -Object.keys(scores) will return an array of all of the keys in that object
  -Object.values(scores) will return an array of all of the values in that object

**********************************
------AJAX-----
**********************************
-stands for async javascript and xml
-Making requests behind the scenes 


**********************************
------Web APIs-----
**********************************
-APIs are an exposed endpoint that respond with data 
-They usually respond using JSON
-Allow us to interact with a dataset 
-Large companies, like Twitter, sometimes have APIs to interact with

**********************************
------JSON-----
**********************************
-A format that data will often come in 
-It's based on JS syntax in the key/value pair...except now each key must be a double quoted string. 
  -values can be strings, numbers, booleans, etc. 
-JSON can be parsed into many different languages. 

-In JS we use JSON.parse(data) where data is the json data sent to you. 
  -This will allow us to work with JSON just like a regular object in JS

-The opposite can happen...if we have a JS object and we need to send it as valid JSON we use the JSON.stringify(object)
  -This will allow you to go from valid JS to valid JSON

**********************************
------HTTP Header-----
**********************************
-Like metadata 
-Tells us tons of extra information about the request 
-Sometimes APIs are going to ask us to send a certain type of header in order to interact with the data in certain ways
  -An API might want you to tell it what format the data comes to you in (Html, JSON, etc.)

**********************************
------More about Fetch-----
**********************************
If you set up your fetch like this :

fetch(url)
  .then(res => {
    console.log("success", res)
  })
  .catch(err => {
    console.log('error', err)
  })

  the response (res) will likely not return any meaningful data, because it returns immediately after any headers are sent
  So you'll likely just get a 'readable stream' in the body of the response. 

We have to use res.json() to turn this into meaningful data...but this ALSO returns a promise so we have to add another .then in order
to finally get to the actual data


so like this: 

fetch(url)
  .then(res => {
    res.json().then(data => console.log("Json done", data))
  })
  .catch(err => {
    console.log('error', err)
  })

  WE can refactor to this: 

  fetch(url)
  .then(res => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch(err => {
    console.log('error', err)
  })

    this way everything is a little more "flat" and readable...you can see the steps that we go through better


    we can write this in an async way: 

    const fetchReq = async () => {
      try {
      const res = await fetch(someUrl);
      const data = await res.json();
      console.log(data);
      } catch (err) {
        console.log("error!", err)
      }
    }

**********
--Axios--
**********

-Axios is a library for making http requests 
-It makes fetch easier 
-To use it on the front end, we include the cdn link in our html 

-Then we can use it in our js file
    -We use it like this:
    axios.get(someUrl)
      .then(res => {
        console.log("response", res)
      })
      .catch(err => {
        console.log("err", err)
      })
-This gets us data right away! 
-We just need one .then because the axios.get returns a promise.

-We can use async/await like this

const starWarsPerson = async () => {
  try{
    const res =  await axios.get(swapiUrl);
    console.log(res.data)
  } catch (e) {
    console.log("error", e)
  }  
}

starWarsPerson(); <---we have to call the function 


**************
--Prototypes--
**************
-A prototype is a mechanism for object inheritance in JS
  -So how things get properties from one another 
-In MDN we see a bunch of array.prototype.SOMETHING
-When we look an object in JS (which includes arrays...because arrays are also objects in JS) we can add methods to the object.
  -However there are a bunch of built in methods for objects/arrays that we don't have to define each time. 
    -Like .push() is an array method that we can use without having to define it for each array that we create. 

-we can see __proto__ under the array or object when we inspect it we can see it has all of the built in methods there. 

-We can see the proto on the body of a webpage 
  -It has a bunch of methods and properties 

-Primitive data types (strings, booleans, etc) also have prototype methods 

-If you define methods on the prototype they will be shared among objects...so if you add a method and check for strict equality they will return 'true' because they're on the prototype instead of the individual objects themselves.


*****************
-- new keyword --
*****************
-new is an 'operator'

***************************
-- constructor function --
***************************

-the constructor is a function that creates objects
-We use an uppercase letter to denote a constructor 

function Color(r,g,b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

-We don't just use the previous function alone when we're using a constructor...we use it in conjunction with the "new" keyword
  -What that does is creates a blank js object, links this object to another object, returns the newly created object from step 1 as the 'this' context, returns 'this' if the function doesn't return its own object. 

-IF we don't use "new" then 'this' will not refer to the object, but to the window object

****************
-- JS Classes--
****************
-This is an easier way to write methods on the prototype separately from the constructor function 

class Color { <-- again we capitalize
  constructor(r,g,b){
    console.log("inside constructor")
    console.log(r,g,b)
  }
}

-When we make a class we always use a constructor function that will run when we create a new class
-You have to use the 'new' keyword, just like with constructor functions!

const color1 = new Color(244, 233, 21)

class Color { <-- again we capitalize
  constructor(r,g,b, name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
}

const color2 = new Color(244, 63, 89, "Tomato");

if you look at it in the console you will see a new object with all of these properties. 

-If you want to add a method...do this:

class Color { <-- again we capitalize
  constructor(r,g,b, name){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet(){
    return `Hello from ${this.name}`
  }
}

-This will add the method onto the prototype!!




**********************************************
----Classes, inheritance, Super keyword -----
**********************************************

-Let's say we make a class of Cat

class Cat {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`;
  }
  meow(){
    return 'meeeeeow'
  }
}

we can make a new cat object...

const chucky = new Cat(chucky, 1)

and we had a Dog class

class Dog {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`;
  }
  bark(){
    return 'woooooof'
  }
}


We have a lot in common here so we can pare it down by adding an Pet class and keeping the common elements together...

class Pet {
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  eat(){
    return `${this.name} is eating!`;
  }
}

class Dog extends Pet{
  bark(){
    return "wooof"
  }
}

class Cat extends Pet{
  meow(){
    return "meeeeeow"
  }
}

The cat and dog classes now work (without a constructor function) because they
extend the Pet class. 

You can also make methods on the dog or cat classes that will overwrite the ones on the parent class. 


so we can say 

class Dog extends Pet{
  bark(){
    return "wooof"
  }
  eat(){
    return "The dog scarfs its food"
  }
}


so if we call the .eat() method on an object made with the dog class it will return the eat method from the dog class and not the pet class. 

If we want to add a constructor into our classes and pull data over from our parent class we can use the "super" keyword



class Cat extends Pet{
  constructor(name, age, livesLeft = 9){
    super(name, age); <--- this will look at the Pet class and pull those values in.
    this.livesLeft = livesLeft;
  }
  meow(){
    return "meow"
  }
  eat(){
    return "The dog scarfs its food"
  }
}


**************
--terminal--
**************

-PWD--print working directory...where are we in the file system?

-LS--list files in the current directory 

-Mkdir--make a directory

-touch--create a file

terminal: text based interface to computer
shell: program running on the terminal 
bash: popular shell (bash)
zshell: popular shell (zsh)
  -newer than bash 

path: where something exists on a computer directory 

relative path: the path to a location relative to where you are currently in the file structure like this  ../../Pets

absolute path: gives the exact path to a location...can be accessed from anywhere on the computer...it will start with a / 
  /Users/BenDaniels/Documents/WebDevelopment


-in the terminal if you type "man" followed by a command you'll get a manual for that particular command

rm -- removes a file...permanently! 
rmdir -- removes empty directory 
rm -rf --removes directory even if it has stuff in it






*******************
----- Node  -----
*******************

-you can type process and see a giant object that has tons of methods 
-the process object 
-process.argv will return an array that has several items, the first is the absolute path to the node process that was initiated, the second item is the path to the file that's running, and any command-line arguments provided when the process was initiated. 


-FS -- stands for "file system"




*****************************
-----  Module.exports -----
*****************************

-this allows us to share code between files using javascript. 

If we have some math operations like this in a file called math.js:

const add = (x, y) => x + y;
const square = x => x * x; 

and we wanted to share them with another file we can use this: 

module.exports.add = add;
module.exports.square = square;

now in another file we can require math in like this: 

const math = require('./math')

console.log(math.add(2, 4));
console.log(math.square(4));

...we could also destructure it like this 

const {add, square} = require('./math');

There are several other ways to do this...
just use "exports";


exports.square = square; <-- does the same thing

***************************************************
-----  require an entire directory -----
***************************************************
if you want to require an entire directory you just require it and use the file path. 
  const animalShelter = require('./shelterAnimals')

****************************************************
----- REST  -----
***************************************************

-Stands for REpresentational State Transfer
-It's a architectural style for providing standards between computers that makes it easier for them to communicate
-Some of these standards include: 
  -Separation between client and server: the client and server can be implemented separately.
  -Stateless: The server doesn't need to know anything about the client's state or vice versa 

-Each of our HTTP methods should match what it says it does...
  -Get: request a resource 
  -POST: submit an entry to a resource
  -PUT: replace all representations of the target resource
  -DELETE: deletes a specific resource

-HTML forms cannot send a Patch...you can only GET or POST

****************************************************
-----  Express.js  -----
***************************************************
-When you have an app.use() in express it applies to everything. 
-When you request anything other than GET you should redirect the user
so they're not getting stuck in a POST, PATCH, or DELETE request



****************************************************
----- Why use a database?  -----
****************************************************

-this allows us to have data that persists. 
-Makes data more manageable. 
-Provide easy tools for sorting, finding, querying data
-generally scale well. 
-SQL vs NOSQL

-SQL we predefine a schema of tables 
  -Everything conforms to a pattern 
  -Think of an excel spreadsheet 

  -We define individual tables like "posts" or "comments"
    -We'd create a column that references another table...so they're related to one another

-NOSQL can be different types of data schema 
  -Document
  -Graph
  -Key value 

-The common trait is they don't use tables 
-Mongo is a document based database 
  -There is more flexibility because there isn't a predefined schema.
    -The documents can contain the same or totally different fields



****************************************************
----- Mongo DB  -----
****************************************************

-Data is stored in BSON...which is similar to JSON, but much smaller 
and has more data types 
  -Date, for example, isn't allowed in JSON, but is very useful in a DB

INSERT:
  -When we insert, we will insert into a "collection".
    -If we had an animal shelter database, we could create a collection called "dogs".
  -If we insert to a collection that doesn't exist, the collection will be created automatically
  -We use insert by using the .insertOne() method and passing in an object with the properties we want to include for that individual document
    -db.dogs.insertOne({name: "Charlie", breed: "Corgi", age: 3})  <--- like this
      -If there isn't a dogs collection already, it will be created. 
    -When you create an entry into a collection, that entry will get an objectId, which will be unique.
      -You can create your own objectId, but if you don't it'll be created for you. 
  -Inserting multiple: you can just use .insertMany() 

READ:
  -If we want all docs in a collection we use .find()
    -This gives us everything, which is nice, but not common
  -If we pass in an object with some properties that we want to look for it will return all the matches.
    -.find({breed: "Corgi"}) <--- case sensitive 
  -So .find({properties}) will show one or more 
  -There's also a .findOne()...this will find the first entry in the collection that matches.
  -You can also pass in multiple values...
      -db.dogs.find({isCatFriendly: true, age: 7})
        -This finds all cat friendly dogs that are also 7 years old.

UPDATE: 
-When we update we need to first FIND the thing we're updating and then update it! 
  -the .updateOne() takes two arguments.
    -The first takes some properties that will match our target document. 
      - .updateOne({name: "Billy"}, )

    -The second argument will make the changes
      -We use $set to set some properties on the object and then pass the values that we want to overwrite
      .updateOne({age: 4}, $set {name: "Tommy"})
          -This will replace the name of whatever matched age:4 first
        -You can also use this to ADD a property to a document! 
    -.updateMany() will do the same thing, but to multiple documents. 
  
  -We can use multiple operators when we're updating! 

  -When we update successfully it will also show us how many documents that we're altered. 

-Other operators aside from $set:
  -$currentDate

REPLACE:
-Replace will keep the id the same, but it will overwrite everything in that document. 


DELETE: 
-To delete we use .deleteOne({properties to match})

-.deleteMany({properties}) will find all matches and delete them
  -If you pass in an empty object it will delete EVERYTHING 


More general Queries:
-What if we want to find documents where the values are within a range? 
  -Like if we want to find people age 10-15 years? 

-If we want to access nested properties: 
  {name: "Charlie", age: 4, personalityTraits: {isCatFriendly: true, isChildFriendly: true}}

  -If we want to search to see if a dog is child friendly we have to look inside personality traits first!
    -We do that, like this:
      -db.dogs.find({'personalityTraits.isChildFriendly': true})
        -It's like accessing properties on an object...isChildFriendly is a property of personalityTraits
    
-query operators
  comparison: 
    $gt : greater than
    $lt: less than
    $gte: greater than or equal
    $lte: less than or equal 
    $ne: not equal
    $eq: equal

  Example: 
    -db.dogs.find({age: {$gt: 5}})



****************************************************
----- Mongoose  -----
****************************************************
-This is a way for us to interact with a Mongo database
-It's an ODM : Object Data Mapper
-Driver that connects to mongo and provides ways to model application data and define
schema.
  -Makes building complex queries in JS easier. 

-to begin we add the mongoose package and require it in
  const mongoose = require("mongoose")

-we connect by using mongoose.connect() and passing in the default port.
-We add a .then and .catch to handle connection and errors.
  -Like this: 
  mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("connected!!");
  })
  .catch((err) => {
    console.log("error!!");
    console.log(err);
  });


-In mongoose we create "models"
  -these are JS classes that have predefined methods that we can use 

-First we define a schema 
  -This is a mapping of collection and defines the shape of the docs in that collection
  -We can define what data types should be used and what the collection should look like
    -Let's say we have a db of movies where we want each movie to look like this:
      {
        title: "Amadeus",
        year: 1986,
        score: 9.2,
        rating: "R"
      }
    -Our schema might look something like this: 
    
  const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score, Number,
        rating: String
      }
    );

mongoose.model("Movie", movieSchema);
      --> this will make a collection called "movies"...lower cased and pluralized 

we save this to a variable: 

const Movie = mongoose.model("Movie", movieSchema);

This will allow us to create new documents...like this 
      const amadeus = new Movie({
        title: "Amadeus",
        year: 1986,
        score: 9.2,
        rating: "R",
      });

-When we insert a single document we need to call the .save() method...
 However, if we want to add multiple documents we use the .insertMany([{title: "Scream", year: 2001}, {title: "Scream 2", year: 2002}])

  -This will return a promise and it doesn't need a .save() to create the docs to the database

-FINDING in mongoose
  -we may have to wait for mongo in order to find something. 
  -Queries aren't really promises, but we can treat them in a similar way as we would a promise. 

  -we can use the .find() method, just like in mongo..
      -We can pass in params to the method to narrow down our searches  

  -findOne() will find the first match to the query params

  -findById('id') will find any doc where the id matches the param

-UPDATING in mongoose 
  -when we update something, it doesn't show us the updated data...it'll just show us that it WAS updated

  -.updateOne() will update the first match
      -in mongoose we don't have to use the $set 
  -updateMany() will update more than one document
      ex: 
      Movie.updateMany({title: {$in: ['Amadeus', "Stand By Me"]}, {score: 10}).then(data => console.log(data))
  -There are many updating methods

  -.findOneAndUpdate({title: "The Iron Giant"}, {score:7.0}).then(m => console.log(m))

-DELETING in mongoose 
  -deleteOne({title: "Amelie"})
  -deleteMany({year: {$gte: 1999}})
      -deletes everything that matches params
  -findOneAndDelete({title: "Alien"})
  

-SCHEMA 
  -We can give mongoose lots of info about each of our schema properties. 

      We could do this: 

        const productSchema = new mongoose.Schema({
          name: String,
          price: Number
        })

      But we could do it this way also, which allows for more info 

      const productSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
        }
      })

  -the "required" property will make that a requirement for making a new document
  
  const bike = new Product({ price: 599});
  bike.save()
      .then(data => {
        console.log("it worked");
        console.log(data)
      })
      .catch(err => {
        console.log("error!");
        console.log(err);
      })

      -This will throw an error because we didn't include a name! 
  
-Adding default values
       const productSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          default: false   <--- setting this to default to false
        }
      })

-We can add so many methods to make our lives easier: 
      -minlength
      -maxlength
      -uppercase
      -lowercase
      -trim 
      -enum: this one will see if the created document field conforms to an array of values that we define as allowable:
          -For example, if we had a shirt that only came in "S", "M", or "L"
            -We can make sure that the created doc only allows for those values

 -An example using maxlength:
       const productSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
          maxlength: 20 <--- we're only allowing the name to be 20 characters 
        },
        price: {
          type: Number,
          default: false  
          min: 0 <--- only positive values will be allowed
        }
      })

-We can also make some property an array of values...
    const bike = new Product({
      name: "Bike Helmet", 
      price: 199.99,
      categories: ['cycling', "safety", "sporting goods"]  <--- This property now has an array of values
    })  

-If we need to have nested properties...like if we had a store and we wanted to see the quantity of an item online versus in the store: 
    const productSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
          maxlength: 20 
        },
        price: {
          type: Number,
          default: false  
          min: 0 
        },
        qty: {        <--- Here we set up an object where the property has sub-properties
          online: {
            type: Number,
            default: 0
          },
          inStore: {
            type: Number, 
            default: 0
          }
        }
      })


If we replace a value that has validation from the initialization, that value will not get rechecked to see if it conforms to our validation, unless we tell it to recheck it.
    -To do this we need to use the runValidators: true when we update the item. 

CUSTOM VALIDATION MESSAGES: 

to create a custom validation message we can add it into our schema like this: 

      const product = new mongoose.Schema({
        price: {
          type: Number,
          default: false, 
          min: [0, "Price must be a positive number."] <--- here
        }
      })

ADDING METHODS to instance: 

-We have built in methods like findOne(), updateMany(), etc.
  -we can define our own built in methods 
      productSchema.methods.greet = function() { <---use a reg function expression not an arrow.
        console.log("Hello!")
      }


STATIC METHODS
  -This lives on the model, not the individual instance 
  -This is a way of updating everything. 
  -We use this when we want to update everything, adding a method to all instances. 


Mongoose VIRTUALS:
  -add properties to a schema that don't exist in db 
    -We might have a db where each user has a first name and last name
    -In the schema we might want to have access to a "fullName" property without adding it to the database

      adding a virtual: 
        -make a schema: 
          const personSchema = new mongoose.Schema({
            firstName: String,
            lastName: String
          })
        
        personSchema.virtual("fullName").get(function (){
          return `${this.firstName} ${this.lastName}`
        })

      const Person = mongoose.model("Person", personSchema);



bumps

****************************************************
----- Mongoose Middleware  -----
****************************************************
-Middleware is software that provides services to other software applications
-mongoose gives us the .pre and .post middlewares to do things before or after something happens. 
    -For example, we might want something to happen after we save, so we can use the .post to make that happen



****************************************************
-----  ZTM Algo Class -----
****************************************************
ARRAYS
  -In JS arrays are dynamic: they expand as items are added
      -static arrays have a fixed number of elements
  -Building an array from scratch...
      class MyArray {
        constructor(){
          this.length = 0;
          this.data = {}
        }
        get(index){
          return this.data[index]
        }
        push(item){
          this.data[this.length] = item;
          this.length++;
          return this.length
        }
        pop(){
          const lastItem = this.data[this.length - 1]
          delete this.data[this.length-1];
          this.length--;
          return lastItem;
        }
      }


****************************************************
-----Express Middleware  -----
****************************************************
-in express middleware is just a function that runs between the request and response

-REQ --->  MIDDLEWARE ---> RESPONSE

-They can be standalone functions or they can be strung together in order to do more complex things

-Express in and of itself is not very functional (as the docs say explicitly), but the middleware is what make it powerful

-middleware have access to request and response objects.

-Some middleware come built in like route handlers

-To use a middleware you use the app.use("middlewareHERE").
  -This will use the middleware anytime a request comes in

-Morgan is an example of middleware that will log out how long a request took

-We need to tell middleware to go on to the NEXT middleware and chain them together.

-app.use will run on all requests.
  -this is called for ALL requests
  -However, this middleware won't call the next middleware

  app.use((req, res)=> {
    res.send("Hijacked by my app.use!")
  })

  -Here every time you send a request you'll get this as a response ^^^

  app.use((req, res, next)=> {
    console.log("This is middleware");
    next();
  })

  if you don't add a next() the whole process will stop...it won't find any endpoints or handle any routes in other app.get() or whatever...it just stops everything

  if you have this

   app.use((req, res, next)=> {
    console.log("This is middleware");
  })

  app.get("/dogs", (req, res)=>{
    res.send("woof")
  })

  Since we don't have a next() the program will console log "this is middleware", but won't send a response even if you send a get request to '/dogs'

-To send a 404 we can just add an app.use() at the very end of the express file, after all of the routes, so that it will run if we don't find any endpoint. 
  you can also add a res.status(404)

-adding middleware to specific routes:
  -if you want some function to run only on a specific route you can define a function and use it as a callback on the route.
  -Each request type can use callbacks

    const someFunction = (req, res, next) => {
      console.log("A custom middleware")
      next()
    }

    app.get("/bongos", someFunction, (req, res) =>{
      res.send("Bongo!")
    })

      -Here we will get the console.log() happening because we called it as a callback function in the app.get() request

      bump

****************************************************
----- Express Error Handling  -----
****************************************************
-There are many different types of errors in js 
  -syntax, incomplete data, connection problems, etc. 

-We want to think about errors that might happen before they pop up 
  -Like form validation 
    -what happens if you need a username and password and nothing is entered?

-express has a built in error handler
  -responds with a status code 500 (generic server side error)
  -gives a stack trace 

-If you want to write an error handler you use it at the end of all of your app.use() middleware

-Express error handler middlewares will always have four arguments: 
    app.use((err, req, res, next)=>{
      console.log("error!!");
    })

-If you define your own error handling and don't pass in a next()...you will not get any of express' built in handling.
    -IF you want to use it, you pass the error into the next()
        
        app.use((err, req, res, next)=>{
            console.log("error!!");
            next(err);
          })

          -This will log "error!!" and then log out whatever errors express finds and a stack trace. 

Async Error Handling:
 when we handle errors in an async function we need to make sure to pass the error into the next function and since we're async we can do this inside of a try/catch block 

Another way to work with async errors is to create a wrapper function that will take all of the async function in as an argument and then return a function with a .catch attached. This eliminates the need for try/catch in every route

        function wrapAsync(fn){
          return function (req, res, next){
            fn(req, res, next).catch(err=> next(err));
          }
        }

        app.get('/products', wrapAsync(async(req, res, next) =>{
          const { id } = req.params;
          const product = await Product.findById(id);
          if(!product){
            throw new Error ("product not found")
          } 
          res.render("products/show", {product})
        }))

****************************************************
----- relationships in Mongo  -----
****************************************************
-In many DBs the data is structured in a relational way
  -SQL is relational by nature. 

-One to Many relationship in SQL
  -when a single entity is associated with a number of other entities 
      -Users to Posts in a reddit app for example
        -Each user (one) can have many posts

-Many to Many relationship in SQL
  -when multiple records in a table are associated with multiple records in another table 
    -Ex: if we had a movie table and an actor table. Each movie has a cast and each actor also has starred in multiple movies 

-One to Few 
  -An example would be if a user has some addresses stored for making purchases. It's unlikely a user would have 100 different addresses, so it would be best to keep that data in the same document. 

-One to Many in Mongo
  -in order to tie two documents together we can use the ObjectID from the document you want to tie to. 
    -If you had a farm stand that sold different products and you were making an app that showed all the different farm stands in the area and their inventory you might want to have a document that looked like this: 

        {
          farmName: "Full Belly Farms",
          location: "Guinda, CA",
          produce: [
            ObjectID("24324294u49494494"),
            ObjectID("4834832tfc2849842"),
            ObjectID("444443332ff28488582"),
          ]
        }

        -Here we're referencing another document to populate our produce array.

bump
****************************************************
----- Express Router  -----
****************************************************
-A way to break our routes into separate files 
-Express router is a mini app
-You can extract all of the same routes into their own file and export them:

   ---file named shelters.js---

  router.get("/", (req, res) => {
  res.send("all shelters");
  });

  router.post("/", (req, res) => {
    res.send("create a shelter");
  });

  router.get("/:id", (req, res) => {
    res.send("view one shelter");
  });

  router.get("/:id/edit", (req, res) => {
    res.send("edit one shelter");
  });

  module.exports = router;

-In our index file if we want to have access to these files we do this: 

    const shelterRouters = require("./routes/shelters");

    app.use("/shelters", shelterRouters);

    This will prepend the "/shelters" to each of the routes in the shelters.js file. 

-This great because we can change the route names SUPER EASILY by just changing the app.use in our index.

- You can also define middleware in each of the routes files so that it only applies to that particular bunch of routes...VERY USEFUL
  -Maybe you want an /admin route...

  const express = require("express");
const router = express.Router();

      router.use((req, res, next) => {
        // using router will keep all these routes behind this middleware
        if (req.query.isAdmin) {
          next();
        }
        res.send("Sorry, not an admin!");
      });

      router.get("/topsecret", (req, res) => {
        res.send("this is top secret!");
      });

      router.get("/deleteeverything", (req, res) => {
        res.send("deleted everything!");
      });

      module.exports = router;

****************************************************
-----  Cookies -----
****************************************************
-it's a little bit of data stored in the browser
-cookies are a way to remember info about a user and to show relevant content to them over time.
-without cookies, we couldn't remember info about users...because HTTP is stateless. 
-every time you make a request, you send over the stored cookies. 
-This is info that might not yet be stored in a DB, but that we'd want a website to remember, like items in a shopping cart. 

  to set a cookie:

  app.get("/setname", (req, res) => {
  res.cookie("name", "Bob");
  res.cookie("animal", "shrimp");
  res.send("Ok sent you a cookie");
  });

  we can also use cookie parser to parse our cookies on all requests. This allows us to look at info from our cookies...for example:

  req.cookies will give us an object with the key/value pairs of the parsed cookies

-signed cookies make it so that the cookie remains in tact without any tampering
-Signing cookies is not about keeping them secret, but about maintaining their integrity


****************************************************
----- HMAC signing  -----
****************************************************
-Take a cookie or something that is signed and will encrypt your cookie or whatever you're signing.

-it takes the cookie or whatever and a secret key and uses a hashing algo to encrypt it. 

-Then it checks to see if the hashed value is the same on both ends so the cookie or whatever hasn't been tampered with. 

****************************************************
-----  Express Session -----
****************************************************
-This is another way of us keeping track of a user 
-We're trying to add into some statefulness into HTTP
-sessions are stored on the server, not in the browser (like cookies)
  
-problems with cookies
    -size limit
    -stored in browser
    -not as secure

-session data is stored in data store
  -this isn't a database! 

-the server sends back a session id as a cookie
-the server gets that session id on every request. 
  -then server can look up that session id in the data store

-!!!sessions are not unique to express!!!

****************************************************
----- Connect Flash  -----
****************************************************
-This is a package 
-It will flash a message to the user at some point in the session. 
  -Maybe you want a message for the user when they do something successfully


****************************************************
-----  Authentication -----
****************************************************
-authentication vs authorization 
  -Authentication is verifying you are who you say you are. 
  -Authorization: what a user is able to do. This happens AFTER you're authenticated 
    -See if a person is an admin, what privileges does the user have?

****************************************************
----- Storing Passwords  -----
****************************************************
-How do we store passwords?
  -DO NOT STORE PASSWORDS IN TEXT IN THE DATABASE!
    -No No No! 
  -You're screwed if anyone gets access to the db. 
    -People reuse passwords all the time, so it's a big deal! 

-Instead of storing the password
  -We hash the password. 
  -We're storing the hashed version of the password

-What's a hashing function?
  -A function in general that takes a variable sized input data and it spits out a fixed size output
    -The ending size is the same no matter if the passwords are different lengths

-How it works in practice:
  -A user provides a password and its hashed version is stored in the database.
  -When the user signs in with their password, the given password is hashed and checked against the stored hashed version in the database 
    -You're comparing hashed to hashed...you never store the actual password...ever! 

-hashing functions cont.
  -They're a broad group of functions 
  -not every hash function is suitable for hashing passwords. 
  -Hash tables and hashmaps use hashing functions! 

-Cryptographic hash functions 
  -It's a one way function that cannot be inverted. 
    -If someone gets access to the DB then it doesn't matter. They can't figure out the input through looking at the hashed password. 
  -How does a one way function work? 
    -Absolute value works like this: 
      -If you pass in a value you'll never know what the input was...there's always two options! 
        -Super simple example ^^^^ 
  -Small changes will result in giant changes in the hashed outputs 
  -Same input always yields the same output. 
  -Unlikely to have collisions (when two different inputs produce the same output)
  -The hash function is deliberately slow.
    -That way you can't brute force guess a password by guessing millions of different options

-Salts
  -This is an extra safeguard 
  -People use the same passwords across their accounts and people use the same passwords ('password', '1234', etc.)
  -So if we only use a hash function and we run through it the common passwords we could get access to some accounts, especially since so many people use the same passwords 

  Salts are a random value that is attached to your password. It makes your password even more secure. 
    -This changes the input to the hash which creates a radically different output.
  -If you hash 'password' you'll get something, but if you salt 'password' with 'dog', so 'passwordDOG' you'll get a massively different hashed value.

  
-Bcrypt
  -it's used to hash and store passwords
  -there are implementations of this in several languages
  -bcrypt.js can be used in the browser or node
  -the plain bcrypt package only works in node. 

  -bcrypt also can generate salts:
    bcrypt.genSalt(saltRounds, function(err, salt){
      do stuff here
    })

  -saltRounds will help to slow down the process. You pass in a number and it will slow it down. Recommended is 12 

    const hashPassword = async (pw) => {
      const salt = await bcrypt.genSalt(12);
      const hash = bcrypt.hash(pw, salt);
      console.log(salt)
      console.log(hash)
    }

    hashPassword();

-How do we check to see if our hashed and salted password is the same? 
  -Bcrypt has a method called 'compare' 

-Salts do not have to be secret, they just introduce randomness  

****************************************************
-----   -----
****************************************************
****************************************************
-----   -----
****************************************************
****************************************************
-----   -----
****************************************************
****************************************************
-----   -----
***************************************************
****************************************************
-----   -----
***************************************************

***************
-----   -----
***************

***************
-----   -----
***************

***************
-----   -----
***************



--bump

 */
