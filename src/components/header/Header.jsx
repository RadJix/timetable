import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
    /*let directionSchools =
        [...props.schools]
            .map(p => <Header school={p.school} />);*/
    return (
        <div className={s.header}>
            <nav className={s.nav}>
                <div className={s.schools}>
                    <span>Школа</span>
                    <div>
                        <select className={s.school}>
                            {/*<option>{directionSchools}</option>
                            <option>{directionSchools}</option>
                            <option>{directionSchools}</option>
                            <option>{directionSchools}</option>*/}
                        </select>
                    </div>
                </div>
                <div className={s.lecturers}>
                    <span>Лектор</span>
                    <div>
                        <input type="text" className={s.lecturerName}/>
                    </div>
                </div>
                <div className={s.date}>
                    <span>Дата лекции</span>
                    <div>
                        c <input type="date" id="start-date" className={s.start}/>
                        по <input type="date" id="end-date" className={s.end}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}



export default Header;