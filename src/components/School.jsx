import React from 'react';
import Header from "./header/Header";
import style from './School.module.css';
import Timetable from "./main/Timetable";
import {connect} from "react-redux";


class School extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <Header />
                <Timetable {...this.props}
                           school={this.props.school} />
            </div>);

    }
}

let mapStateToProps = (state) => {
    return {
        school: state.school
    }
}


const SchoolContainer = connect(mapStateToProps, {})(School);



export default SchoolContainer