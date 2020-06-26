import {ADD_ONE,MINUS_ONE} from '../action/action'
// import React from 'react'

const initialState={
    count:0
}
function Reducers(state=initialState,action)
{
    switch(action.type)
    {
        case ADD_ONE:
            return{count:state.count +1}
        
        case MINUS_ONE:
            return {count:state.count - 1}

        default:
            return state
    }
}
export default Reducers