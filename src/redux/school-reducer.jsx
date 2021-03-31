import {useState} from "react";

const FIND_TEACHERS = 'FIND_TEACHERS';

let initialState = {
    Lecture: [
        {
            interfaceLecture: {
                title: "Первая лекция",
                link: null,
                teachers: "Дмитрий Моруз",
                schools: ["backend", "frontend", "design"],
                date: 26.09,
                place: "Кабинет, которого нет",
            },
            interfaceTeachers: {
                name: "Дмитрий Моруз",
                link: null,
                about: ""
            }
        },
        {
            interfaceLecture: {
                title: "Дополнительная лекция",
                link: null,
                teachers: "Навальный А.Г",
                schools: ["backend", "frontend", "design"],
                date: 27.09,
                place: "Кабинет, которого нет",
            },
            interfaceTeachers: {
                name: "Навальный А.Г",
                link: null,
                about: ""
            }
        },
        {
            interfaceLecture: {
                title: "Алгоритмы и структры данных",
                link: null,
                teachers: "Стась А.Н",
                schools: ["backend", "frontend", "design"],
                date: 23.09,
                place: "УЛК 4/04",
            },
            interfaceTeachers: {
                name: "Стась А.Н",
                link: null,
                about: ""
            }
        },
        {
            interfaceLecture: {
                title: "Математический анализ",
                link: null,
                teachers: "Семешин Н.В",
                schools: ["backend", "frontend", "design"],
                date: 24.09,
                place: "256a",
            },
            interfaceTeachers: {
                name: "Семешин Н.В  ",
                link: null,
                about: ""
            }
        },
    ]
};


const schoolReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}



export const onFindTeachers = (name) => ({type: FIND_TEACHERS, payload: name})




export default schoolReducer;