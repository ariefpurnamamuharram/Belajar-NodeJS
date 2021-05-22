const executorFunction = (resolve, reject) => {
    const isCofeeMakerReady = true;
    if (isCofeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);