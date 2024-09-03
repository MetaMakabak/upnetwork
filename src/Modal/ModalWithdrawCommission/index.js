import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    distributorRedeem,
    getDistributorTxLog,
} from '../../utils/upNet';
import {
    copyFn,
    convertBalance,
    renderTime,
    formatUtcTime,
    getMonthString,
} from "../../utils/common";
import { useMemo } from "react";
import Countdown from "../../utils/countdown";
import ModalWithdrawHistory from "../ModalWithdrawHistory";
import "./index.css"
import moment from "moment";

const ModalWithdrawCommission = ({
    availableBalance,
    closeFn = () => {},
    useVerticalMode,
}) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [withdrawState, setWithdrawState] = useState(0); //0:free, 1:review, 2:to be submitted, 3:reject, 4:submitting
    const [showWithdrawHistory, setShowWithdrawHistory] = useState(false);

    //测试用
    const reviewingTimestamp = 1724655507;
    const toAddress = '0x2AS3C163C1';

    const handleWalletAddressChange = (e) => {
        setWalletAddress(e.target.value);
    };

    const handleWithdrawAmountChange = (e) => {
        setWithdrawAmount(Number(e.target.value));
    };

    const convertTime = (time) => {
        let timeDate = new Date(Number(time));
        let year = timeDate.getUTCFullYear();
        let month = timeDate.getUTCMonth() + 1;
        let day = timeDate.getUTCDate();
        let hour = timeDate.getUTCHours();
        let minute = timeDate.getUTCMinutes();
        let second = timeDate.getUTCSeconds();
        let monthStr = getMonthString(month);
        return `${monthStr} ${day},${year}, ${hour.toString()?.padStart(2, '0')}:${minute.toString()?.padStart(2, '0')}:${second.toString()?.padStart(2, '0')} UTC`;
    }

    useEffect(() => {
        
    }, []);

    return (
        <div className={`ModalWithdrawCommission flex_center_start_col fontCommon`}>
            <div className="w100p fs20 fb tlc" style={{marginTop: '55px'}}>
                {`Withdraw commission`}
            </div>
            <div className="w100p flex_center_center" style={{marginTop: '16px'}}>
                <div className="fs12 color-999">
                    {`Current Withdrawable Amount`}
                </div>
                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml8 mr8" width={20} height={20}/>
                <div className="fs12 fb">
                    {availableBalance}
                </div>
                <CustomIcon imgName={`UI_Picture_Icon_History_01`} className="ml8" width={20} height={20} onClick={() => {
                    setShowWithdrawHistory(true);
                }}/>
            </div>
            {
                withdrawState === 0 ?
                    <>
                        <Input
                            value={walletAddress}
                            className={`withdrawCommissionAddressInput fontCommon`}
                            placeholder='Enter Wallet Address'
                            onChange={handleWalletAddressChange}
                        ></Input>
                        <div className="w100p fs12 color-999" style={{paddingLeft: '55px', marginTop: '24px'}}>
                            {`Minimum amount ${80}`}
                        </div>
                        <Input
                            value={withdrawAmount}
                            className={`withdrawCommissionAddressInput fontCommon`}
                            placeholder='Amount'
                            onChange={handleWithdrawAmountChange}
                            type={'number'}
                        ></Input>
                        <div className={`comfirmbtn withdrawCommissionBtn flex_center_center fontCommon`} onClick={() => {
                            //TODO
                        }}>
                            {`Confirm`}
                        </div> 
                        <div className="fs12 color-999" style={{margin: '24px 0px'}}>
                            {`Withdrawals require a 24-hour review period after initiation`}
                        </div>
                    </> :
                withdrawState === 1 ?
                    <>
                        <div className="withdrawCommissionReviewRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {3000}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(reviewingTimestamp)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    copyFn(toAddress);
                                }}/>
                                <div className="fs12 color-999">
                                    {`${toAddress}`}
                                </div>
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '26px'}}>
                                <div className="fs12 mr6">
                                    {`Approval Countdown:`}
                                </div>
                                <div className="fs20 fb">
                                    <Countdown refresh={() => {}}
                                        leftSecond={30000}/>
                                </div>
                            </div>
                        </div>
                    </> :
                withdrawState === 2 || withdrawState ===  4 ?
                    <>
                        <div className="withdrawCommissionClaimRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {3000}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(reviewingTimestamp)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    copyFn(toAddress);
                                }}/>
                                <div className="fs12 color-999">
                                    {`${toAddress}`}
                                </div>
                            </div>
                            <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px'}}>
                                {`Approval granted Please claim your reward`}
                            </div>
                        </div>
                        <div className={`comfirmbtn withdrawCommissionClaimBtn flex_center_center fontCommon`} onClick={() => {
                            if (withdrawState === 2){
                                //TODO
                            }
                        }}>
                            {
                                withdrawState === 4 &&
                                <CustomIcon rotating={true} imgName={`UI_Picture_Loading_01`} className="mr5" width={20} height={20}></CustomIcon>
                            }
                            {`Claim`}
                        </div> 
                    </> :
                withdrawState === 3 ?
                    <>
                        <div className="withdrawCommissionRejectRoot flex_center_start_col">
                            <div className="w100p flex_center_center">
                                <div className="fs14">
                                    {`Request withdrawal`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_USDT_01`} className="ml5 mr5" width={20} height={20}/>
                                <div className="fs14 fb">
                                    {3000}
                                </div>
                            </div>
                            <div className="w100p mt10 tlc fs12 color-999" style={{height: '20px'}}>
                                {`at ${convertTime(reviewingTimestamp)}`}
                            </div>
                            <div className="w100p flex_center_center" style={{marginTop: '14px'}}>
                                <div className="fs12 color-999">
                                    {`To`}
                                </div>
                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="ml5 mr5 op4" width={20} height={20} onClick={() => {
                                    copyFn(toAddress);
                                }}/>
                                <div className="fs12 color-999">
                                    {`${toAddress}`}
                                </div>
                            </div>
                            <div className="w100p tlc fs14 fb color-yellow" style={{marginTop: '18px', height: '20px'}}>
                                {`Your request has been rejected`}
                            </div>
                            <div className="w100p tlc fs14 fb color-yellow" style={{height: '20px'}}>
                                {`Please contact the support team.`}
                            </div>
                        </div>
                        <div className={`withdrawCommissionRejectConfirmBtn flex_center_center fontCommon`} onClick={() => {
                            //TODO
                        }}>
                            {`Confirm`}
                        </div> 
                    </> :
                    <></>
            }
            <Modal
                width='607px'
                title={''}
                className="confirmModalWrap modalnopadding"
                centered={true}
                open={showWithdrawHistory}
                destroyOnClose={true}
                onOk={() => setShowWithdrawHistory(false)}
                onCancel={() => setShowWithdrawHistory(false)}
            >
                <ModalWithdrawHistory
                    useVerticalMode={useVerticalMode}
                    closeFn={() => {
                        setShowWithdrawHistory(false);
                    }}></ModalWithdrawHistory>
            </Modal>
        </div>
    )
}
export default memo(ModalWithdrawCommission);
