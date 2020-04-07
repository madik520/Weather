import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, onKeyPress }) => {
    return(
        <input 
        type="text" 
        placeholder="Найди свой город" 
        value={value} 
        onChange={onChange} 
        onKeyPress={onKeyPress} 
        />
    )
};

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
}
Search.defaultProps = {
    value: "",
    onChange: () => {},
    onKeyPress: () => {}
}

export default Search;