import React from 'react'
import Styles from './Menu.module.css'
    import { options, selectOption } from '../../redux/home-rdx'
    import { connect } from 'react-redux'
import MenuElement from '../MenuElement/MenuElment'

const Menu = (props) => {
    return (
        <section className={Styles.container}>
            {
                options.map((option, key)=>
                      <MenuElement key={key} name={option.name} handleClick={props.selectOption}/> 
                )
            }
        </section>
    )
}

const mapStateToProps = state => {
    return {
        option: state.HomeReducer.option,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectOption: option => dispatch(selectOption(option))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu)