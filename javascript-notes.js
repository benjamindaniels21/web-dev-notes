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

*/
