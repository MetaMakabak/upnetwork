import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import {
    distributorRedeem,
    getDistributorTxLog,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
} from "../../utils/common";
import ModalHistoryTransaction from "../ModalHistoryTransaction";
import ModalActivationCode from "../ModalActivationCode";
import ModalWithdrawCommission from "../ModalWithdrawCommission";
import DistributorCommissionTiers from "../../utils/json/DistributorCommissionTiers.json";
import ModalHistoryCommission from "../ModalHistoryCommission";
import { useMemo } from "react";
import "./index.css"

const ModalDistribute = ({
    closeFn = () => {},
    distributor,
    userInfo,
    useVerticalMode,
}) => {
    const [showEthTips, setShowEthTips] = useState(false);
    const [showTronTips, setShowTronTips] = useState(false);
    const [showHistoryTransaction, setShowHistoryTransaction] = useState(false);
    const [showActivationCode, setShowActivationCode] = useState(false);
    const [showWithdrawCommission, setShowWithdrawCommission] = useState(false);
    const [showHistroyCommission, setShowHistroyCommission] = useState(false);


    const {currPeriodSaleAmount,lastPeriodSaleAmount,profitVolume,withdrawVolume} = useMemo(()=>{
        return distributor || {}
    },[distributor])
    //测试数据

    const showDistributorTierList = useMemo(() => {
        let res = [];
        let recentSale = Number(lastPeriodSaleAmount || 0) +  Number(currPeriodSaleAmount || 0);
        let startPos = Math.max(DistributorCommissionTiers?.length - 3, 0);
        if (DistributorCommissionTiers?.length > 0){
            if (recentSale <= DistributorCommissionTiers[0].maxSales){
                startPos = 0;
            }
            for (let i = 0; i < DistributorCommissionTiers?.length && i < startPos + 3; i++){
                if (startPos > i){
                    let isStartPos = (i + 1 < DistributorCommissionTiers?.length && recentSale >= DistributorCommissionTiers[i + 1].minSales && recentSale <= DistributorCommissionTiers[i + 1].maxSales);
                    if (isStartPos){
                        startPos = i;
                        res.push(DistributorCommissionTiers[i]);
                    }
                }
                else{
                    res.push(DistributorCommissionTiers[i]);
                }
            }
        }
        return res;
    }, [DistributorCommissionTiers, lastPeriodSaleAmount, currPeriodSaleAmount])

    const goTransactionHistory = () => {
        getDistributorTxLog(0).then(res => {
            if (res?.txLog?.length > 0){
                setShowHistoryTransaction(true);
            }
            else{
                setShowHistoryTransaction(true);
                message.error({ content: 'no message'})
            }
        }).catch(e => {
            console.error("[getTxLogError]", e);
        })
    }

    const convertWalletAddress = (address) => {
        if (address?.length > 9){
            return `${address.slice(0,5)}...${address.slice(address.length - 4)}`;
        }
        else{
            return address; 
        }
    }

    const totalSales = useMemo(() => {
        const ethereumBalance = distributor?.balance?.ethereum || 0;
        const tronBalance = distributor?.balance?.tron || 0;
        const cumulativeEthereumBalance = distributor?.cumulativeBalance?.ethereum || 0;
        const cumulativeTronBalance = distributor?.cumulativeBalance?.tron || 0;
    
        return ethereumBalance + tronBalance + cumulativeEthereumBalance + cumulativeTronBalance;
    }, [distributor]);
    

    return (
        <div className={`ModalDistribute flex_center_start_col fontCommon`}>
            <div className={`ModalDistributeTop flex_center_between`}>
                <div className={`flex_center_start_col`} style={{width: '158px'}}>
                    <div className="fs12 color-999">
                        {`Available Balance`}
                    </div>
                    <div className="flex_center_start mt5">
                        <CustomIcon imgName={`UI_Picture_USDT_01`} className="" width={24} height={24}/>
                        <div className="ml8 mr8 fs30 fb">
                            {`${convertBalance(profitVolume || 0)}`}
                        </div>
                        <CustomIcon imgName={`UI_Picture_Icon_Withdraw_01`} className="" width={24} height={24} onClick={() => {
                            // setShowWithdrawCommission(true);
                            message.info('Coming Soon');

                        }}/>
                    </div>
                </div>
                <div className={`flex_center_start_col`} style={{width: '158px'}}>
                    <div className="fs12 color-999">
                        {`Total Sales`}
                    </div>
                    <div className="flex_center_start mt5">
                        <CustomIcon imgName={`UI_Picture_USDT_01`} className="" width={24} height={24}/>
                        <div className="ml8 mr8 fs30 fb">
                            {`${convertBalance(totalSales || 0)}`}
                        </div>
                        <CustomIcon imgName={`UI_Picture_Icon_History_01`} className="" width={24} height={24} onClick={() => {
                            // setShowHistroyCommission(true);
                            message.info('Coming Soon');
                        }}/>
                    </div>
                </div>
            </div>
            <div className={`ModalDistributeTopValueRoot flex_center_between`}>
                <div className={`flex_center_start`}>
                    <div className="fs12 color-999 mr5">
                        {`Last Month's Sales:`}
                    </div>
                    <div className="fs12">
                        {lastPeriodSaleAmount}
                    </div>
                </div>
                <div className={`flex_center_start`}>
                    <div className="fs12 color-999 mr5">
                        {`This Month's Sales:`}
                    </div>
                    <div className="fs12">
                        {currPeriodSaleAmount}
                    </div>
                </div>
            </div>
            <div className={`ModalDistributeTierListHead flex_center_start`}>
                <div className={`ModalDistributeTierPart fs12 color-999`}>
                    {`Tier`}
                </div>
                <div className={`ModalDistributeLastSalePart fs12 color-999`} style={{lineHeight: 1}}>
                    {`Sales in Last 2 Months`}
                </div>
                <div className={`ModalDistributePricePart fs12 color-999`}>
                    {`Reseller Price`}
                </div>
                <div className={`ModalDistributeCommissionPart fs12 color-999`}>
                    {`Commission`}
                </div>
            </div>
            <div className={`ModalDistributeTierList`}>
                {
                    showDistributorTierList?.length > 0 &&
                    showDistributorTierList.map((item, index) =>{
                        const {
                            id,
                            minSales,
                            maxSales,
                            purchasePrice
                        } = item || {};
                        let recentSale = Number(lastPeriodSaleAmount || 0) + Number(currPeriodSaleAmount || 0);
                        const isCurrentTier = recentSale >= minSales && recentSale <= maxSales;
                        return (
                            <div key={index} className={`ModalDistributeTierListLine ${isCurrentTier?'currentTierLine':''} flex_center_start`}>
                                <div className="ModalDistributeTierPart fs12">
                                    {`Tier ${id}${isCurrentTier?' (Current)':''}`}
                                </div>
                                <div className="ModalDistributeLastSalePart fs12">
                                    {`${minSales}-${maxSales} Units`}
                                </div>
                                <div className="ModalDistributePricePart fs12">
                                    {`$ ${purchasePrice}`}
                                </div>
                                <div className="ModalDistributeCommissionPart fs12">
                                    {`$ ${999 - purchasePrice} / Unit`}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                distributor?.wallet?.ethereum?.length > 0 &&
                <div className="w100p flex_center_start_col distributorWalletLine">
                    <div className="w100p flex_center_start">
                        <div className="fs14 fontCommon">
                            {`ERC20-USDT`}
                        </div>
                        <div 
                            className="distributorWalletLineValue ml10"
                            onMouseEnter={() => {
                                if (!showEthTips){
                                    setShowEthTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showEthTips){
                                    setShowEthTips(false);
                                }
                            }}>
                            <div className="distributorIconRoot">
                                <CustomIcon imgName={`UI_Picture_Ethereum_01`} className="distributorIcon1" width={16} height={16}></CustomIcon>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="distributorIcon2" width={16} height={16}></CustomIcon>
                            </div>
                            <div className="fs14 fontCommon">
                                {`${convertBalance(distributor?.balance?.ethereum || 0)} / ${convertBalance(distributor?.cumulativeBalance?.ethereum || 0)}`}
                            </div>
                            {
                                showEthTips &&
                                <div className="distributorWalletLineValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {`Current Balance / Total Sales Revenue`}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w100p flex_center_start" style={{marginTop: '4px'}}>
                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={24} height={24} onClick={() => {
                            copyFn(distributor?.wallet?.ethereum);
                        }}></CustomIcon>
                        <div className="fs14 color-999 forceWordBreak fontCommon" style={{marginLeft: '7px'}}>
                            {distributor?.wallet?.ethereum}
                        </div>
                    </div>
                </div>
            }
            {
                distributor?.wallet?.tron?.length > 0 &&
                <div className="w100p flex_center_start_col distributorWalletLine">
                    <div className="w100p flex_center_start">
                        
                        <div className="fs14 fontCommon">
                            {`TRC20-USDT (Coming soon)`}
                        </div>
                        <div 
                            className="distributorWalletLineValue ml10"
                            onMouseEnter={() => {
                                if (!showTronTips){
                                    setShowTronTips(true);
                                }
                            }}
                            onMouseLeave={() => {
                                if (showTronTips){
                                    setShowTronTips(false);
                                }
                            }}>
                            <div className="distributorIconRoot">
                                <CustomIcon imgName={`UI_Picture_TRON_01`} className="distributorIcon1" width={16} height={16}></CustomIcon>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="distributorIcon2" width={16} height={16}></CustomIcon>
                            </div>
                            <div className="fs14 fontCommon">
                                {`${convertBalance(distributor?.cumulativeBalance?.tron || 0)} / ${convertBalance(distributor?.balance?.tron || 0)}`}
                            </div>
                            
                            {
                                showTronTips &&
                                <div className="distributorWalletLineValueTips">
                                    <span className="fs12 nowrap fontCommon">
                                        {`Total Sales Revenue / Current Balance`}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="w100p flex_center_start" style={{marginTop: '4px'}}>
                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={24} height={24} onClick={() => {
                            copyFn(distributor?.wallet?.tron);
                        }}></CustomIcon>
                        <div className="fs14 color-999 forceWordBreak fontCommon" style={{marginLeft: '7px'}}>
                            {distributor?.wallet?.tron}
                        </div>
                    </div>
                </div>
            }
            <div className="w100p flex_center_center" style={{marginTop: '27px'}}>
                <div className={`flex_center_center modalDistributeCommonBtn`} style={{marginRight: '60px'}} onClick={() => { 
                    setShowActivationCode(true);
                }}>
                    <div className='fs14 pointer fb' >Activation Codes</div>
                </div>
                <div className={`flex_center_center modalDistributeCommonBtn`} onClick={() => { 
                    goTransactionHistory();
                }}>
                    <div className='fs14 pointer fb' >Transaction History</div>
                </div>
            </div>
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showHistoryTransaction}
                destroyOnClose={true}
                onOk={() => setShowHistoryTransaction(false)}
                onCancel={() => setShowHistoryTransaction(false)}
            >
                <ModalHistoryTransaction
                    closeFn={() => {
                        setShowHistoryTransaction(false);
                    }}></ModalHistoryTransaction>
            </Modal>
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showActivationCode}
                destroyOnClose={true}
                onOk={() => setShowActivationCode(false)}
                onCancel={() => setShowActivationCode(false)}
            >
                <ModalActivationCode
                    closeFn={() => {
                        setShowActivationCode(false);
                    }}></ModalActivationCode>
            </Modal>
            <Modal
                width='367px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showWithdrawCommission}
                destroyOnClose={true}
                onOk={() => setShowWithdrawCommission(false)}
                onCancel={() => setShowWithdrawCommission(false)}
            >
                <ModalWithdrawCommission
                    profitVolume={profitVolume}
                    closeFn={() => {
                        setShowWithdrawCommission(false);
                    }}
                    useVerticalMode={useVerticalMode}></ModalWithdrawCommission>
            </Modal>
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showHistroyCommission}
                destroyOnClose={true}
                onOk={() => setShowHistroyCommission(false)}
                onCancel={() => setShowHistroyCommission(false)}
            >
                <ModalHistoryCommission
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowHistroyCommission(false);
                    }}></ModalHistoryCommission>
            </Modal>
        </div>
    )
}
export default memo(ModalDistribute);
