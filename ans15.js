var guests2 = ["Khalid", "Laiba", "Shagufta"];
for (var i = 0; i < guests2.length; i++) {
    console.log("Dear guests ".concat(guests2[i], ", Due to some circumstances we have to change our Guest-List which is:"));
    console.log();
}
var notAttending = "Khalid";
var replacement = "Hammad";
var updatedList = guests2.filter(function (guest2) { return guest2 != notAttending; });
updatedList.push(replacement);
console.log("UPDATED DINNER INVITATION!");
for (var i = 0; i < updatedList.length; i++) {
    console.log("Dear ".concat(updatedList[i], ", Due to some circumstances ").concat(notAttending, " will not be able to attend the party but in his replacement we have our new guest ").concat(replacement, " "));
    console.log();
}
