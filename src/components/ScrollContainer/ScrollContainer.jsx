import React from 'react'
import Syles from './ScrollContainer.module.css'
import ScrollElement from'./ScrollElement'

const ScrollContainer = (props) => {
    return(
        <section className={Syles.container}>
        {
            props.components.map((component, key)=>
               <ScrollElement key={key} id={component.id} title={component.title}>
                   {component.render}
               </ScrollElement>
            )
        }
        </section>
    )
}

export default ScrollContainer