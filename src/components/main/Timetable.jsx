import React from 'react';
import c from './Timetable.module.css';
import Table from "./table/Table";


const Timetable = (props) => {
 /*   debugger;
    let tableElements =
        [...props.school.Lecture]
            .map(p => <Table title={p.interfaceLecture.title} teachers={p.interfaceLecture.teachers}
                           schools={p.interfaceLecture.schools} date={p.interfaceLecture.date} place={p.interfaceLecture.place}/>);*/
    return (
        <div className={c.content}>
            {/*{tableElements}*/}
            <Table />
        </div>
    );
}


export default Timetable

