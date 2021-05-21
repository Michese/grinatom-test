import actionTypes from "./actionTypes"

const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.openBookmarkBlock:
            return {...state, isOpen: !state.isOpen}
        default:
            throw new Error()
    }
}

export default Reducer