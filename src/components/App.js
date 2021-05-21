import React, {useReducer, useEffect} from "react"
import Reducer from "./Reducer/Reducer"
import Header from "./Header/Header"
import Main from "./Main/Main"
import actionTypes from "./Reducer/actionTypes"
import booksJson from "./json/books.json"

const App = () => {
    const [state, dispatch] = useReducer(Reducer, {
        books: [],
        settings: {
            search: new RegExp("", "i"),
            sort: {
                field: "title",
                isAsc: true
            },
            filters: {}
        }
    })

    const changeSearch = (value) => dispatch({type: actionTypes.changeSearch, value})
    const changeFilters = (title, filters) => dispatch({type: actionTypes.changeFilters, title, filters})
    const changeSort = (field, isAsc) => dispatch({type: actionTypes.changeSort, field, isAsc})
    const changeRating = (id, newRating) => dispatch({type: actionTypes.changeRating, id, newRating})
    const changeBookmark = (id, bookmark) => dispatch({type: actionTypes.changeBookmark, id, bookmark})
    const loadingBooks = (books) => dispatch({type: actionTypes.loadingBooks, books})

    useEffect(() => {
        loadingBooks(booksJson)
    }, [])

    return (
        <div className="container">
            <Header
                books={state.books}
                currentSort={state.settings.sort}
                changeSearch={changeSearch}
                changeFilters={changeFilters}
                changeSort={changeSort}
                changeBookmark={changeBookmark}/>
            <Main books={state.books}
                  settings={state.settings}
                  changeRating={changeRating}
                  changeBookmark={changeBookmark}/>
        </div>
    )
}

export default App