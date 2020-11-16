import React from 'react'
import { connect } from 'react-redux'
import addPropsToChildren from '../../js/add-props-to-children'

const Menu = (props) => {
    const childrenWithProps = addPropsToChildren(props.children, { selectedOption: props.selectedOption, selectOption: props.selectOption })
    if(props.initialOption && props.selectedOption==='') props.selectOption(props.initialOption)
    return (
        <>
            {childrenWithProps}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedOption: state[`menu_${ownProps.name}`].option,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectOption: option => dispatch({ type: 'SELECT_OPTION', name: ownProps.name, payload: option }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)