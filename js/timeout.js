//setTimeout setInterval
let timerId=setTimeout(()=>console.log("hello"),1000);//1s
//参数：第一个 func delay时间，之后是函数func的参数
// setTimeout 期望得到一个对函数的引用,而不是执行它
clearTimeout(timerId);
//setTimeout在调用时会返回一个 计时器标识符  timer identifier,我们可以使用它来取消执行。