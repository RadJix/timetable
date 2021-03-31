import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import s from "./Header.module.css";


class HeaderContainer extends React.Component {
    findTeachers() {
        console.log('findTeachers', this.searchInput.value);
        this.props.onFindTeachers(this.searchInput.value);
    }
    render() {
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
                                {/*<input type="text" className={s.lecturerName} onChange={(e) => setValue(e.target.value)} />*/}
                                <input type="text" ref={(input) => {this.props.searchInput = input}} />
                                <button onClick={this.findTeachers.bind(this)}>Find Teachers</button>
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
                {/*<div className={s.teachers}>
                {
                    filteredTeachers.map((teacher, index) => {
                        return (
                            <div  teacher={teacher} key={index}/>
                        )
                    })
                }
                </div>*/}
            </div>
        );
    }
}

export default HeaderContainer

{/*
const mapStateToProps = (state) => ({
    schools: state.school
});

*/}



