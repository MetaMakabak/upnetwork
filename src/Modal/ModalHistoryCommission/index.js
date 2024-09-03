import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import DistributorCommissionTiers from "../../utils/json/DistributorCommissionTiers.json";
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

const basicPurchasePrice = 990;

const ModalHistoryCommission = ({
    useVerticalMode,
    closeFn = () => {},
}) => {
    const [nextPage, setNextPage] = useState(1);
    const [historyList, setHistoryList] = useState([]);

    const testList = [
        {
            timestamp: 1724727163,
            volume: 200,
        },
        {
            timestamp: 1724627163,
            volume: 50,
        },
        {
            timestamp: 1724627163,
            volume: 3,
        },
        {
            timestamp: 1724627163,
            volume: 1,
        },
        {
            timestamp: 1724627163,
            volume: 1,
        },
        {
            timestamp: 1724627163,
            volume: 520,
        },
    ]

    const getConfigBySales = (sales) => {
        let res = null;
        if (DistributorCommissionTiers?.length > 0){
            for (let i = 0; i < DistributorCommissionTiers?.length; i++){
                if (sales >= DistributorCommissionTiers[i].minSales && sales <= DistributorCommissionTiers[i].maxSales){
                    res = DistributorCommissionTiers[i];
                    break;
                }
            }
        }
        return res;
    }

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
        //setHistoryList([...testList, ...testList]);
    }, []);

    return (
        <>
            {
                useVerticalMode ?
                <div className={`ModalHistoryCommission flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`History Commisions`}
                    </div>
                    <div className="historyCommissionListRoot_v">
                        <div className="historyCommissionLine_v">
                            <div className="timePart color-999">
                                {`Month`}
                            </div>
                            <div className="volumePart color-999">
                                {`Sales Volume`}
                            </div>
                            <div className="tierPart color-999">
                                {`Tier`}
                            </div>
                            <div className="pricePart color-999">
                                {`Reseller Price`}
                            </div>
                            <div className="earningsPart color-999">
                                {`Earnings`}
                            </div>
                        </div>
                        <div className="historyCommissionList_v flex_center_start_col" id="historyCommissionList_v">
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
                                        scrollableTarget={'historyCommissionList_v'}
                                    >
                                        {
                                            historyList.map((item, index) => {
                                                const {
                                                    timestamp,
                                                    volume,
                                                } = item || {};
                                                let recentSale = volume;
                                                if (index + 1 < historyList.length){
                                                    recentSale += historyList[index + 1].volume;
                                                }
                                                let cfg = getConfigBySales(recentSale);
                                                let earnings = -1;
                                                if (cfg){
                                                    earnings = recentSale * (basicPurchasePrice - cfg.purchasePrice);
                                                }
                                                return (
                                                    <div key={index} className="historyCommissionListLine flex_center_start">
                                                        <div className="timePart fs12 color-999">
                                                            {`${timestamp}`}
                                                        </div>
                                                        <div className="volumePart fs12 color-999">
                                                            {`${volume}`}
                                                        </div>
                                                        <div className="tierPart fs12 color-999">
                                                            {`${cfg?`Tier ${cfg.id}`:'--'}`}
                                                        </div>
                                                        <div className="pricePart fs12">
                                                            {`${cfg?`$ ${cfg.purchasePrice}`:'--'}`}
                                                        </div>
                                                        <div className="earningsPart fs12">
                                                            {`${cfg?`$ ${Number(earnings).toLocaleString("en-US")}`:'--'}`}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </InfiniteScroll>
                            }
                        </div>
                    </div>
                </div>:
                <div className={`ModalHistoryCommission flex_center_start_col fontCommon`}>
                    <div className="w100p fs20 fb tlc" style={{marginTop: '38px'}}>
                        {`History Commisions`}
                    </div>
                    <div className="w100p historyCommissionLine" style={{marginTop: '16px'}}>
                        <div className="timePart color-999">
                            {`Month`}
                        </div>
                        <div className="volumePart color-999">
                            {`Sales Volume`}
                        </div>
                        <div className="tierPart color-999">
                            {`Tier`}
                        </div>
                        <div className="pricePart color-999">
                            {`Reseller Price`}
                        </div>
                        <div className="earningsPart color-999">
                            {`Earnings`}
                        </div>
                    </div>
                    <div className="historyCommissionList flex_center_start_col" id="historyCommissionList">
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
                                    scrollableTarget={'historyCommissionList'}
                                >
                                    {
                                        historyList.map((item, index) => {
                                            const {
                                                timestamp,
                                                volume,
                                            } = item || {};
                                            let recentSale = volume;
                                            if (index + 1 < historyList.length){
                                                recentSale += historyList[index + 1].volume;
                                            }
                                            let cfg = getConfigBySales(recentSale);
                                            let earnings = -1;
                                            if (cfg){
                                                earnings = recentSale * (basicPurchasePrice - cfg.purchasePrice);
                                            }
                                            return (
                                                <div key={index} className="historyCommissionListLine flex_center_start">
                                                    <div className="timePart fs12 color-999">
                                                        {`${timestamp}`}
                                                    </div>
                                                    <div className="volumePart fs12 color-999">
                                                        {`${volume}`}
                                                    </div>
                                                    <div className="tierPart fs12 color-999">
                                                        {`${cfg?`Tier ${cfg.id}`:'--'}`}
                                                    </div>
                                                    <div className="pricePart fs12">
                                                        {`${cfg?`$ ${cfg.purchasePrice}`:'--'}`}
                                                    </div>
                                                    <div className="earningsPart fs12">
                                                        {`${cfg?`$ ${Number(earnings).toLocaleString("en-US")}`:'--'}`}
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
export default memo(ModalHistoryCommission);
