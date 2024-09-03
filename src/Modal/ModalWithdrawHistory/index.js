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
    sliceString,
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css"
import moment from "moment";

const ModalWithdrawHistory = ({
    useVerticalMode,
    closeFn = () => {},
}) => {
    const [nextPage, setNextPage] = useState(1);
    const [historyList, setHistoryList] = useState([]);

    const testHistoryList = [
        {
            status: 1,
            amount: 2894500,
            reviewDate: 1724627163,
            completeDate: 1724637163,
            toAddress: '0xC86E3FFEceFFc708F3f7EcE5C3F861Ae8Ff891FA',
            txn: '0x7eeadbb6f6cecae5b2eb8c0fdccfab8894e00ec32a183ac6d3346c1465ff389b'
        },
        {
            status: 2,
            amount: 500,
            reviewDate: 1724628163,
            completeDate: 1724630163,
            toAddress: '0xC86E3FFEceFFc708F3f7EcE5C3F861Ae8Ff891FA',
            txn: '0x7eeadbb6f6cecae5b2eb8c0fdccfab8894e00ec32a183ac6d3346c1465ff389b'
        },
        {
            status: 3,
            amount: 123456789,
            reviewDate: 1724628163,
            completeDate: 1724630163,
            toAddress: '0xC86E3FFEceFFc708F3f7EcE5C3F861Ae8Ff891FA',
            txn: '0x7eeadbb6f6cecae5b2eb8c0fdccfab8894e00ec32a183ac6d3346c1465ff389b'
        },
        {
            status: 4,
            amount: 15200,
            reviewDate: 1724628163,
            completeDate: 1724630163,
            toAddress: '0xC86E3FFEceFFc708F3f7EcE5C3F861Ae8Ff891FA',
            txn: '0x7eeadbb6f6cecae5b2eb8c0fdccfab8894e00ec32a183ac6d3346c1465ff389b'
        },
    ]

    const getList= (page = 1) => {
        /*getDistributorTxLog(page).then(res => {
            if (res?.txLog?.length > 0){
                let tempList = [];
                if (page > 1){
                    tempList = [...txLogList];
                }
                tempList = [...tempList, ...res?.txLog];
                setTxLogList(tempList);
                setNextPage(page + 1);
            }
            else{
                setNextPage(-1);
            }
        }).catch(e => {
            console.error("[getTxLogError]", e);
        })*/
    }

    const getMoreList = () => {
        //getList(nextPage);
        setNextPage(-1);
    }

    useEffect(() => {
        getList(1);
        //setHistoryList([...testHistoryList]);
    }, []);

    return (
        <>
            {
                useVerticalMode ?
                <div className={`ModalWithdrawHistory flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`Withdraw History`}
                    </div>
                    <div className="withdrawHistoryListRoot_v">
                        <div className="withdrawHistoryLine_v">
                            <div className="statusPart color-999">
                                {`Status`}
                            </div>
                            <div className="amountPart color-999">
                                {`Amount`}
                            </div>
                            <div className="reviewPart color-999">
                                {`Review Date`}
                            </div>
                            <div className="completePart color-999">
                                {`Complet Date`}
                            </div>
                            <div className="toAddressPart color-999">
                                {`To`}
                            </div>
                            <div className="txnPart color-999">
                                {`TXN`}
                            </div>
                        </div>
                        <div className="withdrawHistoryList_v flex_center_start_col" id="withdrawHistoryList_v">
                            {
                                historyList?.length > 0 &&
                                    <InfiniteScroll
                                        dataLength={historyList?.length || 0}
                                        next={getMoreList}
                                        hasMore={nextPage !== -1}
                                        loader={<div
                                            style={{
                                                textAlign: "center",
                                                width: "100%",
                                            }}
                                        ><Spin /></div>}
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: `flex-start`,
                                            width: '100%',
                                            overflow: 'hidden'
                                        }}
                                        scrollableTarget={'withdrawHistoryList_v'}
                                    >
                                        {
                                            historyList.map((item, index) => {
                                                const {
                                                    status,
                                                    amount,
                                                    reviewDate,
                                                    completeDate,
                                                    toAddress,
                                                    txn
                                                } = item || {};
                                                let statusIcon = '';
                                                if (status === 1){
                                                    statusIcon = 'UI_Picture_Icon_Reviewing';
                                                }
                                                else if (status === 2){
                                                    statusIcon = 'UI_Picture_Icon_Withdrawing';
                                                }
                                                else if (status === 3){
                                                    statusIcon = 'UI_Picture_Icon_Succeed_01';
                                                }
                                                else if (status === 4){
                                                    statusIcon = 'UI_Picture_Icon_Rejected';
                                                }
                                                return (
                                                    <div key={index} className="withdrawHistoryListLine flex_center_start">
                                                        <div className="statusPart flex_center_center">
                                                            <CustomIcon imgName={`${statusIcon}`} className="op4" width={20} height={20} />
                                                        </div>
                                                        <div className="amountPart flex_center_start">
                                                            <CustomIcon imgName={`UI_Picture_USDT_01`} className="mr5" width={20} height={20} />
                                                            <div className="fs12">
                                                                {convertBalance(amount || 0)}
                                                            </div>
                                                        </div>
                                                        <div className="reviewPart fs12 color-999">
                                                            {`${formatUtcTime(reviewDate)} UTC`}
                                                        </div>
                                                        <div className="completePart fs12 color-999">
                                                            {`${formatUtcTime(completeDate)} UTC`}
                                                        </div>
                                                        <div className="toAddressPart flex_center_center fs12" onClick={() => {
                                                            copyFn(toAddress);
                                                        }}>
                                                            <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="mr2 op4" width={20} height={20} />
                                                            <div className="fs12 color-999">
                                                                {sliceString(toAddress, 4, 4)}
                                                            </div>
                                                        </div>
                                                        <div className="txnPart fs12">
                                                            <CustomIcon imgName={`UI_Picture_Icon_Share_01`} className="op4" width={20} height={20} onClick={() => {
                                                                let url = `https://etherscan.io/tx/${txn}`;
                                                                window.open(url);
                                                            }} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </InfiniteScroll>
                            }
                        </div>
                    </div>
                </div> :
                <div className={`ModalWithdrawHistory flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`Withdraw History`}
                    </div>
                    <div className="w100p withdrawHistoryLine" style={{marginTop: '16px'}}>
                        <div className="statusPart color-999">
                            {`Status`}
                        </div>
                        <div className="amountPart color-999">
                            {`Amount`}
                        </div>
                        <div className="reviewPart color-999">
                            {`Review Date`}
                        </div>
                        <div className="completePart color-999">
                            {`Complet Date`}
                        </div>
                        <div className="toAddressPart color-999">
                            {`To`}
                        </div>
                        <div className="txnPart color-999">
                            {`TXN`}
                        </div>
                    </div>
                    <div className="withdrawHistoryList flex_center_start_col" id="withdrawHistoryList">
                        {
                            historyList?.length > 0 &&
                                <InfiniteScroll
                                    dataLength={historyList?.length || 0}
                                    next={getMoreList}
                                    hasMore={nextPage !== -1}
                                    loader={<div
                                        style={{
                                            textAlign: "center",
                                            width: "100%",
                                        }}
                                    ><Spin /></div>}
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: `flex-start`,
                                        width: '100%',
                                        overflow: 'hidden'
                                    }}
                                    scrollableTarget={'withdrawHistoryList'}
                                >
                                    {
                                        historyList.map((item, index) => {
                                            const {
                                                status,
                                                amount,
                                                reviewDate,
                                                completeDate,
                                                toAddress,
                                                txn
                                            } = item || {};
                                            let statusIcon = '';
                                            if (status === 1){
                                                statusIcon = 'UI_Picture_Icon_Reviewing';
                                            }
                                            else if (status === 2){
                                                statusIcon = 'UI_Picture_Icon_Withdrawing';
                                            }
                                            else if (status === 3){
                                                statusIcon = 'UI_Picture_Icon_Succeed_01';
                                            }
                                            else if (status === 4){
                                                statusIcon = 'UI_Picture_Icon_Rejected';
                                            }
                                            return (
                                                <div key={index} className="withdrawHistoryListLine flex_center_start">
                                                    <div className="statusPart flex_center_center">
                                                        <CustomIcon imgName={`${statusIcon}`} className="op4" width={20} height={20} />
                                                    </div>
                                                    <div className="amountPart flex_center_start">
                                                        <CustomIcon imgName={`UI_Picture_USDT_01`} className="mr5" width={20} height={20} />
                                                        <div className="fs12">
                                                            {convertBalance(amount || 0)}
                                                        </div>
                                                    </div>
                                                    <div className="reviewPart fs12 color-999">
                                                        {`${formatUtcTime(reviewDate)} UTC`}
                                                    </div>
                                                    <div className="completePart fs12 color-999">
                                                        {`${formatUtcTime(completeDate)} UTC`}
                                                    </div>
                                                    <div className="toAddressPart flex_center_center fs12" onClick={() => {
                                                        copyFn(toAddress);
                                                    }}>
                                                        <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="mr2 op4" width={20} height={20} />
                                                        <div className="fs12 color-999">
                                                            {sliceString(toAddress, 4, 4)}
                                                        </div>
                                                    </div>
                                                    <div className="txnPart fs12">
                                                        <CustomIcon imgName={`UI_Picture_Icon_Share_01`} className="op4" width={20} height={20} onClick={() => {
                                                            let url = `https://etherscan.io/tx/${txn}`;
                                                            window.open(url);
                                                        }} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </InfiniteScroll>
                        }
                    </div>
                </div>
            }
        </>
    )
}
export default memo(ModalWithdrawHistory);
