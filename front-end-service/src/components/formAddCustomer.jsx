import React from 'react';
import {Dialog, DialogTitle, DialogContent, Button, TextField, DialogActions} from '@mui/material';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const FormAddCustomer = ({open, handleClose, handleSubmit}) => {
    const validationSchema = Yup.object({
        nama: Yup.string().required('Name is required'),
        alamat: Yup.string().required('Address is requires'),
        kota: Yup.string().required('City is required')
    })

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Customer</DialogTitle>
            <Formik
                initialValues={{
                    nama: '',
                    alamat: '',
                    kota: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm();
                }}
            >
                {({errors, touched, isSubmitting, submitForm}) => (
                    <Form>
                        <DialogContent>
                            <Field as={TextField}
                                   name="nama"
                                   label="Name"
                                   fullWidth
                                   margin="normal"
                                   error={touched.nama && Boolean(errors.nama)}
                                   helperText={touched.nama && errors.nama}
                                   required/>
                            <Field as={TextField}
                                   name="alamat"
                                   label="Address"
                                   fullWidth
                                   margin="normal"
                                   error={touched.alamat && Boolean(errors.alamat)}
                                   helperText={touched.alamat && errors.alamat}
                                   required/>
                            <Field as={TextField}
                                   name="kota"
                                   label="City"
                                   fullWidth
                                   margin="normal"
                                   error={touched.kota && Boolean(errors.kota)}
                                   helperText={touched.kota && errors.kota}
                                   required/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={submitForm} color="primary" disabled={isSubmitting}>Add</Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default FormAddCustomer;
