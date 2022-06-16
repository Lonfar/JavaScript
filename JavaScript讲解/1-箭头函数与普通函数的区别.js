//基础函数实例
// let obj = {
//     name: "子静",
//     age: 18,
//     sayName() {
//         console.log(`我是${this.name}, 今年${this.age}岁`);
//     }
// }
// obj.sayName();

//实例1，普通函数，无法正确输出this.name和this.age的值，这里的this指向为window
// let obj1 = {
//     name: "子静",
//     age: 18,
//     sayName() {
//         setTimeout(function () {
//             console.log(`我是${this.name}, 今年${this.age}岁`);
//         }, 500);
//     }
// }
// obj1.sayName();

//实例2，箭头函数，正确输出this.name和this.age的值
let obj2 = {
    name: "子静",
    age: 18,
    sayName() {
        setTimeout(() => {
            console.log(`我是${this.name}, 今年${this.age}岁`);
        }, 500);
    }
}
obj2.sayName();

/*
普通函数与箭头函数的区别：
1、普通函数中的this指向的是调用时的对象
2、箭头函数中的this指向的是定义时的对象
*/