/*
----Web Dev Notes----


-----Add methods to object-----
-You can add functions to an object that you can later tap into using dot notation 
-like this: 


const myObject = {
  fistName: "Ben",
  lastName: "Daniels",
  sayWhatsUp: function () {
    console.log("wassssssup!");
  },
};

myObject.sayWhatsUp();

However, this is a little cluttered, so we can make it even easier, and drop the colon 
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

-----The Window-----
-This is the global object 
-As you declare functions they’re added as methods to the window object. 
-contains tons of properties
	-like alert()
-When you use the “var” keyword those variables are added to the window object (globally scoped) BUT NOT LET AND CONST

*/
