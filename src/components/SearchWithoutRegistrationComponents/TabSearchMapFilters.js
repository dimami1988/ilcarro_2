import {Link} from "react-router-dom";
import React from "react";

class TabSearchMapFilters extends React.Component {

    render() {
        return (
            <div>
                <div className={"tabContainer"}>
                    <Link to='/search'>
                        <div className={"searchTab"}>Search</div>
                    </Link>
                    <Link to='/filters'>
                        <div className={"filtersTab"}>Filters</div>
                    </Link>
                    <Link to='/map'>
                        <div className={"mapTab"}>Map</div>
                    </Link>
                </div>
                <div className={"tabDiv"}></div>
            </div>
        )
    }
}

export default TabSearchMapFilters;