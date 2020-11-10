import React from 'react'
import Styles from './OptionContainer.module.css'
import {connect} from 'react-redux'

const OptionContainer =(props)=>{
    return (
        <section className={Styles.container} >
            {props.component}
        </section>
    )
}

const mapStateToProps=(state)=>{
    return {
        component:state.HomeReducer.component
    }
}

export default connect(
    mapStateToProps
)(OptionContainer)