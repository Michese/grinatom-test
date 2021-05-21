import React, {useReducer} from 'react'
import Reducer from "./Reducer"
import BookOnMainPage from "./BookOnMainPage/BookOnMainPage";

const Main = (props) => {
    const [state, dispatch] = useReducer(Reducer, {
        filterBooks: props.books,
        filters: [],
        sortBy: null
    })

    const changeRating = (index, newRating) => dispatch({type: "changeRating", index, newRating })

    return (
        <>
            <h1>Избранное</h1>
            <section className="d-flex justify-content-between align-items-start flex-wrap">
                {
                    state.filterBooks.map((item, key)=> <BookOnMainPage key={"book" + key} book={item} index={key} changeRating={changeRating} /> )
                }
            </section>
        </>
    )
}

export default Main