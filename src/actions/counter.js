
import { counter as CounterTypes } from '../constants/actionTypes'


export const incrementarContador = () => async(dispatch) => {
    dispatch({
        type: CounterTypes.INCREMENTAR
    })
}

export const decrementarContador = () => async(dispatch) => {
    dispatch({
        type: CounterTypes.DECREMENTAR
    })
}

export default{
    incrementarContador,
    decrementarContador,
}