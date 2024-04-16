import TabPanel from "./tabPanel.jsx";
import CustomTable from "./customTable.jsx";
import React from "react";
import {deleteCustomer, getCustomers} from "../service/service.js";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import DialogConfirmation from "./dialogConfirmation.jsx";

const header = ['No', 'Name', 'Address', 'City', 'Actions'];

const CustomerManagement = ({ serviceId }) => {
    const [value, setValue] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [currentCustomerId, setCurrentCustomerId] = React.useState(null);

    const transformedData = value.map(item => ({
        "No": item.no,
        "Name": item.nama,
        "Address": item.alamat,
        "City": item.kota,
        "Actions": (
            <div>
                <IconButton>
                    <EditIcon color="warning"/>
                </IconButton>
                <IconButton onClick={() => handleOpenDialog(item.no)}>
                    <DeleteIcon color="error"/>
                </IconButton>
            </div>
        )
    }));

    const handleGetAllCustomers = () => {
        getCustomers(serviceId).then((response) => {
            if (response.status === 200) {
                setValue(response.data)
            }
        }).catch((e) => {
            console.log(e)
        })
    }

    const handleDeleteCustomers = (customerId) => {
        deleteCustomer(serviceId, customerId).then((response) => {
            if (response.status === 200) {
                handleGetAllCustomers();
                setOpenDialog(false);
            }
        }).catch((e) => {
            console.log(e)
            setOpenDialog(false);
        })
    }

    const handleOpenDialog = (customerId) => {
        setCurrentCustomerId(customerId);
        setOpenDialog(true);
    };

    React.useEffect(() => {
        handleGetAllCustomers();
    }, [serviceId]);

    return (
        <React.Fragment>
            <DialogConfirmation
                title={"Confirm Delete"}
                desc={"Are you sure you want to delete this customer?"}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
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
        </React.Fragment>
    )
}

export default CustomerManagement;