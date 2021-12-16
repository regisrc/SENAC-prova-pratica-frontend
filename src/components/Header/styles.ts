import styled from 'styled-components';

interface ICompleteDivControl {
    width: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row; 

    align-items: center;
    justify-content: space-between;

    height: 60px;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;
    padding: 10px;

    background-color: ${props => props.theme.colors.primaryBlue};

    z-index: 1000;

    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
`;

export const Title = styled.h2`
    color: ${props => props.theme.colors.primaryWhite};

    @media (max-width: 720px) {
        font-size: 20px;
    }
`;

export const CompleteDiv = styled.img<ICompleteDivControl>`
    width: ${props => props.width};
`;