import { useState } from 'react'

import { Container, Content, Create, Close } from "./styles";

import { IPerson } from "../../../../models/interfaces";

import { DeletePerson } from "../../../../api/controllers/Person";

import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ContentComponent = (person: IPerson, id: string) => {
  const history = useHistory();

  function DeleteData(id: string) {
    DeletePerson(id);

    handleClose()

    window.location.reload();
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Content>
          <b>Nome:</b> {person.firstName}
        </Content>
        <Content> 
          <b>Idade:</b> {person.age}
        </Content>
        <Content>
          <b>E-mail:</b> {person.email}
        </Content>
        <Content>
          <b>Anos de Experiência:</b> {person.experienceYears}
        </Content>
        <Content>
          <b>Opções:</b>
          <Create onClick={() => history.push(`/person/update/${person.id}`)} />
          <Close onClick={() => handleClickOpen()} />
        </Content>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja mesmo excluir a pessoa?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Se você excluir não poderá rever a pessoa na lista novamente!"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{"Cancelar"}</Button> 
          <Button onClick={() => DeleteData(person.id)} autoFocus>
            {"Confirmar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContentComponent;
