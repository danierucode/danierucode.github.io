import React from 'react'
import Styles from './Projects.module.css'
import { projects } from '../../page-data.json'

const Projects = (props) => {
    return (
        <>
            {projects.map((project, key) =>
                <div className={Styles.container} key={key}>
                    <h3 className={Styles.title}>{project.name}</h3>
                    <p className={Styles.company}>{project.company}</p>
                    <p className={Styles.description}>{project.description}</p>
                    <ul className={Styles.technologyList}>
                        {
                            project.technologies.map((technology, key) =>
                                <li key={key}>{technology}</li>
                            )
                        }
                    </ul>
                </div>
            )}
        </>
    )
}

export default Projects