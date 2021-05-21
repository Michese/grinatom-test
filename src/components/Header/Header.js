import React from "react"
import SettingsPanel from "./SettingsPanel/SettingsPanel"
import Navbar from "./Navbar/Navbar"

const Header = (props) => {
    return (
        <header>
            <Navbar books={props.books} changeBookmark={props.changeBookmark}/>
            <SettingsPanel
                books={props.books}
                changeSearch={props.changeSearch}
                changeFilters={props.changeFilters}
                changeSort={props.changeSort}
                currentSort={props.currentSort}/>
        </header>
    )
}

export default Header