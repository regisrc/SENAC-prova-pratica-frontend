import styled from 'styled-components';

import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.p`
  color: ${props => props.theme.colors.primaryWhite};

  display: flex;
  flex-direction: row;

  padding: 5px;

  b {
    margin-right: 4px;
  }
`;

export const Create = styled(CreateIcon)`
  color: ${props => props.theme.colors.primaryOrange};

  cursor: pointer;
`;

export const Close = styled(CloseIcon)`
  color: ${props => props.theme.colors.primaryOrange};

  cursor: pointer;
`;