import React, { useEffect } from 'react';

import { MagicButton } from './components/MagicButton';

export default () => {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(() => {
                    console.log('Service Worker registered');
                });
        }
    }, []);

    return (
        <>
            <MagicButton/>
        </>
    )
};