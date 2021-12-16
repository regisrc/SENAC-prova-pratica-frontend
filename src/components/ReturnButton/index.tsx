import { useHistory } from "react-router-dom";

import { Container, Title, ArrowBack } from './styles';

interface IReturnButton {
    path?: string;
}

const ReturnButton = ({ path }: IReturnButton) => {
    const history = useHistory();

    const title = "voltar";

    return (
        <Container onClick={() => history.push(path!)}>
            <ArrowBack />
            <Title>{title.toUpperCase()}</Title>
        </Container>)
}

export default ReturnButton;