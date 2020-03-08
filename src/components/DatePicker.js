import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class DatePicker1 extends Component {


    constructor(props){
        super(props)
        this.state = {date: moment()};
        this.dateChanged = this.dateChanged.bind(this);
        this.clear = this.clear.bind(this);
    }

    dateChanged(d){
        this.setState({date: d});
    }

    clear(){
        this.setState({date: null});
    }

    render() {
        return (
            <div>
                <DatePicker selected={this.state.date}
                            onChange={this.dateChanged} />
                <input type="button" onClick={this.clear} value="Clear"/>
            </div>
        );
    }
}


export default DatePicker1;
