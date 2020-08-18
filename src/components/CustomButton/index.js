import React, { useState } from 'react'
import styles from './style.module.css'

export const CustomButton = ({ text, backgroundColor, color, margin = 0 }) => {
    const [hover, setHover] = useState(false);
    const btnStyle = {
        backgroundColor,
        color,
        margin
    }
    const hoverBtnStyle = {
        backgroundColor: color,
        color: backgroundColor,
        margin
    }
    return (
        <div
            className={styles.btn}
            style={hover ? hoverBtnStyle : btnStyle}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            {text}
        </div >
    )
}
