import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = (props) => {
    return (
        <input className={`input-field ${props.className ? props.className : 'message-box'}`} type={props.typeofinput || 'text'} id="" placeholder={props.data || "Data-input required"} />
    );
}
export default Heading;