import React from 'react';
import styled from 'styled-components';

export const MagicButton = () => {

    const magicHandler = () => {
        navigator.serviceWorker.controller.postMessage({
            time: new Date(),
            text: "Write this text to IDB, please"
        });
    };

    return (
        <StyledContainer>
            <StyledButton
                onClick={magicHandler}
            >
                Magic
            </StyledButton>
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