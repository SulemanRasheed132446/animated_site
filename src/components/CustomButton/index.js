import React from 'react'
import styles from './style.module.css'

export const CustomButton = ({ text, backgroundColor, color, margin = 0 }) => {
    const btnStyle = {
        backgroundColor,
        color,
        margin
    }
    return (
        <div className={styles.btn} style={btnStyle}>
            {text}
        </div >
    )
}
