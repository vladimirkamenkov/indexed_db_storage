import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { MagicLabel } from '../MagicLabel';

export const MagicButton = () => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const magicHandler = () => {
        if (!loading) {
            navigator.serviceWorker.controller.postMessage({
                time: new Date(),
                text: "Write this text to IDB, please"
            });
        }
        setLoading(true);
    };

    useEffect(() => {
        navigator.serviceWorker.addEventListener('message', ({ data }) => {
            if (!data.exceptions.length) {
                setMessage(data.message);
                setTimeout(() => {
                    setMessage(null);
                    setLoading(false);
                }, 1000)
            }
        });
    }, []);

    return (
        <StyledContainer>
            <StyledButton
                onClick={magicHandler}
                disabled={loading}
            >
                Magic
            </StyledButton>
            <MagicLabel message={message} />
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    margin: 40px auto;
    max-width: 500px;
    text-align: center;
`;

const StyledButton = styled.button`
    width: 150px;
    height: 35px;
    font-size: 20px;
`;