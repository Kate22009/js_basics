// let carFuel = "gas" // "disel"

// let carSize = S //M, L, XL

function myFunc(carFuel = "gas", carSize = "XL") {
    const sizeMap = {
        S: "S авто",
        M: "M авто",
        L: "L авто",
        XL: "XL авто",
    };

    const fuelMap = {
        gas: 'тип палива "gas"',
        diesel: 'тип палива "diesel"',
    };

    const sizeMessage = sizeMap[carSize] || "невідомий розмір авто";
    const fuelMessage = fuelMap[carFuel] || "невідомий тип палива";

    console.log(`заправка для ${sizeMessage}, ${fuelMessage}`);
}

// Виклики функції з різними комбінаціями
myFunc("diesel", "S");
myFunc("diesel", "M");
myFunc("diesel", "L");
myFunc("diesel", "XL");
myFunc("gas", "S");
myFunc ("gas", "M")
myFunc("gas", "L");
myFunc ("gas", "XL")
myFunc();
