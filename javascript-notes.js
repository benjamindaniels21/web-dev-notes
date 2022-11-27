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

-syntatic sugar for promises 
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






bump





*/
