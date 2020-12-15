import React from 'react';
import c from './Timetable.module.css';


const Timetable = (props) => {
    return (
        <div className={c.content}>
            <div className={c.date}>26.09</div>
            <div className={c.place}>{/*Кабинет, которого нет*/}{props.place}</div>
            <div className={c.description}>Дополнительная лекция</div>
            <div className={c.teachers}>{props.name}</div>
            <div className={c.school}>ШМД</div>
        </div>
    );
}




export default Timetable