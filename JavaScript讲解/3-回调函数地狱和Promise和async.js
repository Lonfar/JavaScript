/*现在我们又增加了【看电影】和【洗澡】 */
// function DrinkWater(fn) {
//     setTimeout(() => {
//         fn("喝热水");
//     }, 500);
// }
// function Eat(fn) {
//     fn("吃饭");
// }
// function Walk(fn) {
//     fn("去走路");
// }
// function WatchTV(fn) {
//     setTimeout(() => {
//         fn("看电视");
//     }, 1000);
// }
// function Bathe(fn) {
//     setTimeout(() => {
//         fn("洗澡");
//     }, 2000);
// }

// DrinkWater(function (fn) {
//     console.log(fn)
//     Eat(function (fn) {
//         console.log(fn)
//         Walk(function (fn) {
//             console.log(fn)
//             WatchTV(function (fn) {
//                 console.log(fn)
//                 Bathe(function (fn) {
//                     console.log(fn)
//                 })
//             })
//         })
//     })
// })

/*由于在写代码过程中可能会碰到经常修改，及添加新功能的需求。所以一直嵌套【callback】会造成 【callback hell】，增加代码的维护难度和阅读难度*/
/*所以我们这里可以使用Premise来解决这个问题 */

function DrinkWater() {
    return new Promise(
        function (resolve) {
            setTimeout(() => {
                resolve("喝热水");
            }, 500);
        }
    )
}
function Eat() {
    console.log("吃饭")
}
function Walk() {
    return new Promise(
        function (resolve) {
            resolve("去走路");
        }
    )
}
function WatchTV() {
    return new Promise(
        function (resolve) {

            setTimeout(() => {
                resolve("看电视");
            }, 1000);
        }
    )
}
function Bathe() {
    return new Promise(
        function (resolve) {
            setTimeout(() => {
                resolve("洗澡");
            }, 2000);
        }
    )
}
// DrinkWater().then(function (data) {
//     console.log(data)
//     return Eat()
// }).then(function (data) {
//     console.log(data)
//     return Walk()
// }).then(function (data) {
//     console.log(data)
//     return WatchTV()
// }).then(function (data) {
//     console.log(data)
//     return Bathe()
// }).then(function (data) {
//     console.log(data)
// })


/*利用Promise写还是有一些复杂，所以我们可以更改为async进行写代码*/
async function main() {
    console.log(await DrinkWater())
    Eat()
    console.log(await Walk())
    console.log(await WatchTV())
    console.log(await Bathe())
}
main();