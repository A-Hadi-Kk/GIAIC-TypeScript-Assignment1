let guests = ["Hunain", "Laiba", "Khadija", "Maryam", "Hammad", "Mubasshir"];
console.log("Unfortunately, the new party room is not available and now we have space for only two guests");
console.log();
while(guests.length > 2){
    let rGuests = guests.pop();
    console.log(`Sorry ${rGuests}! We can't invite you to party`);
    console.log();
}
console.log("Dinner Invitation for remaining guests");
console.log();
for(let i = 0; i < guests.length; i++){
    console.log(`Congrats ${guests[i]}! You are having a good luck which makes you in the Guests-List and you are in the one who are joining the party`);
    console.log();
}
