import React from "react";

const Filter = ({ filterBy, handler }) => {
    return (
        <div>filter by<input value={filterBy} onChange={handler}/></div>
    )
}

export default Filter;