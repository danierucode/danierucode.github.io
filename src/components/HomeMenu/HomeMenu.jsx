import React from 'react'
import Styles from './HomeMenu.module.css'
import MenuElement from '../MenuElement/MenuElment'

const HomeMenu = (props) => {
    return (
        <section className={Styles.container}>
            {
                props.options.map((option, key)=>
                    <MenuElement key={key} name={option} handleClick={props.selectOption} selectedOption={props.selectedOption}/> 
                )
            }
        </section>
    )
}
export default HomeMenu