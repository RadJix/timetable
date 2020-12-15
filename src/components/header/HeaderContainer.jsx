import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";


class HeaderContainer extends React.Component {
    debugger;
    render() {
        return <Header {...this.props} />
    }
}
debugger;
const mapStateToProps = (state) => ({
    school: state.Lecture.schools
});




export default connect(mapStateToProps, {})(HeaderContainer);