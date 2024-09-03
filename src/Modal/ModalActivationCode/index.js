import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message, Spin } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    distributorRedeem,
    getDistributorCdkeyList,
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

const ModalActivationCode = ({
    closeFn = () => {},
}) => {
    const [cdkeyList, setCdkeyList] = useState(null);

    const getCdkeyList = () => {
        getDistributorCdkeyList().then(res => {
            setCdkeyList(res?.list);
        }).catch(e => {
            console.error("[getDistributorCdkeyList error]", e);
        })
    }

    useEffect(() => {
        getCdkeyList();
        /*setCdkeyList([
            {
                "id": 0,
                "code": "0x2AS3C163C1",
                "valid": true,
                "createTime": "1724655507"
            },
            {
                "id": 1,
                "code": "3C1623C163C1",
                "valid": false,
                "createTime": "1724654796"
            }
        ]);*/
    }, []);

    return (
        <div className={`ModalActivationCode flex_center_start_col fontCommon`}>
            <div className="w100p fs20 fb tlc" style={{marginTop: '39px'}}>
                {`Activation Codes Management`}
            </div>
            <div className="w100p activationCodeLine" style={{marginTop: '16px'}}>
                <div className="codeIdPart color-999">
                    {`Code ID`}
                </div>
                <div className="codePart color-999">
                    <div style={{marginLeft: '32px'}}>
                        {`Code`}
                    </div>
                </div>
                <div className="statusPart color-999">
                    {`Status`}
                </div>
                <div className="datePart color-999">
                    {`Date Created`}
                </div>
            </div>
            <div className="activationCodeList flex_center_start_col">
                {
                    cdkeyList?.length > 0 &&             
                    cdkeyList.map((item, index) => {
                        const {
                            id,
                            code,
                            valid,
                            createTime
                        } = item || {};
                        return (
                            <div key={index} className="activationCodeListLine flex_center_start">
                                <div className="codeIdPart fs12 color-999">
                                    {`${id}`}
                                </div>
                                <div className="codePart">
                                    <CustomIcon imgName={`UI_Picture_Icon_Copy_01`} className="op4" width={20} height={20} onClick={() => {
                                        copyFn(code);
                                    }}></CustomIcon>
                                    <div className="fs12 color-999" style={{marginLeft: '12px'}}>
                                        {code}
                                    </div>
                                </div>
                                <div className="statusPart">
                                    {
                                        !valid ?
                                            <div className="fs12">
                                                {`Actived`}
                                            </div> :
                                            <div className="activationCodeActiveState">
                                                {`Inactive`}
                                            </div>
                                    }
                                </div>
                                <div className="datePart fs12 color-999 flex_center_center">
                                    {`${formatUtcTime(createTime*1000)} UTC`}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default memo(ModalActivationCode);
