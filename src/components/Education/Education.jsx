import React from 'react'
import Styles from './Education.module.css'
import { education } from '../../page-data.json'

const Education = (props) => {
    return (
        <>
            {
                education.map((edu, key) =>
                    <div className={Styles.container} key={key}>
                        <h3 className={Styles.title}>{edu.course}</h3>
                        <div className={Styles.subtitleContainer}>
                            <p className={Styles.school}>{edu.school}</p>
                            <p className={Styles.location}>{edu.location}</p>
                            <p className={Styles.location}>{edu.timespan}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Education