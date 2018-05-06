import React from 'react';
import {StyleRoot} from 'radium';
import '../styles/ICOItem.css';


class ICOItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render () {
        return (

        <div className="icoItem">
            <h3>{this.props.name}</h3>
            <p>Start Date: {this.props.startDate}</p>
            <p>End Date: {this.props.endDate}</p>
        </div>
           )
    }
}

export default ICOItem