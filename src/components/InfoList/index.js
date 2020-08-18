import React from 'react'
import { Info } from '../Info'
import { infoList } from '../../util/data'
export const InfoList = () => {
    return (
        <>
            {
                infoList.map((info) => {

                    return (
                        <Info
                            description={info.description}
                            svg={info.svg}
                            heading={info.heading}
                            btnText={info.btnText}
                            toggle={info.toggle}
                        />
                    )
                })
            }
        </>
    )
}
