//对象，键值对(key,value)的集合
//属性命名没有限制。属性名可以是任何字符串或者 symbol
let user2=new Object();//构造函数法
let user1={
    name:"john",
    sex:"boy",
    age:25,
};//字面量法
user1.address="小地方";//点符号要求 key 是有效的变量标识符
delete user1.sex;//delete操作符 移除对象的属性
user1["math teacher"]="李老师";//多词属性

//属性存在操作符  in
//console.log("age" in user1);


//for...in 循环，遍历一个对象的所有key值
for(let ass in user1){
    //console.log(ass);
}

//——————————————————————————————————————————————————————
//object的引用和复制
//赋值了对象的变量存储的不是对象的本身，而是该对象在内存中的地址——换句话就是存储的是对该对象的引用。
let user3=user1;
let user4={...user1}//克隆
let user5={};
Object.assign(user5,user1);
user3.age=17;
user4.age=29;
//console.log(user1.age);//17   user4引用的是全新的对象 
for(let ass in user5){
    console.log(ass);
}



//this与方法
//this   访问该对象本身
//js中，this可以用于任何函数,即使它不是对象的方法。
//this 的值是在代码运行时计算出来的，它取决于代码上下文。在没有对象的情况下调用：this == undefined
//箭头函数没有自己的this，它的this取决于外部正常的函数。
let user6={
    name:"mi6",
    age:6,
    sayHi(){
        console.log(this.name+"今年"+this.age+"岁");
    }
}


//构造函数  构造器的主要目的 —— 实现可重用的对象创建代码。
//构造函数是常规函数，但有两个约定 1.以大写字母开头 2.只能用new操作符来执行
function User1(name,age=0){
    //隐式创建  this={}
    this.name=name;
    this.age=age;
    this.isUse=function(){
        console.log(new.target);//查它是否被使用 new 进行调用了
    }
    //隐式返回  return this
    //通常，构造器没有return，如果return的是对象，则返回这个对象而不是this，return原始类型则忽略
}



//对象-原始值  转换
//三个函数   Symbol.toPrimitive,obj.toString,obj.valueOf 
//如果 Symbol.toPrimitive 方法存在，则它会被用于所有 hint，无需更多其他方法。
let change1={
    name:"bob",
    age:16,
    [Symbol.toPrimitive](hint){
        //hint="string"/"number"/"default"  其中的一个
        console.log(`hint: ${hint}`);
        return  this.age;
    },
    toString(){
        //如果Symbol.toPrimitive 不存在 hint="number",则优先调用，之后才是 valueOf 
    },
    valueOf(){
        //果Symbol.toPrimitive 不存在  hint="number"/"default" ,则优先调用，其次是toString
    }
}

/*
//原始类型的方法  对象包装器使用后即被销毁
let str1="hello";
str1.test=5;
console.log(str1.test);//严格模式下报错，非严格模式下返回undefined
*/