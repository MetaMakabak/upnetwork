import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Button, Drawer, Input, Modal, message } from 'antd';
import "./index.css"
import { usePrivy, useWallets } from "@privy-io/react-auth";
import useLocalStorageState from '../../common/useLocalStorageState';
import CustomIcon from '../../common/CustomIcon';
import { copyFn, renderTime, sliceStr, getUrlParams } from '../../utils/common';
import {
    checkCdkey,
    getInfo,
    loginFn,
    retry,
    modifyname,
    invitecodeList,
    invitecodeBind
} from '../../utils/upNet';
import { envConfig } from '../../utils/env';
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

const hrefInviteCode = getUrlParams(`invite`);

const Info = () => {
    const { ready, user, login, getAccessToken, logout, exportWallet } = usePrivy();
    const { wallets } = useWallets();
    const [userInfo, setUserInfo] = useState(null);

    const [showModal, setShowModal] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [cdkey, setCdkey] = useState('')
    const [checking, setChecking] = useState(false)

    const [list, setList] = useState([])

    const [token, setToken] = useLocalStorageState('token', '')

    const [checkSuccess, setCheckSuccess] = useState(false)

    const [showEditNamePanel, setShowEditNamePanel] = useState(false)
    const [showBindPanel, setShowBindPanel] = useState(false)

    const [accName, setAccName] = useState('')
    const [checkingAccname, setCheckingAccname] = useState(false)

    const [showSuggestion, setShowSuggestion] = useState(false)


    const [showReferralPanel, setShowReferralPanel] = useState(false)

    const [referralCode, setReferralCode] = useState('')
    const [checkingReferralCode, setCheckingReferralCode] = useState(false)

    const [suggestionList, setSuggestionList] = useState([])


    const [referralList, setReferralList] = useState([])

    const { userName, inviteCode, isBind } = useMemo(() => {
        return userInfo || {}
    }, [userInfo])


    useEffect(() => {
        userName && setAccName(userName)
    }, [userName])

    useEffect(() => {
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
            setErrorTips('Invalid activation code')
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
            console.log(res);
        }).catch(e => {
            setCheckingReferralCode(false)
            console.error(e);
        })
    }

    return (
        <div className="wrap infoWrap">
            <div className="login pointer" onClick={() => {
                walletReady ? setDrawerOpen(true) : loginPrive()
            }}>
                {/* <CustomIcon imgName="UI_Picture_Icon_Login_01" width={27} height={27}></CustomIcon> */}
                <img src='/img/UI_Picture_Icon_Login_01.png'></img>
                <div className='fs18 tlc ml5'>{walletReady ? 'Profile' : 'Login'}</div>
            </div>
            <Drawer
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
                    <div className='flex_center_end '>
                        <CustomIcon imgName="UI_Picture_Icon_Close_01" onClick={() => {
                            setDrawerOpen(false)
                        }} width={22} height={22}></CustomIcon>
                    </div>
                    <div className='flex_start_start flex_col block pointer infoHead' >
                        <div className=' flex_center_start'>
                            <div className='fs20'>{userName}</div>
                            <CustomIcon imgName="UI_Picture_Icon_Edit_01" className="ml5" onClick={() => {
                                setShowEditNamePanel(true)
                            }} width={12} height={12}></CustomIcon>
                        </div>
                        <div className='flex_center_start mt10' onClick={() => {
                            copyFn(walletAddr)
                        }} >
                            <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5" width={16} height={16}></CustomIcon>
                            <div className='fs12'>{sliceStr(walletAddr, 6)}</div>
                        </div>

                    </div>
                    <div className='mid'>
                        <div className='flex_center_start block' onClick={() => {
                                setShowReferralPanel(true)
                                getInvitecodeList()
                            }}>
                            <div className='fs16 mr5 pointer' >Referral</div>
                            {/* <div className='fs12 color-999'>coming Soon</div> */}
                        </div>
                        <div className='flex_center_start block' onClick={() => {
                                setShowModal(true)
                            }}>
                            <div className='yellowTag'></div>
                            <div className='fs16 pointer'>UpMobile Activated</div>
                        </div>
                        <div className='flex_center_start block' onClick={exportWallet}>
                            <div className='fs16 pointer'>Export Wallet</div>
                        </div>
                        {!isBind && <div className='flex_center_center block' onClick={() => { setShowBindPanel(true) }}>
                            <div className='fs12 pointer bindBtn' >Bind Friend Code</div>
                        </div>}
                    </div>
                    <div className='flex_center_start block border-bottom pointer' onClick={() => {
                        logout()
                        localStorage.clear()
                        // window.location.reload()
                        setDrawerOpen(false)
                    }}>
                        <CustomIcon imgName="UI_Picture_Icon_LogOut_01" className="mr10" width={20} height={20}></CustomIcon>
                        <div className='fs16'>Log out</div>
                    </div>
                </div>
            </Drawer>
            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showModal}
                destroyOnClose={true}
                onOk={() => setShowModal(false)}
                onCancel={() => setShowModal(false)}
            >
                <div className='checkWrap'>

                    {
                        list?.length > 0 ?
                        <>
                            <div className='fs20 title fb'>Congratulations</div>
                            <div className='mt20 mb30'>You have activited your mobile phone</div>
                            <div className='fs20 fb flex_center_center'>
                                {`NFT ID#${list[0]?.minted ? list[0]?.tokenId : '??'}`}
                                {!list[0]?.minted && 
                                    <span className='retryBtn' onClick={retryFn}>retry</span>
                                }
                            </div>
                            <div className='checkBtn'>
                                <Button className='btn_public' onClick={()=>{setShowModal(false)}}>Back</Button>
                            </div>
                        </>:

                        checkSuccess ?
                            <>
                                <div className='title'>
                                    <CustomIcon imgName="UI_Picture_Icon_Succeed_01" className="mr10" width={78} height={78}></CustomIcon>
                                </div>
                                <div className='fs16'>Verification Successful</div>
                                <div className='succBtn' onClick={() => {
                                    setCheckSuccess(false)
                                }}>
                                    Continue
                                </div>
                            </> :
                            <>
                                <div className='fs20 title fb'>Check your activation code</div>
                                <Input
                                    value={cdkey}
                                    className='input'
                                    placeholder='Enter your code'
                                    onChange={(e) => {
                                        setErrorTips('')
                                        setCdkey(e.target.value)
                                    }}
                                ></Input>
                                <div className='checkBtn'>
                                    <div className='errorTips fs12 color-yellow mb10'>{errorTips}</div>
                                    <Button className='btn_public' onClick={checkFn} disabled={!cdkey}>{checking ? 'Checking' : 'Verify'}</Button>
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
                onOk={() => setShowEditNamePanel(false)}
                onCancel={() => setShowEditNamePanel(false)}
            >
                <div className='checkWrap'>

                    <div className='fs20 title fb'>Account Settings</div>
                    <div className='w100p flex_center_between'>
                        <div className={`fs12 ${accNameError ? 'color-yellow' : ''}`}>Username</div>
                        <div className={`color-999`}>{accName?.length}/16</div>
                    </div>
                    
                    <Input
                        value={accName}
                        maxLength={16}
                        className={`input mt10 mb10 ${accNameError ? 'error' : ''}`}
                        placeholder='Enter your name'
                        onChange={handleInputChange}
                    ></Input>
                    <div className={`fs12 w100p all ${accNameError ? 'color-yellow' : 'color-999'}`}>{accNameError ? accName?.length < 4 ? 'Your username must be longer than 4 characters.' :
                        "That username has been taken. Please choose another." : envConfig?.host + `/?invite=` + accName}</div>
                    {
                        suggestionList?.length > 0 &&
                        <div className='flex_start_start flex_col w100p mt15'>
                            <div>Suggestions</div>
                            {
                                suggestionList?.map((i, index) => {
                                    // const { name } = i
                                    return (
                                        <div key={index} onClick={() => { setAccName(i) }} className='fs12 color-999 mt10 pointer'>{i}</div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div className='checkBtn'>
                        <div className='errorTips fs12 color-yellow mb10'>{errorTips}</div>
                        <Button className='btn_public' onClick={editUserNameFn} loading={checkingAccname} disabled={checkingAccname || accName === userName || !accName || accName?.length < 4}>{checkingAccname ? 'Checking' : 'Save'}</Button>
                    </div>
                </div>
            </Modal>


            <Modal
                width='380px'
                title={''}
                className="confirmModalWrap"
                centered={true}
                open={showReferralPanel}
                destroyOnClose={true}
                onOk={() => setShowReferralPanel(false)}
                onCancel={() => setShowReferralPanel(false)}
            >
                <div className='checkWrap'>
                    <div className='fs20 title fb'>My Referral Code</div>
                    <div className='flex_center_start mt10 mb40' onClick={() => {
                        copyFn(envConfig?.host + `/?invite=` + userName)
                    }} >
                        <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5" width={16} height={16}></CustomIcon>
                        <div className='fs12'>{envConfig?.host + `/?invite=` + userName}</div>
                    </div>
                    {referralList?.length > 0 &&
                        <>
                            <div className='fs14 tlc referralTitle fb'>My Referral Group</div>


                            <div className='referralList'>

                                {referralList?.map(item => {
                                    const { userName, wallet, inviteTime } = item
                                    return (
                                        <div key={wallet} className='referralItem mb10'>
                                            <div className='fs12 color-bbb'>{sliceStr(userName, 6, true)}</div>
                                            <div className='flex_center_center' onClick={() => {
                                                copyFn(wallet)
                                            }}>
                                                <CustomIcon imgName="UI_Picture_Icon_Copy_01" className="mr5" width={20} height={20}></CustomIcon>
                                                <div className='fs12 color-bbb wi'>{sliceStr(wallet, 6)}</div>
                                            </div>
                                            <div className='fs12 color-bbb'>{renderTime(inviteTime * 1000)}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </>
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
                onOk={() => setShowBindPanel(false)}
                onCancel={() => setShowBindPanel(false)}
            >
                <div className='checkWrap'>
                    <div className='fs20 title fb'>Bind Friend's Referral Code</div>
                    <Input
                        value={referralCode}
                        className='input'
                        placeholder='Enter Raferral Code'
                        onChange={(e) => {
                            setReferralCode(e.target.value)
                        }}
                    ></Input>
                    <div className='checkBtn'>
                        <div className='errorTips fs12 color-yellow mb10'>{errorTips}</div>
                        <Button className='btn_public' onClick={bindFn} disabled={!referralCode}>{checkingReferralCode ? 'Checking' : 'Confirm'}</Button>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default Info;