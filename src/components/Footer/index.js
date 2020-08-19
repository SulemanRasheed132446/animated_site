import React from 'react'
import styles from './style.module.css'
import { Grid } from '@material-ui/core'
import logo from '../../images/logo.svg'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footercnt}>
                    <Grid container justify="space-between" alignContent="center" alignItems="center">
                        <Grid container direction="column" justify="flex-start" alignContent="center" xs={12} sm={6} md={4}>
                            <h3>Traflagar</h3>
                            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                        for everyone</p>
                            <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
                        </Grid>
                        <Grid container direction="column" justify="flex-start" alignItems="center" xs={12} sm={6} md={2}>
                            <div>                            <h3>Company</h3>
                                <ul>
                                    <li>About</li>
                                    <li>Testimonials</li>
                                    <li>Find a doctor</li>
                                    <li>Apps</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container direction="column" justify="flex-start" alignItems="center" xs={12} sm={6} md={2}>
                            <div>
                                <h3>Region</h3>
                                <ul>
                                    <li>India</li>
                                    <li>China</li>
                                    <li>Pakistan</li>
                                    <li>America</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container direction="column" justify="flex-start" alignContent="center" xs={12} sm={6} md={2}>
                            <div>
                                <h3>Usage</h3>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Contact Support</li>
                                    <li>Instructions</li>
                                    <li>How it works</li>
                                </ul>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </footer >


    )
}
