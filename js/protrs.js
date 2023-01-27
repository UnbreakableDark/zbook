//原型继承
/*
    在JS中，对象有一个特殊的隐藏属性 [Prototype] ,它要么为null，要么是对另一个对象的引用。
该对象称为原型。
    只能有一个 [[Prototype]]。一个对象不能从其他两个对象获得继承。(单继承)
    当我们从 object 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。
在编程中，这被称为“原型继承”。
    属性 [[Prototype]] 是内部的而且是隐藏的，但是这儿有很多设置它的方式。
    1. obj._proto_  
__proto__ 的值可以是对象，也可以是 null。而其他的类型都会被忽略。
    _proto_ 是 Prototype 因历史原因 遗留下来的 getter setter
    2. Object.getPrototypeOf/Object.setPrototypeOf 来取代 __proto__ 去 get/set 原型。
    3. this 不受原型的影响
无论在哪里找到方法(对象or原型),在一个方法调用中，this始终是点符号 . 前面的对象
    4.for...in 循环会迭代继承的属性
*/

let obj115={};
let obj1151={};
obj1151._proto_=obj115;


/*
    F.prototype
    如果F.prototype 是一个对象，那么new操作符会使用它为 新对象设置 [prototype]
这里的 F.prototype 指的是 F 的一个名为 "prototype" 的常规属性
    F.prototype 属性仅在 new F 被调用时使用，它为新对象的 [[Prototype]] 赋值。
如果在创建之后，F.prototype 属性有了变化（F.prototype = <another object>）
，那么通过 new F 创建的新对象也将随之拥有新的对象作为 [[Prototype]],但已经存在的对象将保持旧有的值.
    每个函数都有 "prototype" 属性，即使我们没有提供它。
    默认的 "prototype" 是一个只有属性 constructor 的对象，属性 constructor 指向函数自身。
*/
let animals123={
    eat(){  console.log("eat")}
};
function Rabbit123(name){
    this.name=name;
}
Rabbit123.prototype=animals123;
let rabbit123=new Rabbit123("bai");
rabbit123.eat();

Function.prototype.Rabbit123.defer=function(ms){
    setTimeout(this,ms);
}
rabbit123.defer(1000);//


/*
    obj._proto_已经过时了，不推荐使用
它不被反对的唯一的用法是在创建新对象时，将其作为属性 {_proto_:obj}
    现在的获取/设置原型的方法有
Object.getPrototypeOf(obj);返回对象 obj 的 [[Prototype]]。
Object.setPrototypeOf(obj,proto);将对象 obj 的 [[Prototype]] 设置为 proto。
    Object.create(proto, [descriptors])
利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象。

*/