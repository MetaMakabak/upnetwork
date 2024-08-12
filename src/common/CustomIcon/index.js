import React, { memo, useRef, useState, useEffect } from "react";
import { useMemo } from "react";
import "./index.css"

const imgbaseUrl = '/img/';
// const aa = './img/ama/'
// const ImgDom = () => {
//     return (
//         <img src={imgbaseUrl111} alt="avatar" />
//     )
//   }
const Index = (props) => {
    const {
        iconClass = "",
        width,
        height,
        style = {},
        imgName = '',
        color = "",
        isHaveHover = false,
        isHaveClick = false,
        onClick = null,
        className = "",
        rotating,
        imgType = '.png',
        baseUrl = imgbaseUrl,
        children = <></>,
        forceRotate = false,
    } = props;
    const [hover, setHover] = useState(false);
    const [rotate, setRotate] = useState(false);
    const toggleHover = () => {
        setHover(!hover)
    }
    const imgSrc = useMemo(() => {
        if (hover) {
            return {
                backgroundImage: `url('${baseUrl}${imgName}_hover${imgType}')`
            }

        } else {
            return {
                backgroundImage: `url('${baseUrl}${imgName}${imgType}')`
            }
            // return `${imgbaseUrl}${imgName}.png`
        }
    }, [hover, imgName]);

    useEffect(() => {
        if (forceRotate) {
            spin();
        }
    }, [forceRotate]);

    const spin = () => {
        setRotate(true)
        setTimeout(() => {
            setRotate(false)
        }, 500)
    }

    return (

        <span className={`icon-wrapper ${className}`} onClick={(e) => {
            if (onClick) {
                e.preventDefault();
                e.stopPropagation();
                onClick();
                isHaveClick && spin()
            }
        }} style={{ width: width, height: height }}>
            <span
                className={`customIcon`}
                onMouseEnter={isHaveHover ? toggleHover : null}
                onMouseLeave={isHaveHover ? toggleHover : null}
                style={{ color: color || "none", width: width, height: height, ...style, ...imgSrc }}
            >
                {children}
            </span>
        </span>
    )
}
export default memo(Index);
