import PropTypes from 'prop-types';
import { Label, Input } from './FindContact.styled';
// import { Component } from 'react';

export const FindContact = ({filter, onChangeFilter }) => {
    return (
        <>
            <Label>
                <p>
                     Find contact by name
                </p>
                <Input
                    onChange={onChangeFilter}
                    type="text"
                    name="filter"
                    value={filter}
                    
                >
                </Input>
            </Label>
        </>
    )
}

FindContact.prppTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
}