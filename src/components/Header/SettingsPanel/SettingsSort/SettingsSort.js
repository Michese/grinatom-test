import React from "react";
import Sort from "./Sort/Sort";
import titleSort from "../../../json/titleSort.json"

const SettingsSort = (props) => {
    return (
        <section className="p-2">
            <h2 className="text-center">Сортировка</h2>

            <div className="d-flex justify-content-between align-items-center">
                {
                    titleSort.map((item, key) =>
                        <Sort
                            key={"sort_block" + key}
                            title={item.title}
                            field={item.field}
                            changeSort={props.changeSort}
                            currentSort={props.currentSort}/>
                    )
                }
            </div>
        </section>
    )
}

export default SettingsSort