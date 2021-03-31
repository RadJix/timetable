import React from 'react';
import HeaderContainer from "./header/HeaderContainer";
import style from './School.module.css';
import Timetable from "./main/Timetable";
import {connect} from "react-redux";
import Header from "./header/Header";
import {onFindTeachers} from "../redux/school-reducer";




class School extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Header {...this.props}
                        school={this.props.school}
                        onFindTeachers={this.props.onFindTeachers}/>
               {/* <Timetable {...this.props}
                           school={this.props.school} />*/}
            </div>);

    }
}


let mapStateToProps = (state) => {
    return {
        school: state.school,
    }
}


const SchoolContainer = connect(mapStateToProps, {onFindTeachers})(School);



export default SchoolContainer