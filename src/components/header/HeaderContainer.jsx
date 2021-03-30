import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";


class HeaderContainer extends React.Component {
    debugger;
    render() {
        return <Header {...this.props}
                       school={this.props.school} />
    }
}

const mapStateToProps = (state) => ({
    schools: state.school
});




export default connect(mapStateToProps, {})(HeaderContainer);