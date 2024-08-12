import { message } from "antd";
import moment from "moment";
const sliceStr = (str, num, ignoreTail) => {
    // str = displayFilter(str)
    if (str) {
        if (ignoreTail) {
            return str.slice(0, num) + '…'
        }
        return str.slice(0, num) + '…' + str.slice(-num)
    }
    return ''
}
const copyFn = (text)=> {
    let copyInput = document.createElement("input");
    document.body.appendChild(copyInput);
    copyInput.setAttribute("value", text);
    copyInput.select();
    document.execCommand("Copy");
    copyInput.remove();
    message.destroy();
    message.success({content: 'copied!'})
}

const renderTime = (time, timeStyle) => {
    if (!time || isNaN(Number(time))) return "";
    const localStr = new Date(Number(time));
    const localMoment = moment(localStr);
    const localFormat = timeStyle
        ? localMoment.format(timeStyle)
        : localMoment.format("MM-DD HH:mm");
    return localFormat;
}

function getUrlParams(key) {
    let href = window.location.href;
    let urlStr = href.substring(href.indexOf('?') + 1);
    if (!urlStr) {
        return ''
    }
    let obj = {};
    let paramsArr = urlStr.split('&')
    for (let i = 0, len = paramsArr.length; i < len; i++) {
        let str = paramsArr[i];
        let key = str.substring(0, str.indexOf("="));
        let value = str.substring(str.indexOf("=") + 1);
        obj[key] = value;
    }
    return obj[key] || ''
}

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
};

export {
    sliceStr,
    copyFn,
    renderTime,
    getUrlParams,
    debounce
}
