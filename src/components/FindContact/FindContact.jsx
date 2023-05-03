import PropTypes from 'prop-types';
// import { Component } from 'react';

export const FindContact = ({filter, onChangeFilter }) => {
    return (
        <>
            <label>
                Find contact by name
                <br />
                <input
                    onChange={onChangeFilter}
                    type="text"
                    name="filter"
                    value={filter}
                    
                >
                </input>
            </label>
        </>
    )
}

FindContact.prppTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}