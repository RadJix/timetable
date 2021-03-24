let initialState = {
    Lecture: [
        {
            interfaceLecture: {
                title: "Первая лекция",
                link: null,
                teachers: "Дмитрий Моруз, Ждан Филлипов",
                schools: [
                    {school: "backend"},
                    {school: "frontend"},
                    {school: "design"},
                    {school: "Все школы"}
                ],
                date: 26.09,
                place: "Кабинет, которого нет",
            },
            interfaceTeachers: {
                name: "",
                link: null,
                about: ""
            }
        },
        {
            interfaceLecture: {
                title: "Дополнительная лекция",
                link: null,
                teachers: "Дмитрий Моруз, Ждан Филлипов",
                schools: [
                    {school: "backend"},
                    {school: "frontend"},
                    {school: "design"},
                    {school: "Все школы"}
                ],
                date: 27.09,
                place: "Кабинет, которого нет",
            },
            interfaceTeachers: {
                name: "",
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


export default schoolReducer;