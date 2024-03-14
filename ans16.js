var guests3 = ["Laiba", "Shagufta", "Hammad"];
for (var i = 0; i < guests3.length; i++) {
    console.log("Dear guests ".concat(guests3[i], ", Great News! We found a bigger party room so we are inviting more guest:"));
    console.log();
}
guests3.unshift("Hunain");
guests3.splice(Math.floor(guests3.length / 2), 0, "Khadija");
guests3.push("Mubasshir");
for (var i = 0; i < guests3.length; i++) {
    console.log("Hey, " + guests3[i] + "!" + " I hope u r doing well, On coming Sunday you are invited with your family on the BirthDay party of my son, Please join us in the party we would be very happy to see u there ");
    console.log();
}
