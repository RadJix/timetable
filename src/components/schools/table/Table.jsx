import React from "react";
import s from "./Table.module.css";
import PropTypes from "prop-types";

const Table = (props) => {
  return (
    <div className={s.table}>
      <div className={s.date}>{props.date}</div>
      <div className={s.place}>{props.place}</div>
      <div className={s.description}>{props.title}</div>
      <div className={s.teachers}>{props.teacher}</div>
      <div className={s.schools}>{props.schools}</div>
    </div>
  );
};

Table.propTypes = {
  date: PropTypes.string,
  place: PropTypes.string,
  title: PropTypes.string,
  teacher: PropTypes.string,
  schools: PropTypes.string,
};

export default Table;