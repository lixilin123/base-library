/**
 * 说明：getCookie方法用于获取cookie中指定键的值
 * @param name {string} cookie中的键名
 * @return {string} cookie中指定键的值
 */
const getCookie = (name)=>{
    let res = '';
    let arr = document.cookie.split('; ');
    arr.forEach((val)=>{
        let arr_tmp = val.split('=');
        if(name == arr_tmp[0]){
            res = arr_tmp.slice(1).join('=');
        }
    })
    return res;
}

/**
 * 说明：getUrlParam方法用于获取URL中指定参数的值
 * @param name {string} URL中的参数名
 * @return {string} URL中的参数值
 */
const getUrlParam = (name)=>{
    let res = '';
    let arr = window.location.search.substring(1).split('&');
    arr.forEach((val)=>{
        let arr_tmp = val.split('=');
        if(name == arr_tmp[0]){
            res = arr_tmp[1];
        }
    })
    return res;
}

/**
 * 说明：objIsEmpty方法用于判断js对象是否为空对象
 * @param obj {object} 要判断的js对象
 * @return {boolean} js对象是否为空的布尔值，true为空，false为非空
 */
const objIsEmpty = (obj)=>{
    // 方法一
    let isEmpty = true;
    for(let key in obj){
        isEmpty = false;
    }
    return isEmpty;

    // 方法二
    /*if(Object.keys(obj).length){
        return false;
    }
    return true;*/

    // 方法三
    /*if(JSON.stringify(obj) == "{}"){
        return true;
    }
    return false;*/
}

/**
 * 说明：formatTime方法用于格式化时间
 * @param time {string|number} 时间戳，单位为妙
 * @param resType {string|number} 返回字符串的类型，默认为1
 *                                resType=1时，返回格式：2018-04-28
 *                                resType=2时，返回格式：2018-04-28 18:00:00
 *                                resType=3时，返回格式：18:00:00
 * @param connector {string} 年月日的连接符，默认为“-”
 * @return {string} 格式化后的时间
 */
const formatTime = (time,resType,connector)=>{
    // 初始化参数
    resType = resType || 1;
    connector = connector || '-';
    // 定义补全函数
    let complete = (num)=>{
        if(num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    // 根据传入的返回类型，返回不同的格式
    if(resType == 1){
        let date = new Date(time*1000),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        return `${complete(year)}${connector}${complete(month)}${connector}${complete(day)}`
    } else if(resType == 2){
        let date = new Date(time*1000),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
        return `${complete(year)}${connector}${complete(month)}${connector}${complete(day)} ${complete(hours)}:${complete(minutes)}:${complete(seconds)}`
    } else if(resType == 3){
        let date = new Date(time*1000),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
        return `${complete(hours)}:${complete(minutes)}:${complete(seconds)}`
    }
}

/**
 * 说明：countDown方法用于倒计时
 * @param callback {function} 回调函数，会传入三个字符串类型的参数，分别是倒计时的时、分、妙
 * @param endTime {string} 倒计时结束时间，如：2018/4/28 18:00:00
 * @param startTime {string} 倒计时开始时间，默认为现在，如：2018/5/1
 */
const countDown = (callback,endTime,startTime)=>{
    // 定义补全函数
    let complete = (num)=>{
        if(num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }
    // 计算倒计时所需的时间差值
    let start = startTime ? new Date(startTime.replace(/-/g,'/')).getTime() : new Date().getTime(), //replace是为了兼容iOS的时间标准
        end = new Date(endTime.replace(/-/g,'/')).getTime();
    let difference = end - start;
    // 让倒计时活起来的定时器
    let timer = setInterval(()=>{
        difference = difference - 1000;
        if(difference <= 0){
            window.clearInterval(timer)
            difference = 0;
        }
        let hours = complete(Math.floor(difference/3600000)),
            minutes = complete(Math.floor((difference - hours * 3600000)/60000)),
            seconds = complete(Math.floor((difference - hours * 3600000 - minutes * 60000)/1000));
        callback(hours,minutes,seconds)
    },1000)
}

/**
 * 说明：getMobileOperatingSystem方法用于获取当前操作系统的类型
 * @return {string} 操作系统类型，如：'Windows Phone','Android','iOS','unknow'
 */
const getMobileOperatingSystem = ()=>{
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    // 要先判断 windows phone 的ua，因为其ua中包含android字样
    if (/windows phone/i.test(ua)) {
        return "Windows Phone";
    }
    if (/android/i.test(ua)) {
        return 'Android';
    }
    // window.MSStream 是为了区分iOS和IE11，因为IE11的ua中也植入了iPhone字样
    if(/iPad|iPhone|iPod/i.test(ua) && !window.MSStream) {
        return "iOS";
    }
    return 'unknown'
}

export {getCookie,getUrlParam,objIsEmpty,formatTime,countDown,getMobileOperatingSystem}