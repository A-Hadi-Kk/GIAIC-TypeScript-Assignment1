function make_shirt(size: string = "large", message: string = "I love TypeScript"){
    console.log(`You've ordered a ${size} shirt with the following message: "${message}".`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Keep coding!");
