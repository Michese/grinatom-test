import React, {useReducer} from "react"
import BookmarkBlock from "./BookmarkBlock/BookmarkBlock"
import Reducer from "./Reducer/Reducer"
import actionTypes from "./Reducer/actionTypes"

const Navbar = (props) => {

    const [state, dispatch] = useReducer(Reducer, {
        isOpen: false
    })

    const toggleOpenBookmark = () => dispatch({type: actionTypes.openBookmarkBlock})

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand active" href="#">Главная</a>
            <ul className="nav nav-pills">
                <li className="nav-item dropdown position-relative">
                    <button className="btn btn-info dropdown-toggle" onClick={toggleOpenBookmark}>Избранное</button>
                    <BookmarkBlock books={props.books} isOpen={state.isOpen} changeBookmark={props.changeBookmark}/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar