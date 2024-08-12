/**
 * 网络请求配置
 */
import axios from "axios";
import {baseUrl,} from "./configUri";
import { message } from "antd";
const xhrMap = {}
// let cancel;
export let source = axios.CancelToken.source()
// const filterErrorCode = (code)=>{
//     for (const item of errorCode) {
//         if(item.id == code){
//             return item?.tips;
//             break
//         }
//     }
//     return ''
// }

axios.defaults.timeout = 100000;
axios.defaults.retry = 0;

axios.defaults.retryDelay = 1000;

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        // config.data = JSON.stringify(config.data);
        if(!localStorage.getItem('token')){
            config.headers = {
                "Content-Type": "application/json",
            };
        }else{
            config.headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
            };
        }
        
        
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        const urlKey = response?.url || response?.request?.responseURL
        if (xhrMap[urlKey]) {
            xhrMap[urlKey] = null
        }
        if (response?.data?.errCode === 2) {
            console.log("token expire");
        }
        return response;
    },
    (err) => {
        if (axios.isCancel(err)) {
            console.log('Request canceled:', err.message);
            return
        }
        console.log("response error: ", err);
        const config = err.config;

        if(!config || !config.retry) return Promise.reject(err);

        config.__retryCount = config.__retryCount || 0;

        if (config.__retryCount >= config.retry) {

            return Promise.reject(err);
        }
    
        config.__retryCount += 1;
    
        console.log(config.url +' retry' + config.__retryCount + ' times');
    
        var backoff = new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, config.retryDelay || 1000);
        });
    
        return backoff.then(function () {
            return axios(config);
        });
        
    }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        const xhr = axios.get(url, {
            params: params
        })
        xhr.then((response) => {
            landing(url, params, response.data);
            resolve(response.data);
        })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        let xhr;
        xhr = axios.post(url,data)

        xhr.then(
            (response) => {
                if(response?.data?.code === 2){
                    localStorage.clear();
                    window.location.href = window.location.origin;
                }
                resolve(response ? response.data : {});
            },
            (err) => {
                reject(err);
            }
        );
    });
}

//统一接口处理，返回数据
export default function http(method, url, param) {
    return new Promise((resolve, reject) => {
        switch (method) {
            case "get":
                get(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        const {code,message:msg} = error?.response?.data;
                        if(error?.response?.status === 401){
                            localStorage.clear()
                            window.location.reload()
                        }
                        message.error({ content: msg})
                        reject(msg);
                    });
                break;
            case "post":
                post(url, param)
                    .then(function (response) {
                        // const code = response?.code;
                        // if(code && code !== 0 && code !== 202 && code !== 318){
                        //     const errorTips = filterErrorCode(code);
                        //     errorTips && message.destroy();
                        //     errorTips && message.error({content:errorTips});
                        // }
                        resolve(response);
                    })
                    .catch(function (error) {
                        const {code,message:msg} = error?.response?.data;
                        if(error?.response?.status === 401){
                            localStorage.clear()
                            window.location.reload()
                        }
                        message.error({ content: msg })
                        reject(msg);
                    });
                break;
            default:
                break;
        }
    });
}


/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
    if (data.code === -1) {
    }
}

