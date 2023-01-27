//函数对象
//在JS中函数的类型是对象

function sayHi(){
    console.log("hello");
    sayHi.zName="zzz";//函数的自定义属性
}
sayHi.name;//sayHi

let sayHello=function(){
    console.log("Hi");
};
/*
    函数对象包含一些便于使用的属性;
    还有另一个内建属性 “length”，它返回函数入参的个数;rest 参数不参与计数。
    我们也可以添加我们自己的属性。
    规范中把这种特性叫做「上下文命名」,如果函数自己没有提供，那么在赋值中，会根据上下文来推测一个。
    对象方法也有名字
*/
