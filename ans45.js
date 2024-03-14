function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_info = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            if (option.hasOwnProperty(key)) {
                car_info[key] = option[key];
            }
        }
    }
    return car_info;
}
var car_details = car_info("Toyota", "Corolla", { color: "Black" }, { year: 2022 });
console.log(car_details);
