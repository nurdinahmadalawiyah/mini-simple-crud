import TabPanel from "./TabPanel.jsx";
import CustomTable from "./CustomTable.jsx";
import React from "react";
import {deleteCustomer, getCustomers, updateCustomer} from "../service/service.js";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import DialogConfirmation from "./DialogConfirmation.jsx";
import FormCustomer from "./FormCustomer.jsx";

const header = ['Customer Number', 'Name', 'Address', 'City', 'Actions'];

const CustomerManagement = ({serviceId, refreshData, onRefreshData, onSnackbar}) => {
    const [value, setValue] = React.useState([]);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [currentCustomerId, setCurrentCustomerId] = React.useState(null);
    const [selectedCustomer, setSelectedCustomer] = React.useState(null);

    const transformedData = value.map(item => ({
        "Customer Number": item.no,
        "Name": item.nama,
        "Address": item.alamat,
        "City": item.kota,
        "Actions": (
            <div>
                <IconButton onClick={() => handleEditCustomer(item)}>
                    <EditIcon color="warning"/>
                </IconButton>
                <IconButton onClick={() => handleOpenDeleteDialog(item.no)}>
                    <DeleteIcon color="error"/>
                </IconButton>
            </div>
        )
    }));

    const handleGetAllCustomers = () => {
        getCustomers(serviceId).then((response) => {
            if (response.status === 200) {
                setValue(response.data)
                onRefreshData();
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    const handleDeleteCustomers = (customerId) => {
        deleteCustomer(serviceId, customerId).then((response) => {
            if (response.status === 200) {
                handleGetAllCustomers();
                setOpenDeleteDialog(false);
                onSnackbar("Customer deleted successfully with " + (serviceId === 0 ? 'Express Service' : 'Nest Service'), "success");
            }
        }).catch((e) => {
            console.log(e)
            setOpenDeleteDialog(false);
            onSnackbar("Failed to delete customer", "error");
        })
    }

    const handleOpenDeleteDialog = (customerId) => {
        setCurrentCustomerId(customerId);
        setOpenDeleteDialog(true);
    };

    const handleEditCustomer = (customer) => {
        setSelectedCustomer(customer)
        setOpenEditDialog(true);
    }

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const handleUpdateCustomer = (updateData) => {
        updateCustomer(serviceId, selectedCustomer.no, updateData)
            .then(() => {
                handleGetAllCustomers();
                handleCloseEditDialog();
                onSnackbar("Customer updated successfully with " + (serviceId === 0 ? 'Express Service' : 'Nest Service'), "success");
            })
            .catch((e) => {
                console.error('Failed to update customer', e);
                setOpenEditDialog(false);
                onSnackbar("Failed to update customer", "error");
            })
    }

    React.useEffect(() => {
        if (refreshData) {
            handleGetAllCustomers();
        }
    }, [refreshData]);

    React.useEffect(() => {
        handleGetAllCustomers();
    }, [serviceId]);

    return (
        <React.Fragment>
            <DialogConfirmation
                title={"Confirm Delete"}
                desc={"Are you sure you want to delete this customer?"}
                openDialog={openDeleteDialog}
                setOpenDialog={setOpenDeleteDialog}
                handleDeleteCustomer={handleDeleteCustomers}
                currentCustomerId={currentCustomerId}
            />
            <div>
                <TabPanel value={serviceId} index={0}>
                    <CustomTable header={header} rows={transformedData}/>
                </TabPanel>
                <TabPanel value={serviceId} index={1}>
                    <CustomTable header={header} rows={transformedData}/>
                </TabPanel>
            </div>
            <FormCustomer
                open={openEditDialog}
                handleClose={handleCloseEditDialog}
                handleSubmit={handleUpdateCustomer}
                initialValues={selectedCustomer}
            />
        </React.Fragment>
    )
}

export default CustomerManagement;