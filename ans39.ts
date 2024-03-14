function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Sydney", "Australia");

console.log(city1);
console.log(city2);
console.log(city3);
