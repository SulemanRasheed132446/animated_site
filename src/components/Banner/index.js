import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './style.module.css'
import banner from '../../images/banner.svg'
import Fade from 'react-reveal/Fade'
import { CustomButton } from '../CustomButton'


export const Banner = () => {
    return (
        <div className="container">
            <Grid container spacing={1} justify="space-between">
                <Grid xs={12} md={6} container direction="column" justify="center" >
                    <Fade left>
                        <div className="infoBox">
                            <h1>Virtual healthcare for you</h1>
                            <p>Trafalgar provides progressive, and affordable
                            healthcare, accessible on mobile and online for everyone</p>
                            <CustomButton text={"Consult today"} backgroundColor={'#FFFFFF'} color={'#458FF6'} />
                        </div>
                    </Fade>
                </Grid>
                <Grid xs={12} md={6}>
                    <Fade right>
                        <div className={styles.bannerImgBox}>
                            <img src={banner} className="img" alt="banner" />
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}
