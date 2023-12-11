// 3 - створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), 
//створити по одному в кожному форматі

//Object.create():
let elf = {
    sayHello : function () {
        console.log("Hello from ", this.name)
}
}

let newElf = Object.create(elf)
newElf.name = "Darwin";
newElf.sayHello();

//proto:
let newElf_2 = {
    name: "Dexter",
    __proto__: elf
}
newElf_2.sayHello();