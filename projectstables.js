// Java = Object-oriented language, adds interactivity to websites
// Paradigm = A standard, perspective, or set of ideas
// Primitives = The simplest forms of data,  stored in variables.
// Operators = Symbols with defined functions. Tell a program to perform a particular action.
// Concatenation = Addition operator “+” adds two numbers or joins two strings together.
// Cardinals = You can count items.
// Indexes = You can count displacement.  ( console.log(“Beans”.charAt(3)) = “n” ) let frutas = ["manzana", "banana", "naranja", "uva"]; console.log(frutas[2]); // "naranja"
// Properties: A collection of related data: arrays, strings, etc.
// Parameters are the “options” a function can accept
// Arguments are the actual data you pass the function
// The top-level outside all your functions is called the global scope.
// Function scope: scoped to function
// The return keyword is used to specify the value that a function should output or "return" back to the caller.

// The let declaration declares re-assignable variables, optionally initializing each to a primitive value.
// string red:
let horseName = "Sulley";
// number green:
let horseAge = 27;
// boolean (Prefix with “is”, “can”, “has”) blue:
let horseInside = true;
let boardingFee = 40;
let lateFee = boardingFee * 1.2;

let visitorMessage =
    "Welcome to our stable, the horse " +
    horseName +
    " is " +
    horseAge +
    " years old and is currently " +
    (horseInside ? "inside" : "outside") +
    " the stable.";

let latePaymentMessage =
    "The boarding fee of " +
    horseName +
    " is late. The final amount is " +
    lateFee +
    ".";

console.log(visitorMessage);
console.log(latePaymentMessage);

// Arrays = let you store multiple items under one variable declaration, surrounded by square brackets [ ] and have commas between each item.
// You can store anything you want in arrays. let stuff = [1, “two”, 3]; Different methods:
// The .length method represents how many items are in an array: let stuff = [1, “two”, 3]; console.log(stuff.length); // 3

// There are multiple items in an object
/* There are all key: value pairs let horse = {
 key: value,
}
*/
// Data in an object is called a property

let horses = [
    {
        name: "Sulley",
        age: 27,
        nickname: "Azul",
        color: "Blue",
        breed: "Frison",
        favoriteSnack: "Papas",
        monthlyRent: 20,
        location: true,
    },
    {
        name: "Mike",
        age: 21,
        nickname: "Verde",
        color: "Green",
        breed: "Percheron",
        favoriteSnack: "Sushi",
        monthlyRent: 22,
        location: true,
    },
    {
        name: "Boo",
        age: 12,
        nickname: "Rosa",
        color: "Pink",
        breed: "Percheron",
        favoriteSnack: "Pizza",
        monthlyRent: 40,
        location: true,
    },
];

// The .push() method allows us to add items to the end of an array:
let newHorse = {
    name: "Randall",
    age: 5,
    nickname: "Morado",
    color: "Purple",
    breed: "Percheron",
    favoriteSnack: "Burger",
    monthlyRent: 50,
    location: false,
};

horses.push(newHorse);

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = false;

// Si quisiera uno especifico (no el caso): You access items in an array like this: let stuff = [“a”, “b”, “c”, “d”]; console.log(stuff[3]);  “d”
console.log(horses);


// Ejemplos de uso de arrays:
// let nums = [1, 2, 3, 4]; console.log(num[0] + num[2]); // 4
// let chars = [“a”, “b”, “c”, “d”]; console.log(chars[1] + chars[2]); // bc
/* let horseNames = [“Beans”, Strawberry”, “Charlie”];
let horseIntro = `There are
${horseNames.length} staying at
the stables: ${horseNames[0]},
${horseNames[1]}, and
${horseNames[2]}.`
console.log(horseIntro);
// There are 3 horses staying at
the stables: Beans, Strawberry,
and Charlie.
*/


// Stables part 3!!

let totalStalls = 6;

function AvailableStalls() {
    let occupied = 4;
    let available = totalStalls - occupied;
    console.log(
        "There are " +
            available +
            " stalls available out of " +
            totalStalls +
            "."
    );
}
AvailableStalls();

// A callable unit of logic that has a well-defined interface, performs a task, and can be invoked multiple times.
/* function name(params...) {
return data;
}
*/

function calculateLateRent(horseName) {
    let horse = horses.find((h) => h.name === horseName);
    if (horse) {
        let lateAmount = horse.monthlyRent * 1.2;
        console.log(
            horse.name +
                " has a late rent. The total amount due is $" +
                lateAmount +
                "."
        );
    } else {
        console.log("Horse not found.");
    }
}

calculateLateRent("Boo");

function getHorseNickname(horseName) {
    let horse = horses.find((h) => h.name === horseName);
    return horse ? horse.nickname : "Horse not found";
}
let nicknameResult = getHorseNickname("Boo");
console.log("The nickname of Boo is: " + nicknameResult);

/* Array notation
let arr = [1, 2, 3];
arr[1];
// 2
*/
// 2 styles of object notation: dot notation and bracket notation.
// horse.name; “Beans” horse["name"] “Beans”


// ----------------------------

/* Git: Version Control
Records changes over time!
This means you can:
- Revisit earlier versions
- Compare versions
- Merge versions

History: you can move back to any
point in your process.
Collaboration: multiple people can
work on the same code at the same
time.
Safe experimentation: different
“branches” allow side-work, tests, or
experiements to be separated from the
main work.
Traceability: see who changed what
and when

Early methods: “Save as”, copy
directories
Local: tracking changes on your own
machine
Centralized: a server that holds the
whole project (single source of truth,
single source of failure)
Distributed: each user has a full copy
of history, collaboration happens by
pushing/pulling among peers.
Repository: the entire project and
history
Branch: a contained area of your
repository, you can have multiple
branches.
Commit: a snapshot of your branch at
a certain moment in time

git init: turn an existing directory
into a Git repository (start tracking)
git clone <URL>: copy an existing
repository (with full history) to your
local machine
Analogy: cloning is like making your
own copy of a full library, not just
borrowing a book

git add: stage changes to include in
the next commit
git commit -m "message": create
a new commit (snapshot) with staged
changes
git status: see what is
staged/unstaged
git log: view commit history

git branch: lists branches
git checkout <branch>: switch
your working directory to that branch
git checkout -b <branch>:
shortcut to create a new branch and
switch to it in one step
Analogy: branches are like parallel
timelines — you can diverge,
experiment, then maybe merge back
=======
>>>>>>> refs/remotes/origin/main





<main>
  <section id="contact">
    <h2>Contact Us</h2>
    <form action="#" method="post">
      
      <!-- Name Input Field -->
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
      
      <!-- Email Input Field -->
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>
      
      <!-- Buttons -->
      <input type="reset" value="Reset">
      <input type="submit" value="Submit">

    </form>
  </section>
</main>



<main>
  <section id="famous-person">
    <h2>About Taylor Swift</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <th>Category</th>
        <th>Information</th>
      </tr>
      <tr>
        <td>Full Name</td>
        <td>Taylor Alison Swift</td>
      </tr>
      <tr>
        <td>Birthdate</td>
        <td>December 13, 1989</td>
      </tr>
      <tr>
        <td>Place of Birth</td>
        <td>Reading, Pennsylvania, USA</td>
      </tr>
      <tr>
        <td>Occupation</td>
        <td>Singer-songwriter</td>
      </tr>
      <tr>
        <td>Notable Achievements</td>
        <td>12 Grammy Awards, 40 American Music Awards, and 14 MTV Video Music Awards</td>
      </tr>
      <tr>


