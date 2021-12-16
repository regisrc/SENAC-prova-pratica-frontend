import { useState, useEffect} from 'react';
import { AxiosResponse } from "axios"; 
import { useParams } from 'react-router';

import { Container, Input, StyledButton as Button } from './styles';

import Header from '../../components/Header';
import { IPerson } from '../../models/interfaces';

import { SavePerson, PutPerson, GetPerson } from '../../api/controllers/Person';

import SnackBar from '../../components/SnackBar';
import { SnackBarSeverity } from '../../models/enums';

const TeacherRegister = () => {
    const params = useParams<any>();

    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        open: false,
        severity: "",
        message: "",
    });

    const [pageState, setPageState] = useState({
        title: "",
        buttonTitle: "",
        update: false,
        id: ""
    });

    const [firstName, setFirstName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [experienceYears, setExperienceYears] = useState("");

    const handleSuccess = () => {
        setState({ open: true, severity: SnackBarSeverity.Success, message: "Salvo com sucesso!" });
    };

    const handleError = (message: string) => {
        setState({ open: true, severity: SnackBarSeverity.Error, message: message });
    };

    const [call, setCall] = useState<AxiosResponse | null | void>(null);

    useEffect(() => {
        let id = params.id;

        if (id != undefined)
            prepareUpdatePerson(id)
        else
            setPageState({title: "Inserir Pessoa", buttonTitle: "Inserir", update: false, id: ""});
    }, [])

    const prepareUpdatePerson = async (id: string) => {
        setPageState({title: "Atualizar Pessoa", buttonTitle: "Atualizar", update: true, id: id});

        const result = await GetPerson(id)

        setCall(result) 
    }

    useEffect(() => {
        if(call == null)
            return;

        const { data } = call

        setFirstName(data.firstName);
        setAge(data.age);
        setEmail(data.email);
        setExperienceYears(data.experienceYears);
    }, [call])

    const showData = async () => {
        setLoading(true)

        const data : IPerson = {
            "id": "null",
            "firstName": firstName,
            "age": parseInt(age),
            "email": email,
            "experienceYears": parseInt(experienceYears)
        }

        if (pageState.update)
            updatePerson(data)
        else 
            insertPerson(data);

        setLoading(false)
    }

    const insertPerson = async (data: IPerson) => {
        if (validateData(data))
            await SavePerson(data).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")
    }

    const updatePerson = async (data: IPerson) => {
        if (validateData(data))
            await PutPerson(data, pageState.id).then(handleSuccess).catch(() => handleError("Ocorreu um problema!"));
        else
            handleError("Existem problemas com os campos!")
    }

    const validateData = (data: IPerson) => {
        var temp = true;

        for (const [key, value] of Object.entries(data)) {
            if(value.length === 0) {
                temp = false;

                break;
            }
        }

        return temp;
    }

    return (
        <>
            <Header title={pageState.title} isReturnActive={true} path={"/"} />
            <SnackBar showButton={false} alertMessage={state.message} severity={state.severity} snackBarOpen={state.open} UseStateOpenControl={setState} />
            <Container>
                <Input value={firstName} label="Nome" onChange={(e) => setFirstName(e.target.value)} />
                <Input value={age} label="Idade" onChange={(e) => setAge(e.target.value)} />
                <Input value={email} label="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <Input value={experienceYears} label="Anos de experiência" onChange={(e) => setExperienceYears(e.target.value)} />
                <Button loading={loading} loadingPosition="center" variant="contained" onClick={() => showData()}>{pageState.buttonTitle}</Button>
            </Container>
        </>
    )
}

export default TeacherRegister;