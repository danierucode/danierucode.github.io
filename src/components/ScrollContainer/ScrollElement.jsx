import React from 'react'
import Styles from './ScrollElement.module.css'

const ScrollElement = (props)=>{
    return (
        <section id={props.id} className={Styles.container}>
            <h1 className={Styles.title}>{props.title}</h1>
            {props.children}
        </section>
    )
}
export default ScrollElement