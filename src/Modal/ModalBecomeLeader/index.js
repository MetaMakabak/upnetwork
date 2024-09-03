import React, { memo, useRef, useState, useEffect } from "react";
import { Button, Drawer, Input, Modal, message } from 'antd';
import CustomIcon from "../../common/CustomIcon";
import {
    distributorRedeem
} from '../../utils/upNet';
import { useMemo } from "react";
import "./index.css"

const ModalBecomeLeader = ({
    closeFn = () => {},
    getInfoFn = () => {},
}) => {
    const [distributeCode, setDistributeCode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [confirmState, setConfirmState] = useState(false); //0:free 1:loading 2:success

    const handleDistributeCodeChange = (e) => {
        setDistributeCode(e.target.value);
    };

    const confirmFn = () => {
        if (distributeCode?.length > 0){
            setConfirmState(1);
            distributorRedeem(distributeCode).then(res => {
                setConfirmState(2);
                setErrorMsg('');
                console.log(res);
            }).catch(e => {
                setConfirmState(0);
                getInfoFn();
                setErrorMsg('Invalid code');
                console.error('[distributorRedeem error]', e);
            });
        }
    }

    return (
        <div className={`ModalBecomeLeader flex_center_start_col`}>
            <div className="w100p fs20 fb tlc fontCommon" style={{marginTop: '35px'}}>
                {`Enter Your Reseller Code`}
            </div>
            <Input
                value={distributeCode}
                className={`becomeLeaderInput fontCommon`}
                placeholder='Enter'
                onChange={handleDistributeCodeChange}
            ></Input>
            <div className="ModalBecomeLeaderErrorMsg flex_center_center fontCommon">
                {errorMsg}
            </div>
            {
                confirmState === 2 ? 
                    <div className={`becomeLeaderBtn flex_center_center fontCommon`} onClick={() => {
                        getInfoFn();
                        closeFn();
                    }}>
                        {`Success`}
                    </div> :
                confirmState === 1 ?   
                    <div className={`becomeLeaderBtn flex_center_center fontCommon`}>
                        {`Checking`}
                    </div> :
                distributeCode?.length > 0?
                    <div className={`becomeLeaderBtn flex_center_center fontCommon`} onClick={() => {
                        confirmFn();
                    }}>
                        {`Verify`}
                    </div> :
                    <div className={`becomeLeaderBtn_disable flex_center_center fontCommon`}>
                        {`Verify`}
                    </div> 
            }
        </div>
    )
}
export default memo(ModalBecomeLeader);
