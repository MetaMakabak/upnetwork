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
} from "../../utils/common";
import { useMemo } from "react";
import "./index.css"
import moment from "moment";

const ModalHistoryTransaction = ({
    closeFn = () => {},
}) => {
    const [nextPage, setNextPage] = useState(1);
    const [txLogList, setTxLogList] = useState(null);

    const getTxLog = (page = 1) => {
        getDistributorTxLog(page).then(res => {
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
        })
    }

    const getMoreList = () => {
        getTxLog(nextPage);
    }

    const convertAddress = (address) => {
        if (address?.length > 9){
            return `${address.slice(0,5)}...${address.slice(address.length - 4)}`;
        }
        else{
            return address;
        }
    }

    useEffect(() => {
        getTxLog(1);
    }, []);

    return (
        <div className={`ModalDistribute flex_center_start_col fontCommon`}>
            <div className="w100p fs20 fb tlc" style={{marginTop: '39px'}}>
                {`Transaction History`}
            </div>
            <div className="w100p transactionListoryLine" style={{marginTop: '16px'}}>
                <div className="chainPart color-999">
                    {`Chain`}
                </div>
                <div className="walletPart color-999">
                    {`Wallet Address`}
                </div>
                <div className="amountPart color-999">
                    {`Amount`}
                </div>
                <div className="datePart color-999">
                    {`Date`}
                </div>
                <div className="txnPart color-999">
                    {`TXN`}
                </div>
            </div>
            <div className="historyTransactionList flex_center_start_col" id="historyTransactionList">
                {
                    txLogList?.length > 0 &&
                        <InfiniteScroll
                            dataLength={txLogList?.length || 0}
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
                            scrollableTarget={'historyTransactionList'}
                        >
                            {
                                txLogList.map((item, index) => {
                                    const {
                                        chain,
                                        timestamp,
                                        from,
                                        amount,
                                        txHash,
                                    } = item || {};
                                    return (
                                        <div key={index} className="historyTransactionListLine flex_center_start">
                                            <div className="chainPart fs12">
                                                {`${chain==='tron'?'TRC20-USDT':'ERC20-USDT'}`}
                                            </div>
                                            <div className="walletPart flex_center_start">
                                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={16} height={16} onClick={() => {
                                                    copyFn(from);
                                                }}></CustomIcon>
                                                <div className="fs12 color-999" style={{marginLeft: '6px'}}>
                                                    {convertAddress(from)}
                                                </div>
                                            </div>
                                            <div className="amountPart flex_center_start">
                                                <div className="amountPartIconRoot">
                                                    <CustomIcon imgName={`${chain==='tron'?'UI_Picture_TRON_01':'UI_Picture_Ethereum_01'}`} className="amountPartIcon1" width={18} height={18}></CustomIcon>
                                                    <CustomIcon imgName={`UI_Picture_USDT_01`} className="amountPartIcon2" width={18} height={18}></CustomIcon>
                                                </div>
                                                <div className="fs12">
                                                    {`${convertBalance(amount || 0)} USDT`}
                                                </div>
                                            </div>
                                            <div className="datePart flex_center_center fs12 color-999">
                                                {`${formatUtcTime(timestamp*1000)} UTC`}
                                            </div>
                                            <div className="txnPart flex_center_start">
                                                <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={16} height={16} onClick={() => {
                                                    copyFn(txHash);
                                                }}></CustomIcon>
                                                <div className="fs12 color-999" style={{marginLeft: '6px'}}>
                                                    {convertAddress(txHash)}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </InfiniteScroll>
                }
            </div>
        </div>
    )
}
export default memo(ModalHistoryTransaction);
