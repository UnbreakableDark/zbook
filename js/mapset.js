//Map  是一个带键的数据项的集合，就像object一样，但最大的区别是，map允许任何类型的键。
let map1=new Map();//新建map
map1.set("key",1);//根据键创建值
console.log(map1.get("key"),map1.has("key"),map1.size);//1,true,1
//get由键得到值，has  判断是否有某键，size  map里键值对的个数
map1.delete("key");//删除key
map1.clear();//清空map

//使用对象作为键是 Map 最值得注意和重要的功能之一。在 Object 中，我们则无法使用对象作为键。
//map迭代
map1.keys();//遍历并返回一个包含所有键的可迭代对象。
map1.values();//遍历并返回一个包含所有值的可迭代对象。
map1.entries();//遍历并返回一个包含所有实体[key,value]的可迭代对象，for...of  默认使用
map1.forEach(function(value,key,map){
    console.log(`key ${key},vaule:${value}`);
})

let obj109={};
Object.entries(obj109);//从对象创建map
Object.fromEntries(map1);//从map创建对象





//——————————————————————————————————————————————————————————
//set 值的集合，它的每个值只能出现一次
let set1=new Set([1,2,3]);//创建一个 set，
//如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
set1.add(4);//添加值
set1.delete(1);//删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
set1.has(2);//如果 value 在 set 中，返回 true，否则返回 false
set1.clear();//清空set
set1.size;//返回元素个数

//set迭代
set1.keys();// 遍历并返回一个包含所有值的可迭代对象
set1.values();//与 set.keys() 作用相同，这是为了兼容 Map.
set1.entries();//遍历并返回一个包含所有的实体 [value, value] 的可迭代对象，也是为了兼容 Map。



//weakMap
//WeakMap 的键必须是对象，不能是原始值
//如果我们使用对象作为常规 Map 的键,那么当 Map 存在时,该对象也将存在。
//它会占用内存，并且不会被（垃圾回收机制）回收。
//weakMap  不会阻止垃圾回收机制对作为键的对象的回收
//WeakMap 不支持迭代以及 keys(),values() 和 entries() 方法。所以没有办法获取 WeakMap 的所有键或值。
//WeakMap只有以下方法
let weak109=new WeakMap();
weak109.set(obj109,"11");
weak109.get(obj109);
weak109.has(obj109);
weak109.delete(obj109);



//WeakSet
//与set类似，我们只能往WeakSet中添加对象，而不能是原始值
//对象只有在其它某个（些）地方能被访问的时候，才能留在 WeakSet 中。
//跟 Set 一样，WeakSet 支持 add，has 和 delete 方法，但不支持 size 和 keys()，并且不可迭代。
