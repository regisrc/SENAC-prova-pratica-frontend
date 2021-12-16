import styled from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';

export const MaterialButton = styled(ButtonMaterial)`
  :hover {
    && {
      border-color: rgba(255, 255, 255, 0.8); 
    }

    .MuiButton-label { 
      color: rgba(255, 255, 255, 0.8);
    }
  }

  && {
    border-color: rgba(255, 255, 255, 1);
  }

  .MuiButton-label { 
    color: rgba(255, 255, 255, 1);
  }
`;