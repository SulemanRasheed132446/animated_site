import React from 'react'
import styles from './style.module.css'
import Fade from 'react-reveal/Fade'

export const CustomButton = ({ text, backgroundColor, color }) => {
    const btnStyle = {
        backgroundColor,
        color
    }
    return (
        <div className={styles.btn} style={btnStyle}>
            {text}
        </div >
    )
}
