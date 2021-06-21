import { ADD_WISH_LIST } from "./ActionTypes"

const initialState = {
    wishLists: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_WISH_LIST:
            // console.log(action.payload)
            return {
                wishLists: [...state.wishLists, action.payload]
            }
        default:
            return state
    }
}

export default reducer