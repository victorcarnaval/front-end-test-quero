import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
    id,
    label,
    type,
    name,
    placeholder,
    onChange
}) => {

    return (
        <div className="form-input">
            <label
                className="form-input__label"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="form-input__input"
            />
        </div>
    );
}

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

FormInput.defaultProps = {
    type: 'text'
};

export default React.memo(FormInput);