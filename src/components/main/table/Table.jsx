import React from 'react';
import s from './Table.module.css';

const Table = (props) => {
    return (
        <div className={s.table}>
            <div className={s.date}>{props.date}</div>
            <div className={s.place}>{props.place}</div>
            <div className={s.description}>dasdas</div>
            <div className={s.teachers}>dasdasdasd</div>
            <div className={s.schools}>{props.schools}</div>
        </div>
    )
}

export default Table;