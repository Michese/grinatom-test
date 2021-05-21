import React from "react"
import "./bookmarkBlock.scss"

const BookmarkBlock = (props) => {
    const bookmarks = props.books.filter(book => book.bookmark)
    const bookmarkStyles = ["bookmark", "bg-light", "p-4"]

    if (props.isOpen) {
        bookmarkStyles.push("isOpen")
    }

    return (
        <section className={bookmarkStyles.join(" ")}>
            <table className="table">
                <thead>
                <tr>
                    <th className="text-center" scope="col">Название</th>
                    <th className="text-center" scope="col">Удалить</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookmarks.length === 0 ?
                        <tr className="text-center">
                            <td colSpan="2">В избранном книг пока нет!</td>
                        </tr> :
                        bookmarks.map((book, key) => {
                            return (
                                <tr key={"bookmark" + key}>
                                    <td scope="row">{book.title}</td>
                                    <td className="text-center">
                                        <button className="btn btn-dark"
                                                onClick={() => props.changeBookmark(book.id, false)}>
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>

        </section>
    )
}

export default BookmarkBlock