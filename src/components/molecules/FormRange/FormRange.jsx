import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import { toLocaleCurrency } from '../../../utils/currency';

const FormRange = ({
    id,
    label,
    name,
    onChange,
    value
}) => {

    return (
        <div className="form-range">
            <label
                className="form-range__label"
                htmlFor={id}
            >
                {label}
            </label>
            <p className="form-range__currency">
                {toLocaleCurrency(value * 100.0)}
            </p>
            <input
                id={id}
                type="range"
                name={name}
                onChange={onChange}
                className="form-range__field"
                value={value}
            />
        </div>
    );
}

FormRange.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default React.memo(FormRange);