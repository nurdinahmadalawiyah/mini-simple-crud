import {Button, Grid, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";
import {AddCircleOutlineRounded} from "@mui/icons-material";
import CustomerManagement from "../components/customerManagement.jsx";
import FormAddCustomer from "../components/formAddCustomer.jsx";
import {createCustomer} from "../service/service.js";
import CustomSnackbar from "../components/CustomSnackbar.jsx";

const Dashboard = () => {
    const [valueTabs, setValueTabs] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [refreshData, setRefreshData] = useState(false);

    const handleChangeTabs = (event, newValue) => {
        setValueTabs(newValue);
    }

    const handleOpenAddDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleAddCustomer = (customerData) => {
        createCustomer(valueTabs, customerData)
            .then(() => {
                setSnackbarSeverity('success');
                setSnackbarMessage('Customer added successfully');
                setSnackbarOpen(true);
                setOpenDialog(false);
                setRefreshData(true);
            })
            .catch(error => {
                console.error('Failed to add customer', error);
                setSnackbarSeverity('error');
                setSnackbarMessage('Failed to add customer');
                setSnackbarOpen(true);
            });
    };

    const handleRefreshData = () => {
        setRefreshData(false);
    };

    return (
        <Grid
            container
            spacing={4}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid item width={"100%"}>
                <Typography variant="h4"
                            sx={{fontWeight: "semibold", textAlign: "center", color: "primary.main", my: 4}}>
                    Sample App List Customer
                </Typography>

                <Tabs value={valueTabs} onChange={handleChangeTabs} centered variant="fullWidth">
                    <Tab label={"ExpressJS"} sx={{textTransform: "none"}}/>
                    <Tab label={"NestJS"} sx={{textTransform: "none"}}/>
                </Tabs>

                <CustomerManagement serviceId={valueTabs} refreshData={refreshData} onRefreshData={handleRefreshData} />

                <Grid item alignSelf={"flex-end"}>
                    <Button
                        variant='contained'
                        startIcon={<AddCircleOutlineRounded/>}
                        sx={{textTransform: "none"}}
                        onClick={() => handleOpenAddDialog()}
                    >
                        Add New Customer
                    </Button>
                </Grid>
            </Grid>

            <FormAddCustomer
                open={openDialog}
                handleClose={handleCloseDialog}
                handleSubmit={handleAddCustomer}
            />

            <CustomSnackbar
                open={snackbarOpen}
                severity={snackbarSeverity}
                message={snackbarMessage}
                handleClose={() => setSnackbarOpen(false)}
            />
        </Grid>
    )
}

export default Dashboard;