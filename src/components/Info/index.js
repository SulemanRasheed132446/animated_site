import React from 'react'
import styles from './style.module.css'
import { Grid } from '@material-ui/core'
import { InfoDetail } from '../InfoDetail'
import { Fade } from 'react-reveal'
export const Info = ({ svg, heading, description, btnText, toggle }) => {
    return (
        <div className={styles.infoCard}>
            <Fade zoom >
                <Grid container spacing={1} justify="space-between">

                    {toggle ?
                        (<Grid xs={6}>
                            <img src={svg} alt="illustration" />
                        </Grid>) :
                        (<InfoDetail
                            heading={heading}
                            description={description}
                            btnText={btnText}

                        />)
                    }
                    {!toggle ?
                        (<Grid xs={6}>
                            <img src={svg} alt="illustration" />
                        </Grid>) :
                        (<InfoDetail
                            heading={heading}
                            description={description}
                            btnText={btnText}

                        />)
                    }
                </Grid>
            </Fade>
        </div>
    )
}
