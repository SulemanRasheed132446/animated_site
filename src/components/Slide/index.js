import React from 'react'
import { Grid } from '@material-ui/core'
import { Zoom } from 'react-reveal'
export const Slide = ({ image, name, title, comment }) => {
    return (

        <Zoom>

            <Grid container justify="space-between">
                <Grid container xs={12} md={6} justify="center" alignItems="center" alignContent="center">
                    <Grid container xs={12} lg={4} justify="center">
                        <img src={image} alt={name} />
                    </Grid>
                    <Grid container xs={12} lg={8} justify="center">
                        <h3>{name}</h3>
                        <h4>{title}</h4>
                    </Grid>
                </Grid>
                <Grid xs={12} md={6}>
                    <p>
                        {comment}
                    </p>
                </Grid>
            </Grid>
        </Zoom>
    )
}
