function sandwich(...items: string[]){
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
    console.log();
}
sandwich("Bbq", "Cream", "Cheese", "Brown bread");
sandwich("Beef", "Mayo");
sandwich("Chicken");