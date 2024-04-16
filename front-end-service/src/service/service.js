import axios from "axios";

const BASE_ENDPOINT = "/api/customer"

const getBaseUrl = (serviceId) => {
    return serviceId === 0 ? import.meta.env.VITE_EXPRESS_BASE_URL : import.meta.env.VITE_NEST_BASE_URL;
};

export const createCustomer = async (serviceId, requestBody) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        return await axios.post(BASE_URL + BASE_ENDPOINT, requestBody)
    } catch (error) {
        console.log(error)
    }
}

export const getCustomers = async (serviceId) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        return await axios.get(BASE_URL + BASE_ENDPOINT);
    } catch (error) {
        console.log(error);
    }
};

export const updateCustomer = async (serviceId, customerId, bodyRequest) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        return await axios.put(BASE_URL + BASE_ENDPOINT + `/${customerId}`, bodyRequest);
    } catch (error) {
        console.log(error);
    }
};

export const deleteCustomer = async (serviceId, customerId) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        return await axios.delete(BASE_URL + BASE_ENDPOINT + `/${customerId}`);
    } catch (error) {
        console.log(error);
    }
};