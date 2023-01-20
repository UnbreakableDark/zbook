//原型继承
/*
    在JS中，对象有一个特殊的隐藏熟悉 [Prototype] ,它要么为null，要么是对另一个对象的引用。
该对象称为原型。
    只能有一个 [[Prototype]]。一个对象不能从其他两个对象获得继承。(单继承)
    当我们从 object 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。
在编程中，这被称为“原型继承”。
    属性 [[Prototype]] 是内部的而且是隐藏的，但是这儿有很多设置它的方式。
    1. obj._proto_  
__proto__ 的值可以是对象，也可以是 null。而其他的类型都会被忽略。
    2. Object.getPrototypeOf/Object.setPrototypeOf 来取代 __proto__ 去 get/set 原型。
*/

let obj115={};
let obj1151={};
obj1151._proto_=obj115;