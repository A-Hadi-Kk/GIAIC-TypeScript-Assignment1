let guests2 = ["Khalid", "Laiba", "Shagufta"];
for (let i = 0; i < guests2.length; i++){
    console.log(`Dear guests ${guests2[i]}, Due to some circumstances we have to change our Guest-List which is:`);
    console.log();
}
let notAttending: string = "Khalid";
let replacement: string = "Hammad";
let updatedList = guests.filter(guest2 => guest2 != notAttending );
updatedList.push(replacement);
console.log("UPDATED DINNER INVITATION!");
for (let i = 0; i < updatedList.length; i++){
    console.log(`Dear ${updatedList[i]}, Due to some circumstances ${notAttending} will not be able to attend the party but in his replacement we have our new guest ${replacement} `);
    console.log();
}