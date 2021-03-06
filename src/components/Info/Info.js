import React from 'react';
import PropTypes from 'prop-types';


const Info = ({ weight, height, id, date, bmi, deleteCard }) => {
    const handleDelete = () => {
        deleteCard(id);
    }

    return (
        <div className="col m6 s12">
            <div className="card">
                <div className="card-content">
                    <span className="card-title" data-test="bmi">
                    BMI :{bmi}
                    </span>
                    <span data-test="weight">Weight : {weight}KG</span>
                    <span data-test="height">Height : {height}cm</span>
                    <span data-test="date">Date : {date}</span>
                </div>
                <button className="delete-btn" onClick={handleDelete}>
                    X
                </button>
            </div>
        </div>
    );
};

Info.propTypes = {
    weight: PropTypes.string,
    height: PropTypes.string,
    id: PropTypes.string,
    date: PropTypes.string,
    bmi: PropTypes.string,
    deleteCard: PropTypes.func
};

export default Info;
