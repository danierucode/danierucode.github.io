import Technologies from '../components/Technologies/Technologies'
import Education from '../components/Education/Education'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'

const SELECT_OPTION='SELECT_OPTION'
const options=[
    {name:'Technologies', component:<Technologies/>},
    {name:'Experience', component:<Experience/>},
    {name:'Education', component: <Education/>},
    {name:'Projects', component:<Projects/>},
]
const optionsIndexMap={
    Technologies:0,
    Experience:1,
    Education:2,
    Projects:3,
}
const initial_state={
    option:options[0].name,
    component:options[0].component,
}

const Reducer=(state, action)=>{
    switch (action.type){
        case SELECT_OPTION:
            if(!action.payload)
            return state
            return {
                ...state,
                option:action.payload,
                component:options[optionsIndexMap[action.payload]].component,
            }
            default:
                return state? state : initial_state
    }
}

const selectOption=(option)=>{
    return {type:SELECT_OPTION, payload:option}
}

export {Reducer, options, selectOption}