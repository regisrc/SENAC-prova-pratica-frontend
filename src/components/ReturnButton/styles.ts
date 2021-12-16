import styled from 'styled-components';

import Arrow from '@material-ui/icons/ArrowBack';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 

    justify-content: center;
    align-items: center;

    max-width: 64px;

    :hover {
        cursor: pointer;
    }
`;

export const ArrowBack = styled(Arrow)``;

export const Title = styled.p``;
