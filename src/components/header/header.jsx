import React from 'react';
import Icon from '../../styles/img/icon.png'

const Header = () => {
    return(
        <header>
            <div className="icon-section">
                <img src={Icon} alt="icon" />
                <h1>Wellcome to Weather APP</h1>
            </div>
        </header>
    )
};

export default Header;