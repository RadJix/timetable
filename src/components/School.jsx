import React from 'react';
import style from './School.module.css';
import {connect} from "react-redux";
import Header from "./header/Header";




class School extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Header {...this.props}
                        school={this.props.school} />
            </div>);

    }
}


let mapStateToProps = (state) => {
    return {
        school: state.school,
    }
}


const SchoolContainer = connect(mapStateToProps, {})(School);



export default SchoolContainer