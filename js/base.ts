console.log("hello world");  //传统  哈哈哈
//1.type
let message1:string="hello";
let num1:number=2;
//特殊的数字值 : Infinity,-Infinity,NaN (表示一个计算错误)
let big1:BigInt=11239419481941719428471892n;//尾部的n表示这是一个BigInt数字
let bool1:boolean=true;
//  null  undefined   
let sym1:symbol=Symbol("唯一值");
let obj1={
    [sym1]:"symbol允许我们创建对象的隐藏属性",
    //symbol在for...in中会被跳过
}
//全局Symbol注册表
let id1=Symbol.for("id");//从注册表中读取(不存在则创建)symbol
let sym2=Symbol.keyFor(id1);//通过全局Symbol返回一个名字
//Symbol.keyFor 内部使用全局 symbol 注册表来查找 symbol 的键。所以它不适用于非全局 symbol。


console.log(typeof(obj1));
console.log(typeof sym1);


//ts新增
//void never
let arr1:Array<number>=[1,2,3];
let arr2:number[]=[1,2,3];

let x1:[string,number]=["my",16];
let y1:any="anything is well";

enum Lv {n=0,r=2,sr=4,ssr=5}

//类型断言
let z1=(y1 as string).length;
let t1=(<string>y1).length;


const  PI=3.1415926;

//逻辑运算符
let aa1=false || 22;//22     或运算符  寻找第一个真值，
//如果结果为true,则返回这个操作数的初始值；如果所有的操作数都被计算过，则返回最后一个值
let bb1=0 && false;//false   
//与运算符  寻找第一个假值  与运算返回第一个假值，如果没有假值就返回最后一个值。
let cc1=!false;//true
console.log(aa1,bb1,cc1);

//空值合并运算符
let dd1=aa1 ?? bb1;//如果第一个参数不为null或undefined，则返回第一个值，否则返回第二个值
//已定义的(defined)：一个值既不为null也不为undefined

//循环   while,do...while,for    break,continue   break/continue标签

//function
//局部变量：在函数中声明的变量只在该函数内部可见，只有在没有局部变量的情况下才会使用外部变量。
//函数也可以访问外部变量，函数对外部变拥有全部的访问权限，也可以修改外部变量。
//返回值：return ，空值的return或者没有return的函数返回值为   undefined
//函数声明
function hello1(name="Bob"){
    console.log("hello "+name);
}
//函数表达式
//函数是一个值，下面是将一个函数的代码储存在变量中.不加()的调用返回函数代码
let  hello11=function(name="july"){
    console.log("hello ",name);
};

//箭头函数
let hello111=(name:string)=>console.log("hello ",name);

