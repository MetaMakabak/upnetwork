import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Button, Drawer, Input, Modal, message } from 'antd';
import "./index.css"
import { usePrivy, useWallets } from "@privy-io/react-auth";
import useLocalStorageState from '../../common/useLocalStorageState';
import CustomIcon from '../../common/CustomIcon';
import { 
    copyFn, 
    renderTime, 
    sliceStr, 
    getUrlParams,
    invitePre,
    supportedChainTokenList,
    getCurrentChainTokenInfoById,
    getCurrentChainInfoByTokenId,
    getWeb3NativeTokenBalance,
    sendTransfer,
} from '../../utils/common';
import {
    checkCdkey,
    getInfo,
    loginFn,
    retry,
    modifyname,
    getExchangeUsd,
    invitecodeList,
    invitecodeBind
} from '../../utils/upNet';
import { envConfig } from '../../utils/env';
import { useLocation } from 'react-router-dom';
import ModalBecomeLeader from '../../Modal/ModalBecomeLeader';
import ModalDistribute from '../../Modal/ModalDistribute';
const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);

    return useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};

// const hrefInviteCode = getUrlParams(`invite`);

const Info = ({
    setShowOfficialVerification = () => {}
}) => {
    const [hrefInviteCode,setHrefInviteCode] = useState(null)
    const [token, setToken] = useLocalStorageState('token', '')
    const { ready, user, login, getAccessToken, logout, exportWallet } = usePrivy();
    const { wallets } = useWallets();
    const location = useLocation()
    const [showInfo, setShowInfo] = useState(true);

    useEffect(()=>{
        const path = location.hash;
        if(path?.indexOf('#/'+invitePre) === 0){
            setHrefInviteCode(path.slice(3))
        }
        if('#/login' == path && !token){
            loginPrive()
        }
        if ('#/officialverification' == path){
            let bgElement = window.document.getElementById("wrap");
            bgElement.style.display = 'none';
            let tagElement = window.document.getElementById("Layer_1");
            tagElement.style.display = 'none';
            setShowInfo(false);
            setShowOfficialVerification(true);
        }
        else{
            let bgElement = window.document.getElementById("wrap");
            bgElement.style.display = 'block';
            let tagElement = window.document.getElementById("Layer_1");
            tagElement.style.display = 'block';
            setShowInfo(true);
            setShowOfficialVerification(false);
        }
    },[location,token])



    
    const [userInfo, setUserInfo] = useState(null);

    const [showModal, setShowModal] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [cdkey, setCdkey] = useState('')
    const [checking, setChecking] = useState(false)

    const [list, setList] = useState([])

    

    const [checkSuccess, setCheckSuccess] = useState(false)

    const [showEditNamePanel, setShowEditNamePanel] = useState(false)
    const [showBindPanel, setShowBindPanel] = useState(false)
    const [showBecomeLeader, setShowBecomeLeader] = useState(false);
    const [showDistribute, setShowDistribute] = useState(false);

    const [accName, setAccName] = useState('')
    const [checkingAccname, setCheckingAccname] = useState(false)

    const [showSuggestion, setShowSuggestion] = useState(false)


    const [showReferralPanel, setShowReferralPanel] = useState(false)

    const [referralCode, setReferralCode] = useState('')
    const [checkingReferralCode, setCheckingReferralCode] = useState(false)

    const [suggestionList, setSuggestionList] = useState([])


    const [referralList, setReferralList] = useState([])

    const [menuOpenChainList, setMenuOpenChainList] = useState(false);

    const [selectedChainTokenId, setSelectedChainTokenId] = useState(supportedChainTokenList()?.length > 0?supportedChainTokenList()[0].ID:0)

    const [showSendPanel, setShowSendPanel] = useState(false);
    const [showDepositPanel, setShowDepositPanel] = useState(false);
    const [sendAddress, setSendAddress] = useState('');
    const [sendCoinAccount, setSendCoinAccount] = useState(0);
    const [sendErrorMsg, setSendErrorMsg] = useState('');
    const [sendTokenState, setSendTokenState] = useState(0);//0:fress, 1:loading, 2:success, 3:failed

    const [updateCount, setUpdateCount] = useState(0);
    const [web3TokenBalanceUpdateCount, setWeb3TokenBalanceUpdateCount] = useState(30);
    const [userInfoUpdateCount, setUserInfoUpdateCount] = useState(10);
    const tokenBalanceRef = useRef({});
    const [exchangeUsdList, setExchangeUsdList] = useState(null);

    const [openAccountNft, setOpenAccountNft] = useState(false);

    const transactionLockRef = useRef(false);

    const nftWebpUrl_high = 'https://v-sg.turnup.so/502dc1be5f9d71ef895987c7371d0102/image/dynamic/67cd1a56783949a5bb11473050473678.webp';
    const nftWebpUrl_low = '/img/upmobile-preorder-nft-half.webp';

    const { 
        userName, 
        inviteCode, 
        isBind,
        distributor,
        inviteName,
    } = useMemo(() => {
        return userInfo || {}
    }, [userInfo])

    /*const distributor = {
        "is": true,
        "wallet": {
            "ethereum": "0x123456789",
            "tron": "0x987654321",
        },
        "balance": {
            "ethereum": 100860,
            "tron": 114514.1919810,
        }
    }*/

    const currentChainTokenInfo = useMemo(() => {
        let res = {
            ...getCurrentChainTokenInfoById(selectedChainTokenId),
            chainInfo: {
                ...getCurrentChainInfoByTokenId(selectedChainTokenId),
            }
        }
        return res;
    }, [selectedChainTokenId]);

    const currentChainInfo = useMemo(() => {
        return getCurrentChainInfoByTokenId(selectedChainTokenId);
    }, [selectedChainTokenId])

    const sendAvailable = useMemo(() => {
        return sendAddress?.length > 0 && sendCoinAccount > 0;
    }, [sendAddress, sendCoinAccount])

    useEffect(() => {
        userName && setAccName(userName)
    }, [userName])

    useEffect(() => {
        console.log(`hrefInviteCode`,hrefInviteCode)
        if (userName && token && !isBind && hrefInviteCode) {
            invitecodeBind(hrefInviteCode).then(()=>{
                getInfoFn()
            }).catch(e=>{
                console.error(e);
            })
        }
    }, [isBind, hrefInviteCode, userName, token])


    const walletReady = useMemo(() => {
        return ready && wallets.length
    }, [ready, wallets])

    const [errorTips, setErrorTips] = useState('')

    useEffect(() => {
        if (!showModal) {
            setCheckSuccess(false)
        }
    }, [showModal])


    // login

    useEffect(() => {
        if (walletReady && !token) {
            getAccessToken().then(res => {
                console.log(res);
                // setAuthToken(res);
                getToken(res)
            }).catch(e => {
                console.error('Privy Login Failed', e);
            });


        }
    }, [walletReady, token])

    const updateExchangeUsd = () => {
        getExchangeUsd().then(res => {
            setExchangeUsdList(res?.list);
        }).catch(e => {
            console.error(e);
        })
    }

    const getToken = (privyToken) => {
        loginFn(privyToken).then(res => {
            console.log(res)
            const { token, uid } = res || {}
            setToken(token)
        }).catch(e => {

            console.error(e);
        })
    }

    const loginPrive = async () => {
        if (walletReady) {
            // navigate(mainHomePath, { replace: true });
            return
        }
        // await logout()
        login().then().catch(e => {
            console.error('Privy Login Failed', e);
            logout()
            // window.location.reload()
        })
    }

    const walletAddr = useMemo(() => {
        if (!wallets?.length) return ""
        return wallets.find((wallet) => (wallet.walletClientType === 'privy'))?.address
    }, [wallets])

    const getInfoFn = useDebounce(() => {
        getInfo().then(res => {
            setUserInfo(res)
            setList(res?.cdkeys || [])
        }).catch(e => {
            console.error(e);
        })
    }, 100)

    const getInvitecodeList = () => {
        invitecodeList().then(res => {
            console.log(`getInvitecodeList------>`, res);
            setReferralList(res?.dataList || [])
        }).catch(e => { console.error(e); })
    }

    useEffect(() => {
        if (token) {
            getInfoFn()
            getInvitecodeList()
        }
    }, [token])



    const checkFn = () => {
        setChecking(true)
        checkCdkey(cdkey).then(res => {
            console.log(res);
            setCheckSuccess(true)
            setChecking(false)
            getInfoFn()
            setCdkey('')
        }).catch(e => {
            getInfoFn()
            setChecking(false)
            console.error(e);
            setErrorTips('Invalid code')
        })
    }

    const retryFn = () => {
        if (unMintList?.length > 0) {
            unMintList?.map(i => {
                const { cdkey } = i;
                retry(cdkey)
            })
        }
        getInfoFn()
    }

    const unMintList = useMemo(() => {
        if (list?.length > 0) {
            const _l = list?.filter(i => !i?.minted)
            return _l
        }
        return []
    }, [list])

    const handleInputChange = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-Z0-9_.]{0,16}$/;
        setEditUserNameFailed(false)
        if (regex.test(value) || value === '') {
            setAccName(value);
        }
    };

    const handleSendAddressChange = (e) => {
        setSendAddress(e.target.value);
    };

    const handleSendCoinAccountChange = (e) => {
        setSendCoinAccount(e.target.value);
    }

    const [editUserNameFailed, setEditUserNameFailed] = useState(false)



    const editUserNameFn = () => {
        setCheckingAccname(true)
        modifyname(accName).then(res => {
            setCheckingAccname(false)
            const { inviteCode, newName, recommendName } = res
            if (inviteCode && newName) {
                setSuggestionList([])
                setAccName(newName)
                message.success({ content: `succeed!` })
                getInfoFn()
                setEditUserNameFailed(false);
            } else {
                message.error({ content: `Edit name failed!` })
                setSuggestionList(recommendName || [])
                setEditUserNameFailed(true)
            }
        }).catch(e => {
            setCheckingAccname(false)
            setEditUserNameFailed(true)
            setShowSuggestion(true)
        })

    }

    const accNameError = useMemo(() => {
        if (accName?.length < 4 || editUserNameFailed) {
            return true
        }
        return false
    }, [accName, editUserNameFailed])

    const bindFn = () => {
        setCheckingReferralCode(true)
        invitecodeBind(referralCode).then(res => {
            setCheckingReferralCode(false)
            message.success({ content: `bind succeed!` })
            getInfoFn()
            setShowBindPanel(false)
            setErrorTips("");
            console.log(res);
        }).catch(e => {
            setCheckingReferralCode(false)
            setErrorTips("Invalid code");
            console.error(e);
        })
    }

    const updateTokenBalance = async (chainTokenItem) => {
        if (chainTokenItem){
            let tempChainTokenItem = chainTokenItem;
            try{

                let result = await getWeb3NativeTokenBalance({
                    wallets: wallets,
                    chainId: tempChainTokenItem.chainId
                });
                if (result){
                    tokenBalanceRef.current[tempChainTokenItem?.ID] = result;
                }
                else{
                    tokenBalanceRef.current[tempChainTokenItem?.ID] = 0;
                }
            }
            catch(e){
                console.error("[updateTokenBalance error]", e);
            }
        }
    }

    const updateAllTokenBalance = async () => {
        let coinList = supportedChainTokenList();
        if (coinList?.length > 0){
            for (let i = 0; i < coinList?.length; i++){
                if (!transactionLockRef.current){
                    await updateTokenBalance(coinList[i]);
                }
            }
        }
    }

    const sendFn = () => {
        if (transactionLockRef.current){
            return;
        }
        if (getCurrentCoinValue() < sendCoinAccount){
            setSendTokenState(3);
            setSendErrorMsg('insufficient funds');
        }
        else{
            setSendTokenState(1);
            transactionLockRef.current = true;
            sendTransfer(wallets, sendAddress, sendCoinAccount.toString(), currentChainTokenInfo?.chainId).then(res => {
                setSendTokenState(2);
                transactionLockRef.current = false;
                /*setTimeout(() => {
                    updateTokenBalance(currentChainTokenInfo);
                }, 5000);*/
            }).catch(e => {
                setSendTokenState(3);
                transactionLockRef.current = false;
                console.error(e);
            })
        }
    }

    const getCurrentCoinValue = () => {
        let value = tokenBalanceRef.current[currentChainTokenInfo?.ID];
        if (value > 0){
            if (value < 0.0001){
                return "<0.0001";
            }
            else{
                return Number(Number(value).toFixed(4));
            }
        }
        else{
            return 0;
        }
    }

    const getCurrentUsdValue = () => {
        let value = tokenBalanceRef.current[currentChainTokenInfo?.ID];
        let rate = 0;
        if (currentChainTokenInfo?.chainId === 1 || currentChainTokenInfo?.chainId === 8453){
            rate = exchangeUsdList?.ethereum;
        }
        else if (currentChainTokenInfo?.chainId === 30732){
            rate = exchangeUsdList?.movement;
        }
        if (rate > 0){
            if (value > 0){
                let res = value * rate;
                if (res < 0.01){
                    return "<0.01";
                }
                else{
                    return Number(Number(res).toFixed(2));
                }
            }
            else{
                return 0;
            }
        }
        else{
            return '--'
        }
    }

    const clearSendInfo = () => {
        setSendTokenState(0);
        setSendErrorMsg('');
        setSendAddress('');
        setSendCoinAccount(0);
    }

    useEffect(() => {
        let tempWeb3TokenBalanceUpdateCount = web3TokenBalanceUpdateCount + 1;
        if (web3TokenBalanceUpdateCount >= 30 && !transactionLockRef.current && userInfo && wallets){
            tempWeb3TokenBalanceUpdateCount = 0;
            updateAllTokenBalance();
        }
        setWeb3TokenBalanceUpdateCount(tempWeb3TokenBalanceUpdateCount);

        let tempUserInfoUpdateCount = userInfoUpdateCount + 1;
        if (userInfoUpdateCount >= 10 && token){
            tempUserInfoUpdateCount = 0;
            getInfoFn();
        }
        setUserInfoUpdateCount(tempUserInfoUpdateCount);

        setTimeout(() => {
            setUpdateCount(updateCount + 1);
        }, 1000);
    }, [updateCount])

    useEffect(() => {
        if (userInfo){
            updateExchangeUsd();
        }
    }, [userInfo])

    return (
        <div className="wrap infoWrap" style={{display: `${showInfo?'flex':'none'}`}}>
            <div className="login pointer" onClick={() => {
                walletReady ? setDrawerOpen(true) : loginPrive()
            }}>
                {/* <CustomIcon imgName="UI_Picture_Icon_Login_01" width={27} height={27}></CustomIcon> */}
                <img src='/img/UI_Picture_Icon_login.png'></img>
                <div className='fs18 tlc ml5'>{walletReady ? 'Profile' : 'Login'}</div>
            </div>
            <Drawer
                width={300}
                title=""
                placement={`right`}
                closable={false}
                onClose={() => {
                    setDrawerOpen(false)
                }}
                open={drawerOpen}
                mask={true}
                rootClassName={'momentDrawerWarp'}
                className={'momentDrawer'}
            // width={`70%`}
            >
                <div className="drawerWrap">
                    {
                        (!showSendPanel && !showDepositPanel) &&
                        <>
                            <div className='flex_center_start_col w100p'>
                                <div className='flex_center_end w100p'>
                                    <CustomIcon imgName="UI_Picture_Icon_Close_01" onClick={() => {
                                        setDrawerOpen(false)
                                    }} width={22} height={22}></CustomIcon>
                                </div>
                                <div className='flex_start_start flex_col block pointer infoHead w100p' >
                                    {/*<a href={`${window.location.origin}/#/officialverification`} target="_self">quick link</a>*/}
                                    <div className='flex_center_between' onClick={() => {
                                        setShowEditNamePanel(true);
                                    }}>
                                        <div className='fs20 fontCommon'>{userName}</div>
                                        <CustomIcon imgName="UI_Picture_Icon_Edit_01" className="op4" width={12} height={12}></CustomIcon>
                                    </div>
                                    <div className='w100p flex_center_start' style={{marginTop: '8px'}}>
                                        <div className='flex_center_start mr6' onClick={() => {
                                            copyFn(walletAddr);
                                        }}>
                                            <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5 op4" width={16} height={16}></CustomIcon>
                                            <div className='fs12 color-999 fontCommon'>{sliceStr(walletAddr, 6)}</div>
                                        </div>
                                        <CustomIcon imgName="UI_Picture_Icon_ExportWallet_01" className="op4" onClick={() => {
                                            exportWallet();
                                        }} width={16} height={16}></CustomIcon>
                                    </div>
                                </div>
                                <div className='menuChainRoot flex_center_start_col w100p'>
                                    {
                                        menuOpenChainList ?
                                        <>
                                            <div className='chooseChainList flex_center_start_col'>
                                                <div className='chooseChainItem flex_center_between' onClick={() => {
                                                    setMenuOpenChainList(false);
                                                }}>
                                                    <div className='flex_center_start fontCommon'>
                                                            <CustomIcon imgName={`${currentChainTokenInfo?.chainInfo?.icon}`} className="mr10" width={20} height={20}></CustomIcon>
                                                        <div className="fs12 fontCommon">
                                                            {currentChainTokenInfo?.chainInfo?.name}
                                                        </div>
                                                    </div>
                                                    <CustomIcon imgName="UI_Picture_Icon_Arrows_Up" className="" width={10} height={10}></CustomIcon>
                                                </div>
                                                <div className='chooseChainListScroll flex_center_start_col'>
                                                    {
                                                        supportedChainTokenList()?.length > 0 &&
                                                        supportedChainTokenList().map((item, index) => {
                                                            const {
                                                                ID, 
                                                                name,
                                                                chainId, 
                                                                displayCoinName,
                                                                icon,
                                                                chainInfo,
                                                            } = item || {};
                                                            if (ID === selectedChainTokenId){
                                                                return <></>;
                                                            }
                                                            else{
                                                                return (
                                                                    <div key={index} className='chooseChainItem flex_center_start' onClick={() => {
                                                                        setSelectedChainTokenId(ID);
                                                                        setMenuOpenChainList(false);
                                                                    }}>
                                                                        <div className='flex_center_start'>
                                                                                <CustomIcon imgName={`${chainInfo?.icon}`} className="mr10" width={20} height={20}></CustomIcon>
                                                                            <div className="fs12 color-bbb fontCommon">
                                                                                {chainInfo?.name}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </>:
                                        <>
                                            <div className='chooseChainBtn flex_center_between' onClick={() => {
                                                setMenuOpenChainList(true);
                                            }}>
                                                <div className='flex_center_start'>
                                                    <CustomIcon imgName={`${currentChainTokenInfo?.chainInfo?.icon}`} className="mr10" width={20} height={20}></CustomIcon>
                                                    <div className="fs12 fontCommon">
                                                        {currentChainTokenInfo?.chainInfo?.name}
                                                    </div>
                                                </div>
                                                <CustomIcon imgName="UI_Picture_Icon_Arrows_Down" className="" width={10} height={10}></CustomIcon>
                                            </div>
                                            <div className={`w100p flex_center_between`} style={{marginTop: '13px', padding: '0px 0px 0px 7px'}}>
                                                <div className={`w100p flex_center_start`}>
                                                    <CustomIcon imgName={`${currentChainTokenInfo?.icon}`} className="mr10" width={30} height={30}></CustomIcon>
                                                    <div className='flex_center_center flex_col'>
                                                        <div className='fs14 fb w100p fontCommon'>
                                                            {`${getCurrentCoinValue()} ${currentChainTokenInfo?.displayCoinName}`}
                                                        </div>
                                                        <div className='fs12 color-999 w100p fontCommon'>
                                                            {`$ ${getCurrentUsdValue()}`}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex_center_end'>
                                                    <div className='flex_center_start flex_col' style={{marginRight: '20px'}} onClick={() => {
                                                        setShowSendPanel(true);
                                                    }}>
                                                        <CustomIcon imgName={`UI_Picture_Icon_Send`} className="" width={36} height={36}></CustomIcon>
                                                        <div className='fs12 color-999 fontCommon' style={{height: '20px'}}>
                                                            {`Send`}
                                                        </div>
                                                    </div>
                                                    <div className='flex_center_start flex_col' onClick={() => {
                                                        setShowDepositPanel(true);
                                                    }}>
                                                        <CustomIcon imgName={`UI_Picture_Icon_Deposit`} className="" width={36} height={36}></CustomIcon>
                                                        <div className='fs12 color-999 fontCommon' style={{height: '20px'}}>
                                                            {`Receive`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className='mid w100p' style={{maxHeight: `${window.innerHeight - 417}px`}}>
                                    {
                                        list?.length > 0 ?
                                            openAccountNft ?
                                                <div className={`flex_center_start_col openFoldLine`} style={{marginTop: '12px'}}>
                                                    <div className={`flex_center_between w100p`} onClick={() => {
                                                        setOpenAccountNft(false);
                                                    }}>
                                                        <div className='fs16 fontCommon'>
                                                            {`Pre-Order NFT`}
                                                        </div>
                                                        <CustomIcon imgName="UI_Picture_Icon_Arrows_Up" className="" width={10} height={10}></CustomIcon>
                                                    </div>
                                                    <img src={`${nftWebpUrl_low}`} className='' width={160} height={160}>
                                                    </img>
                                                    <div className='flex_center_center'>
                                                        <div className='fs12 fb fontCommon'>
                                                            {`NFT ID#${list[0]?.minted ? list[0]?.tokenId : '??'}`}
                                                        </div>
                                                        {!list[0]?.minted && 
                                                            <span className='retryBtn2 pointer fontCommon' onClick={retryFn}>Retry</span>
                                                        }
                                                    </div>
                                                </div> :
                                                <div className={`flex_center_start block`} onClick={() => {
                                                    setOpenAccountNft(true);
                                                }}>
                                                    <div className='yellowTag'></div>
                                                    <div className='fs16 pointer fontCommon'>{`Pre-Order NFT`}</div>
                                                </div> :
                                            <div className={`flex_center_start block`} onClick={() => {
                                                setShowModal(true);
                                            }}>
                                                <div className='yellowTag'></div>
                                                <div className='fs16 pointer fontCommon'>{`Activate your account`}</div>
                                            </div>
                                    }
                                    <div className='flex_center_start block' onClick={() => {
                                            setShowReferralPanel(true)
                                            getInvitecodeList()
                                        }}>
                                        <div className='fs16 mr5 pointer fontCommon' >{`Invite your friends`}</div>
                                    </div>
                                    {<div className={`flex_center_start block ${distributor?.is?'border-top':''}`} onClick={() => {
                                        if (distributor?.is){
                                            setShowDistribute(true);
                                        }
                                        else{
                                            setShowBecomeLeader(true);
                                        }
                                    }}>
                                        <div className='fs16 pointer fontCommon'>{`${distributor?.is ? 'Reseller\'s portal':'Apply to become a reseller'}`}</div>
                                    </div>}
                                </div>
                            </div>
                            <div className='flex_center_end_col w100p mt20'>
                                {
                                    /*!isBind && 
                                        <div className={`flex_center_center bindFriendCodeBtn`} onClick={() => { setShowBindPanel(true) }}>
                                            <div className='fs12 pointer fb fontCommon' >{`Referral code`}</div>
                                        </div>*/
                                }
                                <div className='flex_center_start block pointer border-top w100p mt20' onClick={() => {
                                    logout()
                                    localStorage.clear()
                                    // window.location.reload()
                                    setDrawerOpen(false)
                                }}>
                                    <CustomIcon imgName="UI_Picture_Icon_LogOut_01" className="mr10" width={20} height={20}></CustomIcon>
                                    <div className='fs16 fontCommon'>Log out</div>
                                </div>
                            </div>
                        </>
                    }
                    {
                        showSendPanel &&
                        <div className='drawPanel flex_center_start_col'>
                            <div className='drawPanelContent flex_center_start_col'>
                                <div className='w100p flex_center_between'>
                                    <div className='flex_center_start'>
                                        <CustomIcon imgName="UI_Picture_Icon_Back" className="" width={22} height={22} onClick={() =>{
                                            clearSendInfo();
                                            setShowSendPanel(false);
                                        }}></CustomIcon>
                                        <div className='fs16 ml20 fontCommon'>
                                            {`Send to`}
                                        </div>
                                    </div>
                                    <CustomIcon imgName="UI_Picture_Icon_Close_01" className="" width={22} height={22} onClick={() => {
                                        setDrawerOpen(false);
                                    }}></CustomIcon>
                                </div>
                                <div style={{height: '26px'}}>
                                </div>
                                <Input
                                    value={sendAddress}
                                    className={`sendInput fontCommon ${accNameError ? 'error' : ''}`}
                                    placeholder='Enter public address(0x)'
                                    onChange={handleSendAddressChange}
                                    suffix={
                                        sendAddress?.length > 0 ?
                                        <CustomIcon imgName="UI_Picture_Icon_Close_01" className="" width={12} height={12} onClick={() => {
                                            setSendAddress('');
                                        }}></CustomIcon> :
                                        <></>
                                    }
                                ></Input>
                                <Input
                                    value={sendCoinAccount}
                                    className={`sendInput fontCommon ${accNameError ? 'error' : ''}`}
                                    placeholder='0'
                                    onChange={handleSendCoinAccountChange}
                                    type={'number'}
                                    suffix={
                                        <div className='fs12 fontCommon'>
                                            {currentChainTokenInfo?.displayCoinName}
                                        </div>
                                    }
                                ></Input>
                                {
                                    sendErrorMsg && 
                                    <div className='w100p tlc fs12 color-yellow fontCommon'>
                                        {sendErrorMsg}
                                    </div>
                                }
                                <div className='w100p flex_center_center mt10'>
                                    <CustomIcon imgName={`${currentChainTokenInfo?.icon}`} className="mr10" width={20} height={20}></CustomIcon>
                                    <div className='fs12 color-bbb fontCommon' style={{marginRight: '14px'}}>
                                        Your Balance
                                    </div>
                                    <div className='fs12 fb fontCommon'>
                                        {`${getCurrentCoinValue()} ${currentChainTokenInfo?.displayCoinName}`}
                                    </div>
                                </div>
                                {
                                    sendTokenState === 3 ?
                                        <div className='sendPanelBtn flex_center_center fontCommon' onClick={() => {
                                            clearSendInfo();
                                        }}>
                                            {'Failed'}
                                        </div> :
                                    sendTokenState === 2 ?
                                        <div className='sendPanelBtn flex_center_center fontCommon' onClick={() => {
                                            clearSendInfo();
                                            setShowSendPanel(false);
                                        }}>
                                            {'Success'}
                                        </div> :
                                    sendTokenState === 1 ?
                                        <div className='sendPanelBtn flex_center_center fontCommon'>
                                            <CustomIcon rotating={true} imgName={`UI_Picture_Loading_01`} className="mr5" width={20} height={20}></CustomIcon>
                                            {'Loading'}
                                        </div> :
                                    sendAvailable ?
                                        <div className='sendPanelBtn flex_center_center fontCommon' onClick={() => {
                                            sendFn();
                                        }}>
                                            {'Send'}
                                        </div> :
                                        <div className='sendPanelBtn_disable flex_center_center fontCommon'>
                                            {'Send'}
                                        </div>
                                }
                            </div>
                        </div>
                    }
                    {
                        showDepositPanel &&
                        <div className='drawPanel flex_center_start_col'>
                            <div className='drawPanelContent flex_center_start_col'>
                                <div className='w100p flex_center_between'>
                                    <div className='flex_center_start'>
                                        <CustomIcon imgName="UI_Picture_Icon_Back" className="" width={22} height={22} onClick={() =>{
                                            setShowDepositPanel(false);
                                        }}></CustomIcon>
                                        <div className='fs16 ml20 fontCommon'>
                                            {`Add Funds`}
                                        </div>
                                    </div>
                                    <CustomIcon imgName="UI_Picture_Icon_Close_01" className="" width={22} height={22} onClick={() => {
                                        setDrawerOpen(false);
                                    }}></CustomIcon>
                                </div>
                                <div className='w100p flex_center_between' style={{marginTop: '30px', padding: '0px 9px 0px 7px'}}>
                                    <div className='flex_center_start'>
                                        <CustomIcon imgName={`${currentChainTokenInfo?.chainInfo?.icon}`} className="mr10" width={20} height={20}></CustomIcon>
                                        <div className='fs12 color-bbb fontCommon' style={{marginRight: '14px'}}>
                                            {currentChainTokenInfo?.name}
                                        </div>
                                    </div>
                                    <div className='fs12 fb fontCommon'>
                                        {`${getCurrentCoinValue()} ${currentChainTokenInfo?.displayCoinName}`}
                                    </div>
                                </div>
                                <div className={`depositAddressRoot flex_center_center`}>
                                    <div className={`depositAddressText fontCommon`}>
                                        {walletAddr}
                                    </div>
                                </div>
                                <div className="flex_center_center mt20" onClick={() => {
                                    copyFn(walletAddr);
                                }}>
                                    <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="mr7" width={16} height={16}></CustomIcon>
                                    <div className='fs12 fontCommon'>
                                        Copy Address
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </Drawer>
            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showModal}
                destroyOnClose={true}
                onOk={() => {
                    setShowModal(false);
                    setErrorTips('');
                }}
                onCancel={() => {
                    setShowModal(false);
                    setErrorTips('');
                }}
            >
                <div className='checkWrap'>

                    {
                        list?.length > 0 ?
                        <>
                            <div className='fs20 title fb fontCommon'>Congratulations</div>
                            <div className='mt20 mb30 fontCommon'>You have activited your mobile phone</div>
                            <div className='fs20 fb flex_center_center fontCommon'>
                                {`NFT ID#${list[0]?.minted ? list[0]?.tokenId : '??'}`}
                                {!list[0]?.minted && 
                                    <span className='retryBtn fontCommon' onClick={retryFn}>retry</span>
                                }
                            </div>
                            <div className='checkBtn'>
                                <Button className='btn_public fontCommon' onClick={()=>{setShowModal(false)}}>Back</Button>
                            </div>
                        </>:

                        checkSuccess ?
                            <>
                                <div className='title'>
                                    <CustomIcon imgName="UI_Picture_Icon_Succeed_01" className="mr10" width={78} height={78}></CustomIcon>
                                </div>
                                <div className='fs16 fontCommon'>Verification Successful</div>
                                <div className='succBtn fontCommon' onClick={() => {
                                    setCheckSuccess(false)
                                }}>
                                    Continue
                                </div>
                            </> :
                            <>
                                <div className='fs20 title fb fontCommon'>{`Enter Your Activation Code`}</div>
                                <Input
                                    value={cdkey}
                                    className='input fontCommon'
                                    placeholder='Enter'
                                    onChange={(e) => {
                                        setErrorTips('')
                                        setCdkey(e.target.value)
                                    }}
                                ></Input>
                                <div className='checkBtn'>
                                    <div className='errorTips fs12 color-yellow tlc mb10 fontCommon'>{errorTips}</div>
                                    <Button className='btn_public fontCommon' onClick={checkFn} disabled={!cdkey}>{checking ? 'Checking' : 'Verify'}</Button>
                                </div>
                            </>

                    }

                    {/* {
                        list?.length > 0 &&
                        <>
                            <div className='list'>
                                {list?.map(item => {
                                    const { cdkey, minted, tokenId } = item
                                    return (
                                        <div key={cdkey} className='item mb10'>
                                            <div className='fs12 color-bbb'>{sliceStr(cdkey, 4)}</div>
                                            <div className='flex_center_start'>
                                                <CustomIcon imgName="UI_Picture_Icon_NFTphone_01" className="mr5" width={20} height={20}></CustomIcon>
                                                <div className='fs12 color-bbb wi'># {minted ? tokenId : '??'}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {<div onClick={retryFn} className='fs16 tlc pointer'>Refresh</div>}
                        </>
                    } */}

                </div>
            </Modal>
            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showEditNamePanel}
                destroyOnClose={true}
                onOk={() => {
                    setShowEditNamePanel(false);
                    setErrorTips('');
                }}
                onCancel={() => {
                    setShowEditNamePanel(false);
                    setErrorTips('');
                }}
            >
                <div className='checkWrap'>

                    <div className='fs20 title fb fontCommon'>Account Settings</div>
                    <div className='w100p flex_center_between'>
                        <div className={`fs12 fontCommon ${accNameError ? 'color-yellow' : ''}`}>Username</div>
                        <div className={`color-999 fontCommon`}>{accName?.length}/16</div>
                    </div>
                    
                    <Input
                        value={accName}
                        maxLength={16}
                        className={`input mt10 mb10 fontCommon ${accNameError ? 'error' : ''}`}
                        placeholder='Enter your name'
                        onChange={handleInputChange}
                    ></Input>
                    <div className={`fs12 w100p fontCommon all ${accNameError ? 'color-yellow' : 'color-999'}`}>{accNameError ? accName?.length < 4 ? 'Your username must be longer than 4 characters.' :
                        "That username has been taken. Please choose another." : envConfig?.host + `/` + invitePre + accName}</div>
                    {
                        suggestionList?.length > 0 &&
                        <div className='flex_start_start flex_col w100p mt15'>
                            <div className='fontCommon'>Suggestions</div>
                            {
                                suggestionList?.map((i, index) => {
                                    // const { name } = i
                                    return (
                                        <div key={index} onClick={() => { setAccName(i) }} className='fs12 color-999 mt10 pointer fontCommon'>{i}</div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div className='checkBtn'>
                        <div className='errorTips fs12 color-yellow mb10 fontCommon'>{errorTips}</div>
                        <Button className='btn_public fontCommon' onClick={editUserNameFn} loading={checkingAccname} disabled={checkingAccname || accName === userName || !accName || accName?.length < 4}>{checkingAccname ? 'Checking' : 'Save'}</Button>
                    </div>
                </div>
            </Modal>


            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showReferralPanel}
                destroyOnClose={true}
                onOk={() => {
                    setShowReferralPanel(false);
                    setErrorTips('');
                    setReferralCode('');
                }}
                onCancel={() => {
                    setShowReferralPanel(false);
                    setErrorTips('');
                    setReferralCode('');
                }}
            >
                <div className='checkWrap'>
                    <div style={{height: '56px'}}>
                    </div>
                    {
                        !isBind &&
                        <>
                            {/*<div className={`flex_center_center bindFriendCodeBtn`} onClick={() => { 
                                setShowBindPanel(true) 
                            }}>
                                <div className='fs12 pointer fb fontCommon' >{`Referral code`}</div>
                            </div>*/}
                            <div className='checkWrap'>
                                <Input
                                    value={referralCode}
                                    className='referralCodeInput fontCommon'
                                    placeholder='@Username'
                                    onChange={(e) => {
                                        setReferralCode(e.target.value)
                                    }}
                                ></Input>
                                <div className='bindReferralCodeBtnRoot'>
                                    {/*<div className='errorTips fs12 color-yellow mb10 fontCommon'>{errorTips}</div>*/}
                                    <div className='bindReferralCodeBtn flex_center_center tls color-999' style={{marginTop: '5px'}} onClick={bindFn}>
                                        {checkingReferralCode ? 'Checking' : 'Submit'}
                                    </div>
                                </div>
                                <div className={`bindReferralCodeBtnTips fontCommon`}>
                                    {`Enter referral code (who invited you)`}
                                </div>
                            </div>
                            <div className='bindFriendLine'></div>
                        </>
                    }
                    <div className='fs18 fb fontCommon' style={{marginBottom: '20px'}}>{`My Referral Link`}</div>
                    <div className='flex_center_start' onClick={() => {
                        copyFn(envConfig?.host + `/` + invitePre + userName)
                    }} >
                        {/*<CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5" width={20} height={20}></CustomIcon>*/}
                        <div className='fs18 fontCommon' style={{maxWidth: '340px'}}>{envConfig?.host + `/` + invitePre + userName}</div>
                    </div>
                    <div className='shareReferralCodeBtn flex_center_center fontCommon' onClick={() => {
                        copyFn(envConfig?.host + `/` + invitePre + userName);
                    }}>
                        {'Share'}
                    </div>
                    {referralList?.length > 0 &&
                        <div className='w100p' style={{padding: '0px 36px'}}>
                            <div className='fs18 tlc referralGourpTitle fb fontCommon'>My Referral Group</div>


                            <div className='referralList'>

                                {referralList?.map(item => {
                                    const { userName, wallet, inviteTime } = item
                                    return (
                                        <div key={wallet} className='referralItem mb10'>
                                            <div className='fs12 color-999 fontCommon' style={{width: '100px'}}>{sliceStr(userName, 6, true)}</div>
                                            <div className='flex_center_start' style={{width: '140px'}} onClick={() => {
                                                copyFn(wallet)
                                            }}>
                                                <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5 op4" width={16} height={16}></CustomIcon>
                                                <div className='fs12 color-999 wi fontCommon'>{sliceStr(wallet, 6)}</div>
                                            </div>
                                            <div className='fs12 color-999 fontCommon'>{renderTime(inviteTime * 1000)}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {
                        isBind &&
                        <div className='myReferrer'>
                            <div className='fs12 color-999 fontCommon'>{`My Referrer`}</div>
                            <div className='fs12 color-999 fontCommon'>@{inviteName}</div>
                        </div>
                    }
                </div>
            </Modal>
            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showBindPanel}
                destroyOnClose={true}
                onOk={() => {
                    setShowBindPanel(false);
                    setErrorTips('');
                }}
                onCancel={() => {
                    setShowBindPanel(false);
                    setErrorTips('');
                }}
            >
                <div className='checkWrap'>
                    <div className='fs20 title fb fontCommon'>{`Referral Code(Optional)`}</div>
                    <Input
                        value={referralCode}
                        className='input fontCommon'
                        placeholder='Enter'
                        onChange={(e) => {
                            setReferralCode(e.target.value)
                        }}
                    ></Input>
                    <div className='checkBtn'>
                        <div className='errorTips fs12 color-yellow mb10 fontCommon'>{errorTips}</div>
                        <Button className='btn_public fontCommon' onClick={bindFn} disabled={!referralCode}>{checkingReferralCode ? 'Checking' : 'Confirm'}</Button>
                    </div>
                </div>
            </Modal>
            <Modal
                width='367px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showBecomeLeader}
                destroyOnClose={true}
                onOk={() => setShowBecomeLeader(false)}
                onCancel={() => setShowBecomeLeader(false)}
            >
                <ModalBecomeLeader
                    closeFn={() => {
                        setShowBecomeLeader(false);
                    }}
                    getInfoFn={getInfoFn}></ModalBecomeLeader>
            </Modal>
            <Modal
                width='530px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showDistribute}
                destroyOnClose={true}
                onOk={() => setShowDistribute(false)}
                onCancel={() => setShowDistribute(false)}
            >
                <ModalDistribute
                    closeFn={() => {
                        setShowDistribute(false);
                    }}
                    distributor={distributor}></ModalDistribute>
            </Modal>
        </div>

    );
};

export default Info;