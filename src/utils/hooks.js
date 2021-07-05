import { useEffect, useState } from 'react';

export const useResize = (ref) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(ref.current.offsetWidth);
            setHeight(ref.current.offsetHeight);
        };

        if (ref.current) {
            handleResize();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [ref]);

    return { width, height };
}