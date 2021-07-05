import React, { createContext, useContext, useEffect, useState } from 'react';

const ScholarshipContext = createContext({});

const ScholarshipProvider = ({ children }) => {
    const [scholarships, setScholarships] = useState([]);
    const [cities, setCities] = useState([]);
    const [courses, setCourses] = useState([]);

    const filterData = (data) => {
        const citiesLoaded = [];
        const coursesLoaded = [];

        data.forEach((item) => {
            citiesLoaded.push(item.campus.city);
            coursesLoaded.push(item.course.name);
        });

        setScholarships(data);
        setCities([...new Set(citiesLoaded)]);
        setCourses([...new Set(coursesLoaded)]);
    }

    useEffect(() => {
        fetch('db.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(obj => filterData(obj));
    }, []);

    const store = {
        scholarships,
        cities,
        courses
    };

    return (
        <ScholarshipContext.Provider value={store}>
            {children}
        </ScholarshipContext.Provider>
    );
}

const useScholarshipContext = () => {
    const context = useContext(ScholarshipContext);
    return context;
}

export { useScholarshipContext, ScholarshipProvider };