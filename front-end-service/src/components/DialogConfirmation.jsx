import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

function DialogConfirmation({ title, desc, openDialog, setOpenDialog, handleDeleteCustomer, currentCustomerId  }) {
    const handleClose = () => {
        setOpenDialog(false);
    };

    const confirmDelete = () => {
        handleDeleteCustomer(currentCustomerId);
        handleClose();
    };

    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle textAlign="center">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText textAlign="center">
                    {desc}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Box display="flex" justifyContent="center" width="100%">
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button color="error" onClick={() => confirmDelete()} autoFocus>
                        Delete
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>

    );
}

export default DialogConfirmation;
