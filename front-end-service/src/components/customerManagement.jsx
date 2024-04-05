import TabPanel from "./tabPanel.jsx";
import CustomTable from "./customTable.jsx";
import React, {useEffect} from "react";
import {IconButton} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import {getCustomers} from "../service/service.js";

const header = ['Member Number', 'Name', 'Address', 'City', 'Actions'];

const CustomerManagement = ({ serviceId }) => {
    const [value, setValue] = React.useState([]);

    const transformedData = value.map(item => ({
        "Member Number": item.no,
        "Name": item.nama,
        "Address": item.alamat,
        "City": item.kota,
        "Actions": (
            <div>
                <IconButton>
                    <EditIcon color="warning" />
                </IconButton>
                <IconButton>
                    <DeleteIcon color="error" />
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

    React.useEffect(() => {
        handleGetAllCustomers();
    }, [serviceId]);

    return (
        <div>
            <TabPanel value={serviceId} index={0}>
                <CustomTable header={header} rows={transformedData}/>
            </TabPanel>
            <TabPanel value={serviceId} index={1}>
                <CustomTable header={header} rows={transformedData}/>
            </TabPanel>
        </div>
    )
}

export default CustomerManagement;