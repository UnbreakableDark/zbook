/*
    全局对象：全局对象提供可在任何地方使用的变量和函数。默认情况下，这些全局变量内建于语言或环境中。
    在浏览器中，它的名称为  window，在node.js中 它是 global
    最近，globalThis被作为全局对象的标准加入到JS中，所有环境都应该支持该名称。
所有主流浏览器都支持它。

    全局对象的属性都可以被直接访问。
    在浏览器中，使用var声明的全局函数和变量都会成为全局对象的属性。
    函数声明（特指在主代码流中具有 function 关键字的语句，而不是函数表达式）也有这样的效果。
*/