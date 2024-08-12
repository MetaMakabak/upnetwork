import {envConfig} from "./env";

const {baseUrl} = envConfig;
// console.log(baseUrl, rtc_appid, webIMappKey);
const _ = baseUrl + '/api/v1';

const url = {
    login: _ + '/account/login/privy',
    info: _ + '/account/info',
    check: _ + '/cdkey/redeem',
    retry: _ + '/cdkey/retry',
    modifyname: _ + '/account/modifyname',
    invitecodeBind: _ + '/invitecode/bind',
    invitecodeList: _ + '/invitecode/list',
}
export {
    url,
    baseUrl,
    _
}
