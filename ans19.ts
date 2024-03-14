let guests4 = ["Hunain", "Laiba", "Khadija", "Maryam", "Hammad", "Mubasshir"];
console.log("Unfortunately, the new party room is not available and now we have space for only two guests");
console.log();
while(guests4.length > 2){
    let rGuests = guests4.pop();
    console.log(`Sorry ${rGuests}! We can't invite you to party`);
    console.log();
}
console.log(`Dinner Invitation for remaining ${guests4.length} guests`);
console.log();
for(let i = 0; i < guests4.length; i++){
    console.log(`Congrats ${guests4[i]}! You are having a good luck which makes you in the Guests-List and you are in the one who are joining the party`);
    console.log();
}
