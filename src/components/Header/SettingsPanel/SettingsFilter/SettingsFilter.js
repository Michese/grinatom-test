import React from "react"
import Filter from "./Filter/Filter"
import titleFilters from "../../../json/titleFilters.json"

const SettingsFilter = (props) => {
    return (
        <section className="p-2">
            <h2 className="text-center">Фильтрация</h2>
            <div className="d-flex justify-content-between align-items-center">
                {
                    titleFilters.map((filter, key) => <Filter key={"filter_block" + key} books={props.books}
                                                              title={filter.title} field={filter.field}
                                                              changeFilters={props.changeFilters}/>
                    )
                }
            </div>
        </section>
    )
}

export default SettingsFilter