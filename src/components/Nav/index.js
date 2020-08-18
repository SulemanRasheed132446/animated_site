import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import logo from '../../images/logo.svg'
import styles from './style.module.css'
import Fade from 'react-reveal/Fade'

export const Nav = () => {
    const options = ['Home', 'Find a doctor', 'Apps', 'Testimonials', 'Us']
    const [selected, setselected] = useState('Home');
    const selectedStyle = {
        color: '#1F1534',
        fontWeight: 'bold'
    }
    return (
        <Fade top >
            <nav className={styles.navBar}>
                <Grid container spacing={1} justify="space-between">
                    <img src={logo} alt="company logo"></img>
                    <Grid>
                        <ul>
                            {options.map((option) => {
                                return (
                                    <li
                                        key={option}
                                        style={option === selected ? selectedStyle : null}
                                        onClick={() => setselected(option)}
                                    > {option} </li>
                                )
                            })}
                        </ul>
                    </Grid>
                </Grid>
            </nav>
        </Fade>
    )
}
