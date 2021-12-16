import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import { lighten } from "polished"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 60px;
  padding: 20px 0px;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const StaticButtonContainer = styled.div`
  transform: translate(50%, -50%);
  top: 90%;
  right: 10%;
  position: fixed;

  @media (max-width: 720px) {
    top: 90%;
    right: 20%;
  }
`

export const FabButton = styled(Fab)`
  && {
    background-color: ${props => props.theme.colors.primaryBlue};
    border-radius: 50%;
    color: ${props => props.theme.colors.primaryWhite};

    :hover {
      background-color: ${props => lighten(0.2, props.theme.colors.primaryBlue)}
    }
  }
`