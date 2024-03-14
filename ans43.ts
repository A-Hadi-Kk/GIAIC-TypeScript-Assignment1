let magician_names: string[] = ["David", "Shakeel", "Gabriel", "Rukhsana"];
function show_magicians(magicians: string[]){
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`the Great ${magicians[i]}`);
    }
}
show_magicians(magician_names);
console.log();
make_great(magician_names);