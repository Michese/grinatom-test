import actionTypes from './actionTypes'

const Reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.changeSearch:
            return changeSearch(state, action.value)
        case actionTypes.changeFilters:
            return changeFilters(state, action.title, action.filters)
        case actionTypes.changeSort:
            return changeSort(state, action.field, action.isAsc)
        case actionTypes.changeBookmark:
            return changeBookmark(state, action.id, action.bookmark)
        case actionTypes.changeRating:
            return changeRating(state, action.id, action.newRating)
        case actionTypes.loadingBooks:
            return {...state, books: action.books}
        default:
            throw new Error()
    }
}

const changeRating = (state, id, newRating) => {
    const newBooks = [...state.books]
    const index = state.books.findIndex((book) => book.id === id)
    const newBook = {...state.books[index]}
    newBook.rating = newRating
    newBooks.splice(index, 1, newBook)
    return {...state, books: newBooks}
}

const changeFilters = (state, title, filters) => {
    const newSettings = {...state.settings}
    newSettings.filters[title] = filters
    return {...state, settings: newSettings}
}

const changeSearch = (state, value) => {
    const newSettings = {...state.settings}
    newSettings.search = value
    return {...state, settings: newSettings}
}

const changeSort = (state, field, isAsc) => {
    const newSettings = {...state.settings}
    newSettings.sort.field = field
    newSettings.sort.isAsc = isAsc
    return {...state, settings: newSettings}
}

const changeBookmark = (state, id, bookmark) => {
    const newBooks = [...state.books]
    const index = state.books.findIndex((book) => book.id === id)
    const newBook = {...newBooks[index]}
    newBook.bookmark = bookmark
    newBooks.splice(index, 1, newBook)
    return {...state, books: newBooks}
}

export default Reducer