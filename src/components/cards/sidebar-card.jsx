import React from 'react';
import PropTypes from 'prop-types';


const SideBar = ({ items, handleSendClick }) => {
    return(
        <>
        <h2 className="sidebar-history">История поискa:</h2>
        <ul className="sidebar-list">
            {items.map(({ name }, i) => {
                return <li onClick={() => handleSendClick(name)} key={i + 1}>
                {name}
                </li>
            })}
        </ul>
        </>
    )
};

SideBar.propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func
};
SideBar.defaultProps = {
    items: [],
    onClick: () => {}
};

export default SideBar;