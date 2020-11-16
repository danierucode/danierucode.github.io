import React from 'react'

const addPropsToChildren =(children, props)=>{
    return React.Children.map(children, child=>{
        if(React.isValidElement(child)){
            return React.cloneElement(child, props)
        }
        return child
    })
} 
export default addPropsToChildren