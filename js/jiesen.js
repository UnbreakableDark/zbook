//JSON（JavaScript object Notation）是表示值和对象的通用格式
//JSON 不支持注释。向 JSON 添加注释无效。
//如果一个对象具有 toJSON，那么它会被 JSON.stringify 调用。

let student113={name:"zero"};
let json1=JSON.stringify(student113);//将对象转换成json (也就是转换成字符串)
let zeros=JSON.parse(json1);//解码json字符串


//json1字符串 被称为JSON编码/序列化/字符串化/编组化  的对象
/*
    JSON编码的对象与对象字面量有几个重要的区别
    1.字符串使用双引号
    2.对象属性名称也是双引号的。这是强制性的。
    JSON支持以下数据类型：object ,array,   string,number,boolean,null
    JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。
    即：1.函数属性（方法）。
        2.Symbol 类型的键和值
        3.存储 undefined 的属性。
*/