import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action){
    
    switch(action.type){
        case FETCH_WEATHER: 
        // concat doesn't change the existing data doesn't mutate the data
            return state.concat([action.payload.data]);

            // it will be the state will be put in same array with action.payload.data
            // return [action.payload.data, ...state];
    }
    return state;
}

