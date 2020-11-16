const SELECT_OPTION='SELECT_OPTION'
const initial_state={
    option:'',
}

const reducer=(state=initial_state, action)=>{
    if(!action) return state
    switch (action.type){
        case SELECT_OPTION:
            if(!action.payload)
            return state
            return {
                ...state,
                option:action.payload,
            }
            default:
                return state
    }
}

const selectOption=(option)=>{
    return {type:SELECT_OPTION, payload:option}
}

export {reducer, selectOption}