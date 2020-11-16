import React from 'react'
import Styles from './MenuElement.module.css'

const MenuElement = (props) => {
    return (
        <a
            className={Styles.container}
            href={`#${props.name}`}
            onClick={() => {
                props.handleClick(props.name)
            }}
        >
            <p
                className={props.selectedOption === props.name ? `${Styles.selected} ${Styles.text}` : Styles.text}
            >{props.name}</p>
            <div className={Styles.line}></div>
        </a>
    )
}

export default MenuElement