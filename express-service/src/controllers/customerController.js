import {createCustomer, getCustomers, updateCustomer, deleteCustomer} from "../models/customerModel.js";
import express from "express";

const router = express.Router();

export const createData = async (req, res) => {
    const { nama, alamat, kota } = req.body;
    try {
        const customer = await createCustomer({ nama, alamat, kota });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getData = async (req, res) => {
    try {
        const customers = await getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateData = async (req, res) => {
    const { no } = req.params;
    const { nama, alamat, kota } = req.body;
    const customerNo = parseInt(no);
    try {
        const customer = await updateCustomer(customerNo, { nama, alamat, kota });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteData = async (req, res) => {
    const { no } = req.params;
    const customerNo = parseInt(no);
    try {
        const customer = await deleteCustomer(customerNo);
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};