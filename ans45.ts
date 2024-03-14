function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]){
    let car_info: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    for (let option of options) {
        for (let key in option) {
            if (option.hasOwnProperty(key)) {
                car_info[key] = option[key];
            }
        }
    }

    return car_info;
}
let car_details = car_info("Toyota", "Corolla", {color: "Black"}, {year: 2022});
console.log(car_details);
