import React from "react"
import "./book.scss"

const Book = (props) => {

    return (
        <article className="card book m-2">
            <header className="card-header book__header">
                <h5 className="card-title book__title">{props.book.title}</h5>
            </header>
            <main className="card-body book__main">
                <p className="card-text"><strong>Год:</strong> {props.book.year}</p>
                <p className="card-text"><strong>Автор:</strong> {props.book.author}</p>
                <p className="card-text"><strong>Издательство:</strong> {props.book.publisher}</p>
                <p className="card-text"><strong>Рейтинг:</strong> {props.book.rating}</p>
            </main>
            <footer className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        {
                            props.book.rating >= 10 ?
                                <button className="btn btn-success"
                                        onClick={() => props.changeRating(props.id, props.book.rating + 1)}
                                        disabled>+</button>
                                : <button className="btn btn-success"
                                          onClick={() => props.changeRating(props.id, props.book.rating + 1)}>+</button>
                        }
                        {
                            props.book.rating <= 0 ?
                                <button className="btn btn-danger ml-3"
                                        onClick={() => props.changeRating(props.id, props.book.rating - 1)}
                                        disabled>-</button>
                                : <button className="btn btn-danger ml-3"
                                          onClick={() => props.changeRating(props.id, props.book.rating - 1)}>-</button>
                        }
                    </div>
                    {
                        props.book.bookmark ?
                            null
                            : <button className="btn btn-primary"
                                      onClick={() => props.changeBookmark(props.id, true)}>Избранное</button>
                    }
                </div>
            </footer>
        </article>
    )
}

export default Book