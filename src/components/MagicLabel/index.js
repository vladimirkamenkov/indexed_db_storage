import React from 'react';
import styled from 'styled-components';

export const MagicLabel = ({ message }) => {
    return (
        <StyledLabel>
            {message && (
                <span
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </StyledLabel>
    )
};

const StyledLabel = styled.div`
    display: block;
    color: green;
    text-align: center;
    margin: 15px 0 0;
`;