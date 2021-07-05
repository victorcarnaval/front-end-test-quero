import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const FormSelect = ({
    id,
    label,
    name,
    placeholder,
    onChange,
    options,
    value
}) => {

    return (
        <div className="form-select">
            <label
                className="form-select__label"
                htmlFor={id}
            >
                {label}
            </label>
            <select
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="form-select__field"
                value={value}
            >
                <option value=""></option>
                {options?.map(
                    (option) => (
                        <option key={option.id} value={option.id}>
                            {option.value}
                        </option>
                    )
                )}
            </select>
        </div>
    );
}

FormSelect.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string
};

export default React.memo(FormSelect);