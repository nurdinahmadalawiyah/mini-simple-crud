import {createCustomer, getCustomers, updateCustomer, deleteCustomer} from "../models/customer.js";
import express from "express";

const router = express.Router();

router.post('/customer', async (req, res) => {
    const { nama, alamat, kota } = req.body;
    try {
        const customer = await createCustomer({ nama, alamat, kota });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/customer', async (req, res) => {
    try {
        const customers = await getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/customer/:no', async (req, res) => {
    const { no } = req.params;
    const { nama, alamat, kota } = req.body;
    const customerNo = parseInt(no);
    try {
        const customer = await updateCustomer(customerNo, { nama, alamat, kota });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/customer/:no', async (req, res) => {
    const { no } = req.params;
    const customerNo = parseInt(no);
    try {
        const customer = await deleteCustomer(customerNo);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;