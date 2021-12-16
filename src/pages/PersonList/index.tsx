import { useEffect, useState } from 'react';
import { AxiosResponse } from "axios";

import { Container, StaticButtonContainer, FabButton } from './styles';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container';
import ContentComponent from './components/Content';

import { IPerson } from '../../models/interfaces';
import { GetPersons } from '../../api/controllers/Person';

import AddIcon from '@material-ui/icons/Add';

import { useHistory } from "react-router-dom";

const TeacherList = () => {
    const history = useHistory();
    const titleText = 'Listagem de pessoas';

    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        const asyncCall = async () => {
            const result = await GetPersons()

            setCall(result)
        };

        asyncCall();
    }, [])

    const noData = "Não existem dados :)";

    return (
        <>
            <Header title={titleText} isReturnActive={false} path={""} />
            <Container>
                {call?.data.length === 0 && <h2>{noData}</h2>}
                {call?.data.map((value: IPerson, index: number) =>
                    <DropDown key={index}
                        containerChildren={<ContainerComponent {...value} />}
                        contentChildren={<ContentComponent {...value} />} />
                )}
            </Container>
            <StaticButtonContainer>
                <FabButton onClick={() => history.push("/person/register")} color="primary" aria-label="add">
                    <AddIcon />
                </FabButton>
            </StaticButtonContainer>
        </>
    );
}

export default TeacherList;