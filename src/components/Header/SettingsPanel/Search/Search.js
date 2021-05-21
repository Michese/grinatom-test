import React from "react"

const Search = (props) => {
    const onInput = (event) => {
        props.changeSearch(new RegExp(event.target.value, "i"))
    }

    return (
        <section className="p-2">
            <h2 className="text-center">Поиск</h2>
            <fieldset className="d-flex justify-content-between align-items-center">
                <input className="form-control mr-sm-2" placeholder="Поиск" onInput={onInput} />
            </fieldset>
        </section>
    )
}

export default Search