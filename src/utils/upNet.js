import {url} from "./configUri";
import http from "./axios";
const loginFn = (accessToken) => {
    return new Promise((resolve, reject) => {
        http('post', url.login, {
            accessToken
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const getInfo = () => {
    return new Promise((resolve, reject) => {
        http('get', url.info, {
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const checkCdkey = (cdkey) => {
    return new Promise((resolve, reject) => {
        http('post', url.check, {
            cdkey
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const retry = (cdkey) => {
    return new Promise((resolve, reject) => {
        http('post', url.retry, {
            cdkey
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const modifyname = (newName) => {
    return new Promise((resolve, reject) => {
        http('post', url.modifyname, {
            newName
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const invitecodeBind = (inviteCode) => {
    return new Promise((resolve, reject) => {
        http('post', url.invitecodeBind, {
            inviteCode
        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}

const invitecodeList = () => {
    return new Promise((resolve, reject) => {
        http('get', url.invitecodeList, {

        }).then((res) => {
            resolve(res)
        }).catch(e => {
            reject(e);
        })
    })
}
export {
    loginFn,
    getInfo,
    checkCdkey,
    retry,
    modifyname,
    invitecodeList,
    invitecodeBind
}