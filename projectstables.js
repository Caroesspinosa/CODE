let horseName = "Sulley";
let horseAge = 27;
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

console.log(horses);
