import React, {useState} from 'react';
import s from './Header.module.css';
import Table from "../main/table/Table";


const Header = (props) => {
    debugger;
    const teachersItem =
        props.school.Lecture
            .map(item =>  item.interfaceLecture.teachers);
    const [value, setValue] = useState('');
    const filteredTeachers = teachersItem.filter(teacher => {
        return teacher.teachers.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={s.header}>
            <nav className={s.nav}>
                <form className={s.search__form}>
                    <div className={s.schools}>
                        <span>Школа</span>
                        <div>
                            <select className={s.school}>
                                <option value="allSchools">Все школы</option>
                                <option value="frontend">Frontend</option>
                                <option value="backend">Backend</option>
                                <option value="design">Design</option>
                            </select>
                        </div>
                    </div>
                    <div className={s.lecturers}>
                        <span>Лектор</span>
                        <div>
                            <input type="text" className={s.lecturerName} onChange={(e) => setValue(e.target.value)} />
                        </div>
                    </div>
                    <div className={s.date}>
                        <span>Дата лекции</span>
                        <div>
                            c <input type="date" id="start-date" className={s.start}/>
                            по <input type="date" id="end-date" className={s.end}/>
                        </div>
                    </div>
                </form>
            </nav>
            <div className={s.teachers}>
                {
                    filteredTeachers.map((teacher, index) => {
                        return (
                            <div  teacher={teacher} key={index}/>
                        )
                    })
                }s
            </div>
        </div>
    );
}



export default Header;