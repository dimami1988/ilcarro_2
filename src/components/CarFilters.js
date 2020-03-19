import React from "react";
import apiManager from "./Data";
import CarFiltersDataSource from "./CarFiltersDataSourse";
import Dropdown from "react-bootstrap";
import DropdownButton from "react-bootstrap";

class CarFilters extends React.Component{

    dataSource = {};

    constructor() {
        super();
        this.setState({
            currentStep:""
        })
    }

    render() {
        const items =
            this.dataSource.getProducer().map(
                (item) => {
                    return <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                }
            );

        if(this.state.currentStep===''){
            return null;
        }

        return <div>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">

                {items}
            </DropdownButton>
        </div>;
    }

    componentDidMount() {

        apiManager.getFilters().then(
            (jsonData)=> {
                this.dataSource = new CarFiltersDataSource(jsonData);
                // const result = parceData
                this.setState({
                    currentStep: this.dataSource.currentStep()
                })
            }
            ,(err) => {
                debugger;
            })
    }
}

export default CarFilters;