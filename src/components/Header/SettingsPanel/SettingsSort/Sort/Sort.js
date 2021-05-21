import React from "react"

const Sort = (props) => {
    const isActive = props.currentSort.field === props.field

    const fieldSetStyles = ["btn-group"]
    fieldSetStyles.push(isActive && props.currentSort.isAsc ? "dropup" : "dropdown")

    const btnStyles = ["btn dropdown-toggle"]
    btnStyles.push(isActive ? "btn-info" : "btn-secondary")

    return (
        <fieldset className={fieldSetStyles.join(" ")}>
            <button className={btnStyles.join(" ")}
                    onClick={() => props.changeSort(props.field, isActive ? !props.currentSort.isAsc : false)}>
                {props.title}
            </button>
        </fieldset>
    )
}

export default Sort