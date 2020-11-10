import React from 'react'
import Styles from './MenuElement.module.css'
import { connect } from 'react-redux'

const MenuElement = (props) => {
    return (
        <div
            className={Styles.container}
            onClick={() => props.handleClick(props.name)}
        >
            <p
                className={props.option === props.name ? `${Styles.Selected} ${Styles.text}` : Styles.text}
            >{props.name}</p>
            <div className={Styles.line}></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        option: state.HomeReducer.option,
    }
}

export default connect(
    mapStateToProps
)(MenuElement)