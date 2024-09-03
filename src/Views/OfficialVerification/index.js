import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    distributorRedeem,
    getDistributorTxLog,
    distributorVerification,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css";

const platformList = [
    {
        id: 1,
        type: 'website',
        displayName: 'Website',
        icon: 'UI_Picture_Icon_Website'
    },
    {
        id: 2,
        type: 'telegram',
        displayName: 'Telegram',
        icon: 'UI_Picture_Icon_Telegram'
    },
    {
        id: 3,
        type: 'wechat',
        displayName: 'WeChat',
        icon: 'UI_Picture_Icon_WeChat'
    },
]

const OfficialVerification = ({
    useVerticalMode,
}) => {
    const maxWidth = 920;
    const [suitableWidth, setSuitableWidth] = useState(maxWidth);
    const [selectedPlatformId, setSelectedPlatformId] = useState(1);
    const [showPlatformOptions, setShowPlatformOptions] = useState(false);
    const [officialVerificationCode, setOfficialVerificationCode] = useState('');
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [showVerifyResult, setShowVerifyResult] = useState(false);
    const [verityResult, setVerityResult] = useState(null);

    const currentPlatform = useMemo(() => {
        let res = null;
        for (let i = 0; i < platformList.length; i++){
            if (platformList[i].id === selectedPlatformId){
                res = platformList[i];
                break;
            }
        }
        return res;
    }, [selectedPlatformId])

    const checkCode = () => {
        if (currentPlatform && officialVerificationCode?.length > 0){
            distributorVerification(currentPlatform?.type, officialVerificationCode).then(res => {
                setShowVerifyResult(true);
                setVerityResult(res);
            }).catch(e => {
                console.error("[distributorVerification error]", e);
            })
        }
    }

    const getDisplayNameByType = (typeStr) => {
        let res = '';
        if (platformList?.length > 0 && typeStr){
            for (let i = 0; i < platformList?.length; i++){
                if (platformList[i].type == typeStr){
                    res = platformList[i].displayName;
                    break;
                }
            }
        }
        return res;
    }

    const updateWidth = () => {
        if (window.innerWidth > maxWidth){
            setSuitableWidth(maxWidth);
        }
        else{
            setSuitableWidth(window.innerWidth);
        }
    }

    const handleChange = (e) => {
        setOfficialVerificationCode(e.target.value);
    };

    window.addEventListener('resize', function (event) {
        updateWidth();
    });

    useEffect(() => {
        updateWidth();
        console.log("getget", localStorage.getItem("upnetwork_disclaimer"))
        if (!localStorage.getItem("upnetwork_disclaimer")){
            setShowDisclaimer(true);
            localStorage.setItem("upnetwork_disclaimer", true);
        }
    }, [])

    return (
        <div className={`OfficialVerification flex_center_start_col`} style={{backgroundImage: `url(/img/UI_Picture_Bg_OfficialVerify.png)`}}>
            {
                useVerticalMode ?
                <div className="OfficialVerificationContent flex_center_start_col">
                    <div className={`flex_center_start ${useVerticalMode?'OfficialVerificationLogo_v':'OfficialVerificationLogo'}`}>
                        <div class="module-logo flex navbar-brand-plain" id="size-logo-OfficialVerification">
                            <a class="navbar-brand flex p-0 relative" href="#" rel="home">
                                <span class="navbar-brand-inner post-rel"><img src="assets/images/logo/logo-01-light.svg" width="146px" alt="Dark AI" /></span>
                            </a>
                        </div>
                    </div>
                    <div className="OfficialVerificationContentTitle_v">
                        {`Official Agent Verification Channel`}
                    </div>
                    <div className="fs16 OfficialVerificationContentText_v">
                        {`Please use the input box to verify the domain or check whether your WeChat, Telegram, or other contacts are official, certified agent channels. This precaution helps protect against fraudsters who may exploit the UpNetwork name for scams.`}
                    </div>
                    <div className="OfficialVerificationEnterCodeRoot_v flex_center_start">
                        <div className="OfficialVerificationEnterCodePlatform_v flex_center_start" onClick={() => {
                            setShowPlatformOptions(!showPlatformOptions);
                        }}>
                            <CustomIcon imgName={`${currentPlatform?.icon}`} className="" width={16} height={16}></CustomIcon>
                            <div className="fs14" style={{marginLeft: '8px'}}>
                                {currentPlatform?.displayName}
                            </div>
                            <CustomIcon imgName="UI_Picture_Icon_Arrows_Down" className="OfficialVerificationEnterCodePlatformArrow" width={10} height={10}></CustomIcon>
                        </div>
                        <div className="OfficialVerificationVLine">
                        </div>
                        <Input
                            value={officialVerificationCode}
                            className={`officialVerificationInput_v`}
                            placeholder='Please enter the complete information'
                            onChange={handleChange}
                            suffix={
                                <CustomIcon imgName={`UI_Picture_Icon_Search`} className="" width={16} height={16} onClick={() => {
                                    checkCode();
                                }}></CustomIcon>
                            }
                        ></Input>
                        {
                            showPlatformOptions && 
                            <div className="OfficialVerificationEnterCodePlatformList_v flex_center_start_col">
                                {
                                    platformList.map((item, index) => {
                                        return (
                                            <div key={index} className="OfficialVerificationEnterCodePlatformItem flex_center_between" style={{padding: '0px 9px 0px 10px'}} onClick={() => {
                                                setSelectedPlatformId(item.id);
                                                setShowPlatformOptions(false);
                                            }}>
                                                <div className="flex_center_start">
                                                    <CustomIcon imgName={`${item?.icon}`} className="" width={16} height={16}></CustomIcon>
                                                    <div className="fs12 OfficialVerificationEnterCodePlatformItemName" style={{marginLeft: '8px'}}>
                                                        {item?.displayName}
                                                    </div>
                                                </div>
                                                {
                                                    currentPlatform?.id === item.id &&
                                                    <CustomIcon imgName={`UI_Picture_Icon_Succeed_01`} className="" width={16} height={16}></CustomIcon>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </div>
                </div> :
                <>
                    <div className="OfficialVerificationContent flex_center_center_col">
                        <div className="OfficialVerificationContentTitle" style={{minWidth: `${suitableWidth}px`, maxWidth: `${suitableWidth}px`}}>
                            {`Official Agent Verification Channel`}
                        </div>
                        <div className="OfficialVerificationContentTextRoot flex_center_start" style={{minWidth: `${suitableWidth}px`, maxWidth: `${suitableWidth}px`}}>
                            <div className="fs16 OfficialVerificationContentText">
                                {`Please use the input box to verify the domain or check whether your WeChat, Telegram, or other contacts are official, certified agent channels. This precaution helps protect against fraudsters who may exploit the UpNetwork name for scams.`}
                            </div>
                        </div>
                        <div className="OfficialVerificationEnterCodeRoot flex_center_start" style={{minWidth: `${suitableWidth}px`, maxWidth: `${suitableWidth}px`}}>
                            <div className="OfficialVerificationEnterCodePlatform flex_center_start" onClick={() => {
                                setShowPlatformOptions(!showPlatformOptions);
                            }}>
                                <CustomIcon imgName={`${currentPlatform?.icon}`} className="" width={24} height={24}></CustomIcon>
                                <div className="fs20" style={{marginLeft: '17px'}}>
                                    {currentPlatform?.displayName}
                                </div>
                                <CustomIcon imgName="UI_Picture_Icon_Arrows_Down" className="OfficialVerificationEnterCodePlatformArrow" width={10} height={10}></CustomIcon>
                            </div>
                            <div className="OfficialVerificationVLine">
                            </div>
                            <Input
                                value={officialVerificationCode}
                                className={`officialVerificationInput`}
                                placeholder='Please enter the complete information'
                                onChange={handleChange}
                                suffix={
                                    <CustomIcon imgName={`UI_Picture_Icon_Search`} className="" width={24} height={24} onClick={() => {
                                        checkCode();
                                    }}></CustomIcon>
                                }
                            ></Input>
                            {
                                showPlatformOptions && 
                                <div className="OfficialVerificationEnterCodePlatformList flex_center_start_col">
                                    {
                                        platformList.map((item, index) => {
                                            return (
                                                <div key={index} className="OfficialVerificationEnterCodePlatformItem flex_center_between" style={{padding: '0px 16px 0px 24px'}} onClick={() => {
                                                    setSelectedPlatformId(item.id);
                                                    setShowPlatformOptions(false);
                                                }}>
                                                    <div className="flex_center_start">
                                                        <CustomIcon imgName={`${item?.icon}`} className="" width={16} height={16}></CustomIcon>
                                                        <div className="fs16 OfficialVerificationEnterCodePlatformItemName" style={{marginLeft: '21px'}}>
                                                            {item?.displayName}
                                                        </div>
                                                    </div>
                                                    {
                                                        currentPlatform?.id === item.id &&
                                                        <CustomIcon imgName={`UI_Picture_Icon_Succeed_01`} className="" width={16} height={16}></CustomIcon>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`flex_center_start OfficialVerificationLogo`}>
                        <div class="module-logo flex navbar-brand-plain" id="size-logo-OfficialVerification">
                            <a class="navbar-brand flex p-0 relative" href="#" rel="home">
                                <span class="navbar-brand-inner post-rel"><img src="assets/images/logo/logo-01-light.svg" width="146px" alt="Dark AI" /></span>
                            </a>
                        </div>
                    </div>
                </>
            }
            <Modal
                width='460px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showDisclaimer}
                destroyOnClose={true}
                onOk={() => {
                    setShowDisclaimer(false);
                }}
                onCancel={() => {
                    setShowDisclaimer(false);
                }}
            >
                <div className='disclaimerWrap flex_center_start_col'>
                    <div className="fs20 fontCommon" style={{marginTop: '94px'}}>
                        {`Disclaimer`}
                    </div>
                    <div className="fs16 fontCommon color-999" style={{marginTop: '40px', padding: '0px 37px', lineHeight: '20px'}}>
                    Even if certification has been successfully completed, this does not guarantee that the channel can be fully trusted for financial transactions. There may still be risks such as input errors, account compromise, or phishing websites. For any official financial dealings, please ensure that you communicate through the certified official website email, or confirm with customer service before proceeding.
                    </div>
                    <div className='comfirmbtn flex_center_center fontCommon fb fs20' style={{width: '122px', height: '35px', marginTop: '96px', marginBottom: '34px'}} onClick={() => {
                        setShowDisclaimer(false);
                    }}>
                        {'OK'}
                    </div>
                </div>
            </Modal>
            <Modal
                width='367px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showVerifyResult}
                destroyOnClose={true}
                onOk={() => {
                    setShowVerifyResult(false);
                    setVerityResult(null);
                }}
                onCancel={() => {
                    setShowVerifyResult(false);
                    setVerityResult(null);
                }}
            >
                <div className='disclaimerWrap flex_center_start_col'>
                    <CustomIcon imgName={`${verityResult?.approved?"UI_Picture_Icon_Succeed_01":"UI_Picture_Icon_warn"}`} className="mt100" width={78} height={78}></CustomIcon>
                    <div className="fs20 fontCommon fb" style={{marginTop: '51px'}}>
                        {`${verityResult?.approved?`Verified ${getDisplayNameByType(verityResult?.type)} Account`:`Unverified ${getDisplayNameByType(verityResult?.type)} Account`}`}
                    </div>
                    <div className="fs14 fontCommon color-999" style={{marginTop: '30px', padding: '0px 32px', lineHeight: '20px', minHeight: '120px'}}>
                        {`${verityResult?.approved ? 
                            `The “${verityResult?.code}” you entered is a verified UpNetwork ${getDisplayNameByType(verityResult?.type)} account.`:
                            `The “${verityResult?.code}” you entered is not a verified UpNetwork ${getDisplayNameByType(verityResult?.type)} account. Please proceed with caution.`}`}
                    </div>
                    <div className='comfirmbtn flex_center_center fontCommon fb fs20' style={{width: '122px', height: '35px', marginTop: '12px', marginBottom: '34px'}} onClick={() => {
                        setShowVerifyResult(false);
                        setVerityResult(null);
                    }}>
                        {'OK'}
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default memo(OfficialVerification);
