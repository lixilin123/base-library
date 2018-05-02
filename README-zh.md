# base-methods 
[![npm](https://img.shields.io/npm/v/js-base-methods.svg)](https://www.npmjs.com/package/js-base-methods)
> [English Readme](https://github.com/lixilin123/base-methods)
### 1.简介
本仓库封装了一些前端常用的js方法；

### 2.使用方法
1. **安装**
- 使用 `npm` 命令安装：`npm install --save js-base-methods`
- 或者将根目录下的 `base_methods.js` 文件内容复制到你自己创建的js文件中
2. **引入**
- 使用ES6的方式引入你所需要的方法：`import {METHOD_NAME} from 'js-base-methods'`

### 3.具体API
1. 方法一：`getCookie`方法用于获取cookie中指定键的值
``` javascript
/**
 * @param name {string} cookie中的键名
 * @return {string} cookie中指定键的值
 */
```
2. 方法二：`getUrlParam`方法用于获取URL中指定参数的值
``` javascript
/**
 * @param name {string} URL中的参数名
 * @return {string} URL中的参数值
 */
```
3. 方法三：`objIsEmpty`方法用于判断js对象是否为空对象
``` javascript
/**
 * @param obj {object} 要判断的js对象
 * @return {boolean} js对象是否为空的布尔值，true为空，false为非空
 */
```
4. 方法四：`formatTime`方法用于格式化时间
``` javascript
/**
 * @param time {string|number} 时间戳，单位为秒
 * @param resType {string|number} 返回字符串的类型，默认为1
 *                                resType=1时，返回格式：2018-04-28
 *                                resType=2时，返回格式：2018-04-28 18:00:00
 *                                resType=3时，返回格式：18:00:00
 * @param connector {string} 年月日的连接符，默认为“-”
 * @return {string} 格式化后的时间
 */
```
5. 方法五：`countDown`方法用于倒计时
``` javascript
/**
 * @param callback {function} 回调函数，会传入三个字符串类型的参数，分别是倒计时的时、分、秒
 * @param endTime {string} 倒计时结束时间，如：2018/4/28 18:00:00
 * @param startTime {string} 倒计时开始时间，默认为现在，如：2018/5/1
 */
```
