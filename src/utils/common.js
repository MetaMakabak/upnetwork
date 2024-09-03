import { message } from "antd";
import {
    EthRPC,
    BaseRPC,
    BaseSepoliaRPC,
} from "./env";
import {PrivyProvider, addRpcUrlOverrideToChain } from '@privy-io/react-auth';
import {baseSepolia, base, mainnet } from 'viem/chains';
import { movementTestnet } from "./movementTestnet.ts";
import { getGasConfig } from "./gas";
import { ethers } from 'ethers';
import ChainToken from "./json/ChainToken.json";
import ChainInfo from "./json/ChainInfo.json";
import moment from "moment";
import { erc20Abi } from "viem";
const invitePre = "@"
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

const ethChain = (EthRPC && EthRPC.length > 5) ? addRpcUrlOverrideToChain(mainnet, EthRPC) : mainnet;
const baseChain = (BaseRPC && BaseRPC.length > 5) ? addRpcUrlOverrideToChain(base, BaseRPC) : base;
const baseSepoliaChain = (BaseSepoliaRPC && BaseSepoliaRPC.length > 5) ? addRpcUrlOverrideToChain(baseSepolia, BaseSepoliaRPC) : baseSepolia;
const movementTestnetChain = movementTestnet;

const GetSupportedChainList = () =>{
    return [ethChain, baseChain, movementTestnetChain, baseSepoliaChain];
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

const formatUtcTime = (time) => {
    let timeDate = new Date(Number(time));
    let year = timeDate.getUTCFullYear() % 100;
    let month = timeDate.getUTCMonth() + 1;
    let day = timeDate.getUTCDate();
    let hour = timeDate.getUTCHours();
    let minute = timeDate.getUTCMinutes();
    return `${day?.toString()?.padStart(2, '0')}-${month?.toString()?.padStart(2, '0')}-${year?.toString()?.padStart(2, '0')} ${hour?.toString()?.padStart(2, '0')}:${minute?.toString()?.padStart(2, '0')}`;
}

const getMonthString = (month) => {
    if (month === 1){
        return 'January';
    }
    else if (month === 2){
        return 'February';
    }
    else if (month === 3){
        return 'March';
    }
    else if (month === 4){
        return 'April';
    }
    else if (month === 5){
        return 'May';
    }
    else if (month === 6){
        return 'June';
    }
    else if (month === 7){
        return 'July';
    }
    else if (month === 8){
        return 'August';
    }
    else if (month === 9){
        return 'September';
    }
    else if (month === 10){
        return 'October';
    }
    else if (month === 11){
        return 'November';
    }
    else if (month === 12){
        return 'December';
    }
    else{
        return '';
    }
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

const sliceString = (str, startLen = 5, endLen = 4) => {
    let res = str;
    if (res?.length > startLen + endLen){
        res = `${res.slice(0,startLen)}...${res.slice(res.length - endLen)}`;
    }
    return res;
}

const supportedChainTokenList = () => {
    let res = [];
    if (ChainToken?.length > 0){
        for (let i = 0; i < ChainToken?.length; i++){
            if (ChainToken[i].isEnable){
                let chainInfo = null;
                if (ChainInfo?.length > 0){
                    for (let j = 0; j < ChainInfo?.length; j++){
                        if (ChainInfo[j].chainId == ChainToken[i].chainId){
                            chainInfo = ChainInfo[j];
                            break;
                        }
                    }
                }
                res.push({
                    ...ChainToken[i],
                    chainInfo: {
                        ...chainInfo || null
                    }
                });
            }
        }
    }
    return res;
}

const floorToFix = (num, digits) => {
    if (num) {
        let tempNum = num;
        for (let i = 0; i < digits; i++) {
            tempNum = tempNum * 10;
        }
        tempNum = Math.floor(tempNum);
        for (let i = 0; i < digits; i++) {
            tempNum = tempNum / 10;
        }
        return tempNum;
    }
    return 0;
}

const convertBalance = (balance) => {
    if (balance >= 1000000000) {
        return `${Number(floorToFix(Number(balance / 1000000000).toFixed(1), 1))}b`;
    } else if (balance >= 1000000) {
        return `${Number(floorToFix(Number(balance / 1000000).toFixed(1), 1))}m`;
    } else if (balance >= 1000) {
        return `${Number(floorToFix(Number(balance / 1000).toFixed(1), 1))}k`;
    } else if (balance >= 10) {
        return `${Number(floorToFix(Number(balance), 2).toFixed(2))}`;
    } else if (balance > 0.0001) {
        return `${Number(floorToFix(Number(balance), 4).toFixed(4))}`;
    } else if (balance > 0) {
        return `<0.0001`; 
    } else {
        return 0;
    }
}

const getCurrentChainTokenInfoById = (id) => {
    let res = null;
    if (ChainToken?.length > 0){
        for (let i = 0; i < ChainToken?.length; i++){
            if (ChainToken[i].ID == id){
                res = ChainToken[i];
                break;
            }
        }
    }
    return res;
}

const getCurrentChainInfoByTokenId = (tokenId) => {
    let res = null;
    let tokenInfo = getCurrentChainTokenInfoById(tokenId);
    if (tokenInfo && ChainInfo?.length > 0){
        for (let i = 0; i < ChainInfo?.length; i++){
            if (ChainInfo[i].chainId == tokenInfo.chainId){
                res = ChainInfo[i];
                break;
            }
        }
    }
    return res;
}

const getWeb3NativeTokenBalance = ({ wallets, chainId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            await embeddedWallet.switchChain(chainId);
            const provider = await embeddedWallet.getEthersProvider();
            const balance = await provider.getBalance(embeddedWallet.address);
            resolve(ethers.utils.formatUnits(balance))
        } catch (error) {
            console.error("[get balance failed]", error);
            reject('get balance failed')
        }
    })
}

