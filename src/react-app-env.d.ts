/// <reference types="react-scripts" />

// 声明文件
//声明的变量，全局可以访问无需 import
//当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能. 
//    如 安装第三方库 lodash, 直接导入使用在 ts 中会报错
//    提示要安装@type/lodash或者包含declare module 'lodash' 到声明文件(即本文件);
//          如果react-app-env.d.ts文件中有声明lodash模块的语句，就会被优先使用，忽略node_modules中的声明。
//          大部分第三方库都带有自己的声明文件,可以通过 @type/module 方式安装。默认会自动识别
//      
//语法:
// 声明的变量一般都是以declare 开头，
//也可以是 "/// <reference types="xxx" />" 三斜线指令, 用来引用另一个库的类型; 三斜线指令必须放在文件的最顶端;
//不允许出现 import, export 关键字的。一旦出现了，那么他就会被视为一个 npm 包, 就不再是全局变量的声明文件了


// declare module "./xxx/xxx.css" {} 扩展模块，可用于在一个文件中声明多个模块的类型