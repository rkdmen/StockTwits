import { } from '../constants/ActionTypes';

export function stockReducer(state = {}, action) {
    switch (action.type) {

        case "grab constant":
            return Object.assign({}, state, {

            })
        default:
            return state;
    }
}
