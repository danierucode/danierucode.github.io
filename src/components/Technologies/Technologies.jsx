import React from 'react'
//import Styles from './Technologies.module.css'
import {technologies} from '../../page-data.json'
import TechnologyBar from '../TechnologyBar/TechnologyBar'

const Technologies= (props)=>{
    return(
        <div className>
            {technologies.map((technology, key)=>
                <TechnologyBar name={technology.name} percentage={technology.percentage} color={technology.color} key={key} />
            )}
        </div>        
    )
}

export default Technologies