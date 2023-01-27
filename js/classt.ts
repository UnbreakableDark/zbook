class TClass{
    constructor(name:string){
        this.name=name;
        //new 会自动调用 constructor() 方法，因此我们可以在 constructor() 中初始化对象。
    }
    name:string="hello";
    sayHi(){
        console.log(this.name);
    }
}

class T1Class extends TClass{
    constructor(name:string){
        super(name);
    }
    sayHi(): void {
        console.log(super.name+"子代");
    }
    public static  readonly classical:string="T1Class";//都可以叠 哈哈
    private _name:string="return a name";
}

/*
    类不仅仅是语法糖，类是函数
    1.首先，通过class创建的函数具有特殊的内部属性标记 [IsClassConstructor:true].
因此它与手动创建不完全相同。
    2.类方法不可枚举
类定义将 "prototype" 中的所有方法的 enumerable 标志设置为 false。
    3类总是使用 use strict。 在类构造中的所有代码都将自动进入严格模式。
    4.类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 User.prototype。

    类继承
    extends

    我们可以把一个方法作为一个整体赋值给类。这样的方法被称为 静态的（static）。

    受保护的属性通常以下划线 _ 作为前缀。
    在语言级别，# 是该字段为私有的特殊标志。我们无法从外部或从继承的类中访问它。
    私有字段与公共字段不会发生冲突。我们可以同时拥有私有的 #waterAmount 和公共的 waterAmount 字段。
*/