import React from 'react'
import styles from './style.module.css'
import { Grid } from '@material-ui/core'
import { CustomButton } from '../CustomButton'
export const InfoDetail = ({ heading, description, btnText }) => {
    return (
        <Grid container direction="column" justify="center" alignItems="center" xs={12} md={6}>
            <div className={"infoBox " + styles.infoDetails}>
                <h1>{heading}</h1>
                <hr />
                <p>{description}</p>
                <CustomButton
                    backgroundColor="white" color="#458FF6"
                    text={btnText
                    }
                />
            </div>
        </Grid>
    )
}
