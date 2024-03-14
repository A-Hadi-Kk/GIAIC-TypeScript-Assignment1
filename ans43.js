var magician_names = ["David", "Shakeel", "Gabriel", "Rukhsana"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("the Great ".concat(magicians[i]));
    }
}
show_magicians(magician_names);
console.log();
make_great(magician_names);
