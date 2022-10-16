/*
----Web Dev Notes----


-----Add methods to object-----
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

----‘This’ Keyword----
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



-----The Window-----
-This is the global object 
-As you declare functions they’re added as methods to the window object. 
-contains tons of properties
	-like alert()
-When you use the “var” keyword those variables are added to the window object (globally scoped) BUT NOT LET AND CONST


---The DOM---
-HTML, CSS, etc. goes in...JS objects come out! 
-Each one of these objects has different properties that we can access
-Set up in a tree structure with the Document on top and then all the different elements as child nodes. 
-There are lots of methods we can use to interact with the objects/elements on the page. 
-Document is the root of the tree. Every webpage has a document. 
-console.dir(document) will show you the actual object 
-There are tonnnnnns of methods to use 

---Selecting DOM elements---
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

---querySelector and querySelectorAll---
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

---Manipulate DOM Elements---
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

---innerText vs. textContent---
-innerText doesn't know about formatting
-textContent does! 
-innerText also doesn't know about hidden text! 
  -if you added some styles that had "display: none"
-textContent is faster, but it doesn't really matter which you use...not super important. 

---innerHTML---
-retrieve text and all tags inside as well 
  -returns a string of all the stuff inside that particular selector 
-this will allow you to add elements to the page, but it's gotta be in the form of a string. 
-If you use innerText instead then it'll get messed up because it only knows that you want to add text. 

---Changing and accessing attributes: src, value, href, etc. ---
-if you use the .value will return the value of that element. 
  -You can use this to access the value or use .value property and set it to a new value
  Example: 
    const input = document.querySelector('input')
    input.value <--- will return the current value
    input.value = "Something new" <--- this will change the value 

-.href will access the url of the href 
  -You can change it by setting it to something else. 





















*/
