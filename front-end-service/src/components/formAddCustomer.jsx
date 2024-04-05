import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, TextField, DialogActions } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const FormAddCustomer = ({ open, handleClose, handleSubmit }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Customer</DialogTitle>
            <Formik
                initialValues={{
                    name: '',
                    address: '',
                    city: '',
                }}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.resetForm();
                }}
            >
                {({ submitForm }) => (
                    <Form>
                        <DialogContent>
                            <Field as={TextField} name="name" label="Name" fullWidth margin="normal" />
                            <Field as={TextField} name="address" label="Address" fullWidth margin="normal" />
                            <Field as={TextField} name="city" label="City" fullWidth margin="normal" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={submitForm} color="primary">Add</Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default FormAddCustomer;
