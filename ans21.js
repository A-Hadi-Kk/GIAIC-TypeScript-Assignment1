"use strict";
let cars = {
    "Toyota": { name: "Altis", model: 2017, owname: "Hanzala" },
    "Audi": { name: "A8", model: 2024, owname: "Aashir" },
    "Nissan": { name: "Gtr", model: 2004, owname: "Asim" },
};
console.log("Info about my frnds cars");
for (let car in cars) {
    console.log(`Car: ${car}`);
    console.log(`Model: ${cars[car].model}`);
    console.log(`Owner's Name: ${cars[car].owname}`);
    console.log();
}
