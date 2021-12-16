import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: 20px 0px;

  align-items: center;
  justify-content: center;

  img + h3 {
    margin: 15px;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.primaryOrange};

  padding-right: 10px;

  @media (max-width: 720px) {
    font-size: 20px;
  }
`;