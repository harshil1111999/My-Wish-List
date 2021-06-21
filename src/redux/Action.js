import { ADD_WISH_LIST } from "./ActionTypes"

// action creator for to add wish to redux store
export const addWishList = (data) => {
    return {
        type: ADD_WISH_LIST,
        payload: data
    }
}