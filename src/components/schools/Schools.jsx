import React, { useState } from "react";
import s from "./Schools.module.css";
import Table from "./table/Table";
import axios from "axios";

const Schools = () => {
  const [timetable, setTimetable] = useState([])

  axios.get('https://agazizov.pro/schedule-api')
      .then((response) => {
        setTimetable(response.data)
      })

  const bigDate = 9617580800000;

  const [teacherFilterValue, setTeacher] = useState("");

  const [schoolFilterValue, setSchoolFilterValue] = useState("");

  const [dateFilterBegin, setDateFilterBegin] = useState(0);

  const [dateFilterEnd, setDateFilterEnd] = useState(bigDate);


  const result = timetable.map((item) => {
    return {
      teacher: item.teachers.name,
      date: item.date,
      place: item.place,
      title: item.title,
      schools: item.schools.join(","),
    };
  }).filter((item) => {
    return (
      item.teacher
        .toLowerCase()
        .includes(teacherFilterValue.toString().toLowerCase()) &&
      schoolFilterValue !== null &&
      item.schools.toLowerCase().includes(schoolFilterValue.toLowerCase()) &&
      dateFilterBegin <= +item.date &&
      dateFilterEnd >= +item.date
    );
  });


  return (
    <div className={s.header}>
      <nav className={s.nav}>
        <form className={s.search__form}>
          <div className={s.schools}>
            <span>Школа</span>
            <div>
              <select
                className={s.school}
                onChange={(e) => setSchoolFilterValue(e.target.value)}
              >
                <option value="">Все направления</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="design">Design</option>
              </select>
            </div>
          </div>
          <div className={s.lecturers}>
            <span>Лектор</span>
            <div>
              <input
                type="text"
                className={s.lecturerName}
                onChange={(e) => setTeacher(e.target.value)}
              />
            </div>
          </div>
          <div className={s.date}>
            <span>Дата лекции</span>
            <div>
              c
              <input
                type="date"
                id="start-date"
                className={s.start}
                onChange={(e) => setDateFilterBegin(Date.parse(e.target.value))}
              />
              по
              <input
                type="date"
                id="end-date"
                className={s.end}
                onChange={(e) => setDateFilterEnd(Date.parse(e.target.value))}
              />
            </div>
          </div>
        </form>
      </nav>
      <div className={s.teachers}>
        {result.map((item, index) => (
          <Table
            key={index}
            teacher={item.teacher}
            place={item.place}
            title={item.title}
            schools={item.schools}
            date={new Date(item.date).toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
};


export default Schools;