import registeredMenus from '../components/MenuFactory/RegisteredMenus.json'
import {reducer as menuReducer} from '../components/MenuFactory/reducer'

const getReducerObject=()=>{
    let reducers={}
    const menus=Object.values(registeredMenus)
    //Add new reducers here!-------------
    reducers=addReducers(menuReducer, menus, 'menu', reducers)
    //------------------------
    return reducers
}

const addReducers=(reducerFactory, nameArray, reducerName, reducersObj)=>{
    for(let i=0; i<nameArray.length; i++){
        const reducer=createNamedWrappedReducer(reducerFactory, nameArray[i])
        reducersObj={...reducersObj, [`${reducerName}_${nameArray[i]}`]:reducer}
    }
    return reducersObj
}

const createNamedWrappedReducer=(reducer, reducerName)=>{
    return (state, action)=>{
        const {name}=action
        const isInitializationCall=state===undefined
        if(name!==reducerName && !isInitializationCall) return state
        return reducer(state, action) 
    }
}

export default getReducerObject