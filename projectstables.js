// CAROLINA'S STABLE MDIA-1620 #A01461685//

let horseName = "Sulley";
let horseAge = 27;
let horseInside = true;
let boardingFee = 40;
let lateFee = boardingFee * 1.2;

// Use of the ternary operator

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

// LAB 2
// Horses stored in new variable using object.

let horses = [
    {
        name: "Sulley", // string
        age: 27, // number
        nickname: "Azul",
        color: "Blue",
        breed: "Frison",
        favoriteTreat: "Papas",
        monthlyRent: 20,
        location: true, // boolean
    },
    {
        name: "Mike",
        age: 21,
        nickname: "Verde",
        color: "Green",
        breed: "Percheron",
        favoriteTreat: "Sushi",
        monthlyRent: 22,
        location: true,
    },
    {
        name: "Boo",
        age: 12,
        nickname: "Rosa",
        color: "Pink",
        breed: "Percheron",
        favoriteTreat: "Pizza",
        monthlyRent: 40,
        location: true,
    },
];

// Use of push to add items to the rest

let newHorse = {
    name: "Randall",
    age: 5,
    nickname: "Morado",
    color: "Purple",
    breed: "Percheron",
    favoriteTreat: "Burger",
    monthlyRent: 50,
    location: false,
};

horses.push(newHorse);

// Boolean using dot notation, horse = object, [0] is the position in the array, .isHungry equals the new property, true is boolean.

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = true;
horses[3].isHungry = false;

console.log(horses);

//LAB 3

let totalStalls = 6;

function availableStalls(stalls, horses) {
    console.log("There are " + (stalls - horses) + " stalls available.");
}

// Call to action for the function

availableStalls(totalStalls, 4);

if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log("We have " + availableStalls + " available!");
}

function calculateLateRent(horses[2]) {
let lateAmount = horse.monthlyRent * 1.2;
console.log(
horse.name +
" has a late rent. The total amount due is $" +
lateAmount +
"."
);
}
calculateLateRent(horses[2]);

// NEW PART LAB 3 ----------

let selectedTreat = "Pizza";

for (let i = 0; i < horses.length; i++) {
    if (horses[0]["favoriteTreat"] === selectedTreat) {
        console.log(
            horses[0]["name"] +
            " likes " + selectedTreat + "!"
        );
    } else {
        console.log(
            horses[0]["name"] +
            " does not like " + selectedTreat + "."
        );
    }
}


function horsesNickname(horses[2]) {
return horses.Nickname;
}

let result = nickname(horses[2]);
console.log("The nickname of Mike is: " + result);

// LAB 4


