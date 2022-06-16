/*
实例场景：
需要先喝水，然后吃饭，最后去走路。
*/

// function DrinkWater(fn) {
//     fn("喝水");
// }
// function Eat(fn) {
//     fn("吃饭");
// }
// function Walk(fn) {
//     fn("去走路");
// }

// DrinkWater(function (fn) { console.log(fn) });
// Eat(function (fn) { console.log(fn) });
// Walk(function (fn) { console.log(fn) });

/*
但是今天我想喝热水，但是热水太烫了，我没办法迅速喝完。可能需要500毫秒,我们为喝水加入 settimeout() 函数
*/

function DrinkWater(fn) {
    setTimeout(() => {
        fn("喝热水");
    }, 500);
}
function Eat(fn) {
    fn("吃饭");
}
function Walk(fn) {
    fn("去走路");
}

// DrinkWater(function (fn) { console.log(fn) });
// Eat(function (fn) { console.log(fn) });
// Walk(function (fn) { console.log(fn) });

/*因为JavaScript是异步代码，所以此处执行顺序出现了问题，那么这里为了保证其方法执行的顺序正确性，就要使用到【callback】的一种理念*/

DrinkWater(function (fn) {
    console.log(fn)
    Eat(function (fn) {
        console.log(fn)
        Walk(function (fn) {
            console.log(fn)
        })
    })
})

