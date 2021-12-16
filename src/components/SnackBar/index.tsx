import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { MaterialButton } from './styles';

import MuiAlert from '@material-ui/lab/Alert';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Snackbar from '@material-ui/core/Snackbar';

interface ISnackBarProps {
    buttonPath?: string;
    buttonMessage?: string;
    showButton: boolean;
    severity: string;
    snackBarOpen: boolean;
    alertMessage: string;
    UseStateOpenControl?: React.Dispatch<React.SetStateAction<{
        open: boolean;
        severity: string;
        message: string;
    }>>;
}

const SnackBar = ({buttonPath, buttonMessage, showButton, severity, snackBarOpen, alertMessage, UseStateOpenControl}: ISnackBarProps) => {
    const [state, setState] = useState(snackBarOpen);

    useEffect(() => {
        if(snackBarOpen)
            handleOpen()
    }, [snackBarOpen])

    const history = useHistory();

    const changePage = (page: string) => {
        history.push(page)
    }

    const handleOpen = () => {
        setState(true);
    };

    const handleClose = () => {
        setState(false);

        if(UseStateOpenControl !== undefined) UseStateOpenControl({ open: false, severity: "", message: "" });
    };

    const anchor: SnackbarOrigin = {
        vertical: 'top',
        horizontal: 'right'
    }

    function Alert(props: any) {
        return <MuiAlert action={showButton && (
            <MaterialButton variant="outlined" color="primary" onClick={() => changePage(buttonPath ?? "")}>
                {buttonMessage ?? "Message not supported"}
            </MaterialButton>)
        } elevation={6} variant="filled" {...props} />;
    }

    return (
        <Snackbar
            anchorOrigin={anchor}
            open={state}
            onClose={handleClose}
            autoHideDuration={6000}
            message="I love snacks"
            key={anchor.vertical + anchor.horizontal}
        >
            <Alert onClose={handleClose} severity={severity}>
                {alertMessage}
            </Alert>
        </Snackbar>
    );
};

export default SnackBar;