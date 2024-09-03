import React, { useMemo, useEffect, useState } from "react";

const Countdown = ({ 
    leftSecond = null, 
    refresh=()=>{}, 
    workEndTimestamp = null , 
    showType = 0, //0: hh:mm:ss 1:xxxxxx
    setType = 0, //0: hh:mm:ss 1:mm:ss
}) => {
    if (!leftSecond && workEndTimestamp){
        var now = new Date().getTime();
        leftSecond = workEndTimestamp - Math.floor(now / 1000);
    }
    if (showType > 1){
        console.log("sshowType", showType, workEndTimestamp, leftSecond);
    }
    const [leftSeconds, setLeftSeconds] = useState(leftSecond);
    useEffect(() => {
        let intervalId;
        if(intervalId){
            clearInterval(intervalId)
        }
        if (leftSeconds === 0) {
            clearInterval(intervalId);
            refresh();
        } else if (leftSeconds <= 0){
            setTimeout(function() { 
                clearInterval(intervalId);
                refresh(); 
            }, 1000);
        } else if (leftSeconds !== 0) {
            intervalId = setInterval(() => {
                setLeftSeconds(leftSeconds - 1)
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [leftSeconds]);

    const leftStr = useMemo(() => {
        if(leftSeconds < 0) return '--'
        if (leftSeconds || leftSeconds === 0) {
            let H = Math.floor(leftSeconds / (60 * 60)); //计算小时数
            let m = 0;
            if (setType === 1){
                m = Math.floor(leftSeconds / 60); //计算分钟数
            }
            else{
                m = Math.floor(leftSeconds / (60) % 60); //计算分钟数
            }
            let s = Math.floor(leftSeconds % 60); //计算秒数
            if (H < 10) {
                H = '0' + H
            }
            if (m < 10) {
                m = '0' + m
            }
            if (s < 10) {
                s = '0' + s
            }
            if (setType === 1){
                return `${m}:${s}`;
            }
            else{
                return `${H}:${m}:${s}`;
            }
        } else {
            return ''
        }
    }, [leftSeconds])

    return (
        showType === 1 ? 
            leftSeconds > 0 ? Math.floor(leftSeconds) : '0' 
            : leftStr
    );
};


export default Countdown;
