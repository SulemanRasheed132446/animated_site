import React from 'react'
import { Grid } from '@material-ui/core'
import { InfoDetail } from '../InfoDetail'
import { Fade } from 'react-reveal'
export const Info = ({ svg, heading, description, btnText, toggle }) => {
    return (
        <div className="container mrg">
            <Fade zoom >
                <Grid container spacing={1} justify="space-between">

                    {toggle ?
                        (<Grid xs={12} md={6}>
                            <img src={svg} alt="illustration" className="img" />
                        </Grid>) :
                        (<InfoDetail
                            heading={heading}
                            description={description}
                            btnText={btnText}

                        />)
                    }
                    {!toggle ?
                        (<Grid xs={12} md={6}>
                            <img src={svg} alt="illustration" className="img" />
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
