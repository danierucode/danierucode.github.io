import React from 'react'
import Styles from './TechnologyBar.module.css'

const TechnologyBar = (props)=>{
    return(
        <div className={Styles.container}>
            <p className={Styles.name}>{props.name}</p>
            <div className={Styles.barContainer}>
                <div style={{
                    width:`${props.percentage}%`, 
                    backgroundColor:props.color, 
                    height:'100%',
                    }}></div>
            </div>
        </div>
    )
}
export default TechnologyBar