const sendTransfer = (wallets, payeeAddress, amount, chainId, sendTransaction = () =>{}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            const provider = await embeddedWallet.getEthersProvider(); // ethers provider object

            await embeddedWallet.switchChain(chainId);
            
            let balance = await provider.getBalance(embeddedWallet.address);

            const signer = provider.getSigner(); // ethers signer object

            let txRequest = {
                from: embeddedWallet.address,
                to: payeeAddress,
                value: ethers.utils.parseEther(amount),
            };

            const gasData = await getGasConfig(signer);
            
            txRequest = {
                ...txRequest,
                ...gasData
            }

            const tx = await signer.sendTransaction(txRequest).then(res => {
                resolve(res);
            }).catch(e => {
                reject(e);
            });
        } catch (e) {
            reject(e);
        }
    })
}
  
const getWeb3TokenBalance = ({ wallets, addr, chainId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const embeddedWallet = wallets.find((wallet) => (wallet.walletClientType === 'privy'));
            await embeddedWallet.switchChain(chainId);
            const provider = await embeddedWallet.getEthersProvider();
            const tokenContract = new ethers.Contract(addr, erc20Abi, provider);
            const balance = await tokenContract.balanceOf(embeddedWallet.address)
            console.log(ethers.utils.formatUnits(balance));
            resolve(ethers.utils.formatUnits(balance))
        } catch (error) {
            reject('get balance failed')
        }
    })
}

export {
    sliceStr,
    invitePre,
    copyFn,
    renderTime,
    formatUtcTime,
    sliceString,
    getUrlParams,
    GetSupportedChainList,
    getMonthString,
    supportedChainTokenList,
    getCurrentChainTokenInfoById,
    getCurrentChainInfoByTokenId,
    getWeb3NativeTokenBalance,
    getWeb3TokenBalance,
    sendTransfer,
    convertBalance,
    debounce
}
