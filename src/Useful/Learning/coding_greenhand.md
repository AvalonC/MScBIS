---
title: 编程新手上路
author: 这是个小号🎺
comment: false
tag:
 - 资源
prev: false
next: false
---
（一些小小小小的学习编程的心得，逻辑不够清晰严谨请原谅）

1. 个人认为认认真真学懂一个编程语言的基本逻辑，学其他的主要就是学习其他语言的编写习惯了，比如有的需要分号，有的用缩进。我本科第一个学过的语言是C++，刚学的时候也很崩溃，但是有了**夯实的基础**，后面学习其他的都不觉得有那么痛苦了。

::: tip 编程语言之相似
编程语言之间存在奇妙的相似性，通常而言，一通百通；
下面展示了三个语言在完成这样一件事上的代码：
   1. 声明一个名为number的变量，并为其赋值。
   2. 使用if语句进行条件判断。
   3. 如果条件为真，则输出“数字大于5”

::: code-tabs#shell

@tab Java
```java
public class Main {  
    public static void main(String[] args) {  
        int number = 10;  
        if (number > 5) {  
            System.out.println("Number is greater than 5");  
        }  
    }  
}
```
@tab JavaScript
```javascript
let number = 10;  
if (number > 5) {  
    console.log("Number is greater than 5");  
}
```
@tab Python
```python
number = 10  
if number > 5:  
    print("Number is greater than 5")
```

:::
 
2. 最基本的语句一定要**理解的非常透彻**：for/if-else/while/do-while/… 无论在哪个编程语言中，这些循环的基本逻辑都是一样的。这些基本的语句就像是工具包里的小工具，只有真的理解了，才会用。

3. 写题目的时候一定要善用**注释**，会帮助理清逻辑。可以先用注释构建出**逻辑框架**，再一点点填写“血肉”。

这个过程就很像是在面对问题的时候，需要选择使用哪个工具包中的哪个工具来解决问题。刚接触编程的时候都会很迷茫，但是一定要坚持独立思考。举个简单的例子：Java中如何将图像居中显示呢？如果没有像word里一键居中的按键，其实就是把图像平移一定的距离就好。再比如如何用Java实现一个滚动的字幕？其实可以用数组实现。（也许会有**其他更好的解决方法**，但是**能想出来一个，就是很好的开始**）

4. 学习编程**只看prof的ppt是永远学不会**的，看别人写几百题不如自己实操一题。但是太简单的题目不会有太大的帮助，感到有一丝丝的挑战，才能明显提高编程水平。

当学生身份暂时永远离开我的时候，回顾这5年，没想到居然是和编程双向奔赴了

希望大家都能爱上编程

::: tip 来源
此文来自BIS 23Fall学生分享；
IS5312：总评A+
IS5311：总评A+
:::