import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  div + div {
      margin: 5px 0px;
  }
`;

export const ButtonComponent = styled.button`
  width: 100px;
  height: 38px;
  margin: 10px 0px;
  margin-bottom: 20px;
  border-radius: 3px;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryGreen};
  color: ${(props) => props.theme.colors.primaryBlue};
  cursor: pointer;

  :hover {
    opacity: 90%;
  }

  :disabled {
    cursor: default;
    opacity: 100%;
    background-color: ${(props) => props.theme.colors.primaryGray};
  }
`;  