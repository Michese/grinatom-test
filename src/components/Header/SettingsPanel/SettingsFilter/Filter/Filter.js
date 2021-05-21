import React from "react"

const Filter = (props) => {
    const filters = (new Set(props.books.map((book) => book[props.field]).sort()))
    const onSelect = (event) => {
        let selectedStrings = Array.from(event.target.options).filter(option => option.selected).map(option => option.value)
        const selectedRegexp = new RegExp(selectedStrings.join("|"), "i")
        props.changeFilters(props.field, selectedRegexp)
    }
    return (
        <fieldset className="d-flex align-items-center flex-column">
            <h3>{props.title}</h3>
            <select className="custom-select text-primary" onChange={onSelect} multiple>
                <option/>
                {
                    [...filters].map((filter, key) => <option value={filter} key={props.title + "filter" + key}  >{filter}</option>)
                }
            </select>
        </fieldset>
    )
}

export default Filter