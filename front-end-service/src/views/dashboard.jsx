import {Button, Grid, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";
import {AddCircleOutlineRounded} from "@mui/icons-material";
import CustomerManagement from "../components/customerManagement.jsx";

const Dashboard = () => {
    const [valueTabs, setValueTabs] = useState(0);

    const handleChangeTabs = (event, newValue) => {
        setValueTabs(newValue);
    }

    return (
        <Grid
            container
            spacing={4}
            flexDirection={"column"}
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

                <CustomerManagement serviceId={valueTabs} />

                <Grid item alignSelf={"flex-end"}>
                    <Button
                        variant='contained'
                        startIcon={<AddCircleOutlineRounded/>}
                        sx={{textTransform: "none"}}
                        onClick={() => {
                        }}
                    >
                        Add New Customer
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard;