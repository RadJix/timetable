import React from 'react';
import Header from "./header/Header";
import style from './School.module.css';
import Timetable from "./main/Timetable";


class School extends React.Component {


    render() {
        return (
            <div className={style.wrapper}>
                <Header />
                <Timetable />
            </div>);

    }
}



export default School