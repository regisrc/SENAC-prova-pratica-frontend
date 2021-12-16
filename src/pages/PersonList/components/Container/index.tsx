import { Container, Title} from './styles';

import { IPerson } from '../../../../models/interfaces';

const ContainerComponent = (person: IPerson) => {
    return (
        <Container>
            <Title>{person.firstName}</Title>
        </Container>
    );
};

export default ContainerComponent;  