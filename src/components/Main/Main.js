import React from "react"
import Book from "./Book/Book"
import sortedBy from "./sortedBy"

const Main = (props) => {
    let filterBooks = props.books

    Object.keys(props.settings.filters).forEach((key) => {
        filterBooks = filterBooks.filter((book) => {
            return props.settings.filters[key].test(book[key])
        })
    })

    filterBooks = filterBooks.filter((book) => {
        return props.settings.search.test(book.title)
    })

    filterBooks.sort(sortedBy(props.settings.sort.field, props.settings.sort.isAsc))

    return (
        <>
            <h1 className="text-center">Библиотека</h1>
            <section className="d-flex justify-content-between align-items-start flex-wrap">
                {
                    filterBooks.length === 0 ?
                        <p className="text-center">
                            Книг пока нет!
                        </p> :
                        filterBooks.map((item, key) =>
                            <Book key={"book" + key}
                                  book={item}
                                  id={item.id}
                                  changeRating={props.changeRating}
                                  changeBookmark={props.changeBookmark}
                            />
                        )
                }
            </section>
        </>
    )
}

export default Main