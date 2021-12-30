
import { counter as counterActions} from "../constants/actionTypes"

const INITIAL_STATE = {

    count:0,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case counterActions.INCREMENTAR:{
            return { ...state, count: state.count + 10 }
        }

        case counterActions.DECREMENTAR: {
            return { ...state, count: state.count - 10 }
        }

        default:
            return state;
    }
}