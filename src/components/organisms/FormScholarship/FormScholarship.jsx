import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { FormSelect, FormCheckbox, FormRange } from '../../molecules';

import { useScholarshipContext } from '../../../context/ScholarshipContext';

const FormScholarship = ({ className }) => {
    const { cities, courses, formValues, setFormValues } = useScholarshipContext();

    const createOption = (opt) => ({ id: opt, value: opt });

    const cityOptions = useMemo(() => cities.sort().map(createOption), [cities]);

    const courseOptions = useMemo(() => courses.sort().map(createOption), [courses]);

    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    return (
        <form className={`${className ?? ''}`}>
            <FormSelect
                id="city"
                label="Selecione sua cidade"
                name="city"
                value={formValues.city}
                onChange={handleChange}
                options={cityOptions}
            />

            <FormSelect
                id="course"
                label="Selecione o curso de sua preferência"
                name="course"
                value={formValues.course}
                onChange={handleChange}
                options={courseOptions}
            />
            <div className="checkbox-group">
                <p className="checkbox-group__label">
                    Como você quer estudar?
                </p>
                <div className="checkbox-group__fields">
                    <FormCheckbox
                        name="presentCourse"
                        label="Presencial"
                        checked={formValues.presentCourse}
                        onChange={handleChange}
                    />
                    <FormCheckbox
                        name="onlineCourse"
                        label="A distância"
                        checked={formValues.onlineCourse}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <FormRange
                id="maxRange"
                label="Até quanto pode pagar?"
                name="maxRange"
                value={formValues.maxRange}
                onChange={handleChange}
            />
        </form>
    );
}

FormScholarship.propTypes = {
    className: PropTypes.string
};

export default React.memo(FormScholarship);