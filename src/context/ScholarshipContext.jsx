import React, { createContext, useContext, useEffect, useState } from 'react';

import * as STORAGE from '../utils/persist';

const ScholarshipContext = createContext({});

const ScholarshipProvider = ({ children }) => {
    const [scholarships, setScholarships] = useState([]);
    const [scholarshipsBase, setScholarshipBase] = useState([]);
    const [favorites, setFavorites] = useState({});
    const [cities, setCities] = useState([]);
    const [courses, setCourses] = useState([]);
    const [semester, setSemester] = useState(0);

    const [formValues, setFormValues] = useState({
        city: '',
        course: '',
        presentCourse: false,
        onlineCourse: false,
        maxRange: '10'
    });

    const [favoritesStorage, setFavoritesStorage] = useState(STORAGE.load());

    const sortByUniversityName = (a, b) => {
        if (a.university.name < b.university.name) {
            return -1;
        }
        if (a.university.name > b.university.name) {
            return 1;
        }
        return 0;
    }

    useEffect(() => {
        fetch('db.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setScholarshipBase(
                    data.sort(sortByUniversityName)
                )
            });
    }, []);

    useEffect(() => {
        if (scholarshipsBase.length === 0) {
            return;
        }

        const citiesLoaded = [];
        const coursesLoaded = [];

        scholarshipsBase.forEach((item) => {
            citiesLoaded.push(item.campus.city);
            coursesLoaded.push(item.course.name);
        });

        setCities([...new Set(citiesLoaded)]);
        setCourses([...new Set(coursesLoaded)]);
        setScholarships([...scholarshipsBase]);
    }, [scholarshipsBase]);

    useEffect(() => {
        let filtered = [...scholarshipsBase];

        if (formValues.city) {
            filtered = filtered.filter(item => item.campus.city === formValues.city);
        }
        if (formValues.course) {
            filtered = filtered.filter(item => item.course.name === formValues.course);
        }
        if (formValues.maxRange >= 0) {
            filtered = filtered.filter(item => item.price_with_discount <= (formValues.maxRange * 100));
        }
        if (formValues.presentCourse && !formValues.onlineCourse) {
            filtered = filtered.filter(item => item.course.kind === 'Presencial');
        }
        if (!formValues.presentCourse && formValues.onlineCourse) {
            filtered = filtered.filter(item => item.course.kind === 'EaD');
        }

        setScholarships(filtered);
    }, [formValues, scholarshipsBase]);

    // CRUD
    const save = () => {
        const favs = { ...favorites, ...favoritesStorage };

        setFavoritesStorage(favs);
        STORAGE.save(favs);
    };

    const remove = (obj) => {
        const hash = JSON.stringify(obj);
        const favs = { ...favoritesStorage };

        delete favs[hash];

        setFavoritesStorage(favs);
        STORAGE.save(favs);
    };

    const STORE = {
        scholarships,
        cities,
        courses,
        formValues,
        setFormValues,
        favorites,
        setFavorites,
        favoritesStorage,
        setFavoritesStorage,
        semester,
        setSemester,
        save,
        remove
    };

    return (
        <ScholarshipContext.Provider value={STORE}>
            {children}
        </ScholarshipContext.Provider>
    );
}

const useScholarshipContext = () => {
    const context = useContext(ScholarshipContext);
    return context;
}

export { useScholarshipContext, ScholarshipProvider };