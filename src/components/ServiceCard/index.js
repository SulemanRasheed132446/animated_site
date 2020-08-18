import React from 'react'
import { Grid, Card } from '@material-ui/core'
import styles from './style.module.css'
import { Fade } from 'react-reveal'
export const ServiceCard = ({ icon, heading, title }) => {
    return (
        <Grid container spacing={3} xs={12} md={6} lg={4} className={styles.serviceGrid} alignContent="center">
            <Fade top>
                <Card className={styles.serviceCard}>
                    <img src={icon} alt={heading} />
                    <h2>{heading}</h2>
                    <p>{title}</p>
                </Card>
            </Fade>
        </Grid>
    )
}
