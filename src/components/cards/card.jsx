import React from 'react';
import PropTypes from 'prop-types';
import { ICON_API, ICON_SIZE } from "../data";


const Card = ({ items }) => {
    return(
        <>
            {items.map(({ id, icon, description, name, temp, humidity, pressure, speed }) => {
                return <li key={id} className="card-item">
                        <div className="card-icon-block">
                            <img src={`${ICON_API}${icon}${ICON_SIZE}`} alt="icon" />
                            <span>{description}</span>
                        </div>
                        <div className="card-text">
                            <h2>Город: {name}</h2>
                            <span>Температура: {temp}&deg;</span>
                            <span>Влажность: {humidity}</span>
                            <span>Давление: {pressure}</span>
                            <span>Скорость ветра: {speed} м/с</span>
                        </div>
                </li>
            })}
        </>

    )
};


Card.propTypes = {
    items: PropTypes.array
}
Card.defaultProps = {
    items: []
}

export default Card;