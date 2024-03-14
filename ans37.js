function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You've ordered a ".concat(size, " shirt with the following message: \"").concat(message, "\"."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "Keep coding!");
