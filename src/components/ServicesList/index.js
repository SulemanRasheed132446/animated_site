import React from 'react'
import styles from './style.module.css'
import { Grid } from '@material-ui/core'
import { servicesList } from '../../util/data'
import { ServiceCard } from '../ServiceCard'
import vector from '../../images/Vector.svg'
import { Fade } from 'react-reveal'
import { CustomButton } from '../CustomButton'

export const ServicesList = () => {
    return (
        <div className={styles.services}>
            <Fade left>
                <img src={vector} alt="vector" />
            </Fade>
            <div className={styles.info}>
                <h1>Our Service</h1>
                <hr />
                <p>We provide to you the best choiches for you.
                Adjust it to your health needs and make sure
                your undergo treatment with our highly qualified
                doctors you can consult with us which type of
                service is suitable for your health</p>
            </div>
            <div className={styles.servicesList}>
                <Grid container spacing={1} justify="space-between">
                    {servicesList.map(((service) => {
                        return (
                            <ServiceCard
                                icon={service.icon}
                                heading={service.heading}
                                title={service.title}
                            />
                        );
                    }))}
                </Grid>
            </div>
            <CustomButton backgroundColor="white" color="#458FF6" text={"Learn more"} margin={"2rem auto"} />

        </div >
    )
}
