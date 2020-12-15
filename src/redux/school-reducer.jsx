let initialState = {
    Lecture: {
        title: "",
        link: null,
        teachers: "",
        schools: [
            {school: "backend"},
            {school: "frontend"},
            {school: "design"},
            {school: "Все школы"}
        ],
        date: null,
        place: "",
    },
    Teachers: {
        name: "",
        link: null,
        about: ""
    }
};

const schoolReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}


export default schoolReducer;