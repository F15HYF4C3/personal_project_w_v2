import {combineReducers} from 'redux'

const user = (state= {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default:
            return state;
    }
}
const volList = (state= [], action) => {
    switch(action.type){
        case 'my_list':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user, volList});