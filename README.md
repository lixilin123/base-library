# base-methods 
[![npm](https://img.shields.io/npm/v/js-base-methods.svg)](https://www.npmjs.com/package/js-base-methods)    
    [![npm](https://img.shields.io/npm/dt/js-base-methods.svg)](https://www.npmjs.com/package/js-base-methods)

> [中文文档](https://github.com/lixilin123/base-methods/blob/master/README-zh.md)
### 1.Introduction
This is a github repository that contains a number of commonly used JavaScript methods.

### 2.Usage
1. **Installation**
- Use the `npm` command to install：`npm install --save js-base-methods`
- Or copy the contents of the `base_methods.js` file in the root directory into the js file you created yourself.

2. **import**
- Import the methods you need using ES6：`import {METHOD_NAME} from 'js-base-methods'`

### 3.API
1. The `getCookie` method is used to get the value of the specified key in the cookie.
``` javascript
/**
 * @param name {string}     // the key in cookie
 * @return {string}         // the value in cookie
 */
```
2. The `getUrlParam` method is used to get the value of the specified parameter in the URL.
``` javascript
/**
 * @param name {string}     // the parameter key in the URL
 * @return {string}         // the parameter value in the URL
 */
```
3. The `objIsEmpty` method is used to determine if a js object is an empty object.
``` javascript
/**
 * @param obj {object}      // the js object to be judged
 * @return {boolean}        // True is empty, false is not empty.
 */
```
4. The `formatTime` method is used to format time.
``` javascript
/**
 * @param time {string|number}       // timestamp in seconds
 * @param resType {string|number}    // The format of the returned string, which defaults to 1.
 *                                         // resType=1, the format is 2018-04-28
 *                                         // resType=2, the format is 2018-04-28 18:00:00
 *                                         // resType=3, the format is 18:00:00
 * @param connector {string}         // Year, month, day connector, default is '-'.
 * @return {string}                  // formatted time
 */
```
5. The `countDown` method for countdown
``` javascript
/**
 * @param callback {function}        // Callback function, which will be passed three string type parameters, respectively countdown hours, minutes, seconds.
 * @param endTime {string}           // countdown end time, such as: 2018/4/28 18:00:00
 * @param startTime {string}         // countdown start time, such as: 2018/5/1, the default is now.
 */
```
6. The `getMobileOperatingSystem` method is used to get the current operating system type.
``` javascript
/**
 * @return {string}         // operating system type, such as 'Windows Phone','Android','iOS' or 'unknow'
 */
```
