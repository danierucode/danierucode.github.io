import React from 'react'
import Styles from './OptionContainer.module.css'
import {connect} from 'react-redux'

const OptionContainer =(props)=>{
    return (
        <section className={Styles.container} >
            {props.optionsComponentMap[props.option]}
        </section>
    )
}

const mapStateToProps=(state, ownProps)=>{
    return {
        option:state[`menu_${ownProps.menuName}`].option
    }
}

export default connect(
    mapStateToProps
)(OptionContainer)