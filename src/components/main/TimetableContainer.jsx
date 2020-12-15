import React from 'react';
import {connect} from "react-redux";
import Timetable from "./Timetable";


class TimetableContainer extends React.Component {
    render() {
        return <Timetable {...this.props} />
    }
}

debugger;
const mapStateToProps = (state) => ({
    place: state.Lecture.place
});




export default connect(mapStateToProps, {})(TimetableContainer);