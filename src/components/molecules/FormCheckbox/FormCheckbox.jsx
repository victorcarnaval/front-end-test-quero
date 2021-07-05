import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const FormCheckbox = ({
    label,
    name,
    onChange,
    checked
}) => {

    return (
        <div className="form-checkbox">
            <label
                className="form-checkbox__label"
            >
                <input
                    type="checkbox"
                    name={name}
                    onChange={onChange}
                    className="form-checkbox__field"
                    checked={checked}
                />
                {label}
            </label>
        </div>
    );
}

FormCheckbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool
};

export default React.memo(FormCheckbox);