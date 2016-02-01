

// Lesson 1: use let and const


// Lesson 2: default values

// Lesson 3: Using named parameters:
// using named parameters makes it easier to understand how afunction should be invoked. With this structure,
// it's okay to not provide some arguments when invoking the function (e.g., only providing value for name and popularity). Note that if you don't provide a default value for the second parameter, you must still Since we are not declaring a default value for the second parameter, we must pass some object as the second argument to the function.
// setting a default value for the entire option argument allows this parameter to be omitted during function calls
function setPageThread (name, { popular, expires, activeClass } = 0) {
  console.log('Name:', name)
  console.log('Popular:', popular)
  console.log('Expires:', expires)
  console.log('Active:', activeClass)
}

function loadProfiles(userNames = [], {profilesClass, reverseSort} = {}) {

  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if(reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}

// Lesson 4: Using rest parameters: This allows us to represent an indefinite number of arguments as an array. This way, changes to the function signature is less likely to break code
function displayTags (...tags) {

}

function appendUserNames(...userNames){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in userNames){
    let name = userNames[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}


// Lesson 5: using spread operators: when used in the function invocation (not function definition) this splits an array argument into individual elements

displayTags(...tags)

// In the call to getActiveUsers(), the 2nd argument is a callback. This callback, an anonymous function, has data as its parameter.
// We can pass data.userNames as an argument to the appendUserNames() function. However, this property is an array while the appendUserNames() function expects individual arguments.
// Change the call to appendUserNames() to use the syntax that will split the array into individual elements.

getActiveUsers(15, function(data){
  let userNameDivs = appendUserNames(...data.userNames);
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb){
  _fetchTopicInfo("/topics/" + id, function(data){
    cb(data);
  });
}

// The render() method of a template takes a data object or array (as well as an optional helpersOrContext object), and returns the rendered template as a string.




// Note: the syntax for rest and spread are similar

// Lesson 6: using arrow functions to preserve scope. Arrow functions bind to the scope of where they are defined, not where they are used (also known as lexical binding)

function ActiveUsersComponent(target, topicId){
  this.targetElement = target;
  this.topicId       = topicId;
}

ActiveUsersComponent.prototype.render = function(){
  getActiveUsers(this.topicId, (data) => {
    let userNameDivs = appendUserNames(...data.userNames);
    appendToSidebar(this.targetElement, userNameDivs);
  });
};
// Create new component below

let component = new ActiveUsersComponent(".active-users", 17);
component.render();


// Lesson 7: assigning with object initializer shorthand

// Lesson 8: object destructuring

// Lesson 9: when adding a function to an object, you don't need to add the word "function"

// Lesson 10: template strings: add backticks
function buildTopicElement(topic){
  let title = `<h2>${topic.title}</h2>`;
  let author = `<small>${topic.author}</small>`;
  let body = `<p>${topic.body}</p>`;

  return { title, author, body };
}

// Lesson 10: object.assign().

let settings = Object.assign({}, defaults, options1, options2);

let defaults = {
  container:       ".main",
  isActiveClass:   ".is-active"
};

let options1 = {
  container:       ".main-container",
  isActiveClass:   ".is-active-element"
};

let options2 = {
  isActiveClass:   ".is-active-content"
};

// full example with object.assign
function spinner(target, options = {}) {
  let defaults = {
    message: "Please wait",
    spinningSpeed: 5,
    cssClass: ".is-spinning"
  };

  let settings = Object.assign({} , defaults , options);

  console.log(`Message: ${settings.message}`);
  console.log(`spinningSpeed: ${settings.spinningSpeed}`);
  console.log(`cssClass: ${settings.cssClass}`);
}
// Indicate the outcome of invoking this function, like so:

spinner(targetElement, {
  cssClass: ".is-fast-spinning",
  spinningSpeed: 8
});

// Lesson 11: Array destructuring

console.log(first, last.join(', '))  // The join() method joins all elements of an array into a string.


// Lesson 12: for...of loop over arrays


// Lesson 13: Array.find()   . This returns the first value that returns true

// Lesson 14;
// when using objects as maps, its keys are always converted to strings
// the Map object is a simple key/value data structure. Any value may be used as either a key or a value, and objects are not converted to strings
// we use get() and set() methods to access values in maps

new Map(), .set(), and then .get()

// Lesson 15: we can iterate Maps with for...of loops


// Testing

Do create a folder called "test"
