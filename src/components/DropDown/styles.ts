import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { lighten } from 'polished'

interface IDropDown {
    height: string;
    isActive: boolean;
}

export const Container = styled.div<IDropDown>`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primaryBlue};

    width: 95%;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.img`
    height: 32px;    

    @media (max-width: 720px) {
        height: 24px;
    }
`

interface IContentEnabled {
    isActive: boolean;
}

export const Content = styled.div<IContentEnabled>`  
    display: ${props => props.isActive ? "flex" : "none"};
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    background-color: ${props => lighten(0.1, props.theme.colors.primaryBlue)};
    padding: 10px;

    width: 95%;
    margin-bottom: 10px;
`;

export const ExpansionPanelStyled = styled(Accordion)`
  width: 95%;

  .MuiAccordionSummary-root {
    background-color: ${props => props.theme.colors.primaryBlue};
  }
`;

export const ExpansionPanelSummaryStyled = styled(AccordionSummary)`
`;

export const ExpansionPanelDetailsStyled = styled(AccordionDetails)`
  background-color: ${props => lighten(0.1, props.theme.colors.primaryBlue)};
`;

export const ExpandMoreIconStyled = styled(ExpandMoreIcon)`
  color: ${props => props.theme.colors.primaryOrange}
`;