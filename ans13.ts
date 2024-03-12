let myTrans= ["bicycle", "car", "motorcycle"];
console.log("My Favorite Modes of Transportation:");
for (let i = 0; i < myTrans.length; i++) {
    switch (myTrans[i]) {
        case "bicycle":
            console.log("I love the simplicity of a bicycle.");
            break;
        case "car":
            console.log("Driving a car is in my weekly routine.");
            break;
        case "motorcycle":
            console.log("Riding a motorcycle is dangerous then driving a car.");
            break;
        default:
            console.log("I have no specific statement for " + myTrans[i]);
    }
}
