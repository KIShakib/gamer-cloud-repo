import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Gamer Cloud`;
    }, [title])
};


export default useDynamicTitle;