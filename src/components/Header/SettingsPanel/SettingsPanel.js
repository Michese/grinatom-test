import React from "react"
import Search from "./Search/Search"
import SettingsFilter from "./SettingsFilter/SettingsFilter"
import SettingsSort from "./SettingsSort/SettingsSort"

const SettingsPanel = (props) => {
    return (
        <section className="p-3">
            <Search changeSearch={props.changeSearch}/>
            <SettingsFilter books={props.books} changeFilters={props.changeFilters}/>
            <SettingsSort books={props.books} changeSort={props.changeSort} currentSort={props.currentSort}/>
        </section>
    )
}

export default SettingsPanel