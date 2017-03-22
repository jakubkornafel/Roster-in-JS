// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew() {
    var newName = prompt("What name you would like to add?")
    roster.push(newName)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
// function remove() {
//   var remName = prompt("What name you would like to remove?")
//   var index = roster.indexOf(remName);
//   roster.splice(index,1)
// }

function remove(){
  var remName = prompt("What name would you like to remove?");
  var index = roster.indexOf(remName);
  roster.splice(index,1)
}

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){
  alert(roster);
}

// Start by asking if they want to use the web app
// alert("hello!!!")
var start = prompt("Would you like to use the Roster app? y/n")
var action = "empty"

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
if (start === "y") {
  while (action !== "quit") {
    action = prompt("What do like to do? Chose an action: add, remove, display, quit")
    if (action === "add") {
      addNew();
    }else if (action === "display") {
      display();
    }else if (action === "remove") {
      remove();
  }
 }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")



// Use if and else if statements to execute the correct function for each command.
