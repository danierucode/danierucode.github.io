import React from 'react'
import Styles from './Experience.module.css'
import { experience } from '../../page-data.json'

const Experience = (props) => {
    return (
        <>
            {experience.map((exp, key) =>
                <div className={Styles.container} key={key}>
                    <h3 className={Styles.title}>{exp.name}</h3>
                    <div className={Styles.subtitleContainer}>
                        <p className={Styles.company}>{exp.company}</p>
                        <p className={Styles.timespan}>{exp.timespan}</p>
                    </div>
                    <p className={Styles.description}>{exp.description}</p>
                </div>
            )}
        </>
    )
}

export default Experience