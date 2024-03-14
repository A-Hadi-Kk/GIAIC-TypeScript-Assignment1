let animals: string[] = ["Cat", "Dog", "Rabbit"];
console.log(`I like to have russian ${animals[0]}`);
console.log(`I like the Huskey breeds in ${animals[1]}`);
console.log(`${animals[2]} is a very sensitive animal`);
for (let animal of animals){
    console.log(`A ${animal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!")