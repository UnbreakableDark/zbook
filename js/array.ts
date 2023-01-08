//数组  有序的集合
//数组从0开始编号，通过[]的索引来获取元素，可以替换or新加入元素，不推荐直接加入
//数组有自己的 toString 方法的实现，会返回以逗号隔开的元素列表。

let arr108:Array<number>=[1,2,3];
let num108=arr108.length;//length 最大的数字索引值加一。
//console.log(num108.at(-1))  //获取数组的最后一个元素
let arr1081=new Array("apple","pen");
//如果使用单个参数（即数字）调用 new Array，那么它会创建一个 指定了长度，却没有任何项 的数组。

//queue
//push和unshift都可以一次添加多个元素
arr108.push(4);//在末端添加一个元素
arr108.pop();//从末端取出一个元素  取出：获取并删除
arr108.unshift(0);//在队首添加一个元素
arr108.shift();//在队首取出一个元素，之后的往前移。  取出：获取并删除


//for...of循环返回数组的值
for(let ass of arr108){
    //console.log(ass)  //1,2,3
}
for(let ass in arr108){
   // console.log(ass)  //0,1,2
   //通常来说，我们不应该用 for..in 来处理数组。有些类数组也可能被显示出来
}

//数组方法
//删除元素   arr.splice(start,delete_count,elem1-elem_n)
//它从索引 start 开始修改 arr：删除 deleteCount 个元素
//并在当前位置插入 elem1, ..., elemN。最后返回被删除的元素所组成的数组。

arr108.forEach(function(item,index,array){
    array[index]=item+1;
    //forEach方法允许为数组的每个元素都运行一个函数
});
console.log(arr108);//[2,3,4]
arr108.map(function(item,index,array){
    array[index]=item-1;
    //map方法对每个数组元素都调用函数，并返回结果数组
});
console.log(arr108);//[1,2,3]



//可迭代对象(iterable):任何对象都可以被定制为可在 for..of 循环中使用的对象。
/*
    Symbol.iterable  一个专门用于使对象可迭代的内建 symbol,
    1.当for...of循环启动后，它会调用这个方法，这个方法必须返回一个迭代器：一个有next()方法的对象。
    2.从此开始，for...of循环仅适用于这个被返回的对象
    3.当for...of循环希望取得下一个值的时候，它就调用这个对象的next方法。
    4.next方法返回的结果的格式必须是
    {done:Boolean,value:any}  当done=true时，循环结束，否则value是下一个值。
*/

//可迭代(iterable):是实现了 Symbol.iterator 方法的对象。
//类数组(array-like):是有索引和 length 属性的对象，所以它们看起来很像数组。

//Array.from(iterable/array-like)
//有一个全局方法 Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组。