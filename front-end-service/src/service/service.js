import axios from "axios";

const BASE_ENDPOINT = "/api/customer"

const getBaseUrl = (serviceId) => {
    return serviceId === 0 ? "http://localhost:3000" : "http://localhost:8000";
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
        const res = await axios.get(BASE_URL + BASE_ENDPOINT);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateCustomer = async (serviceId, customerId, bodyRequest) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        const res = await axios.put(BASE_URL + BASE_ENDPOINT + `/${customerId}`, bodyRequest);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCustomer = async (serviceId, customerId) => {
    const BASE_URL = getBaseUrl(serviceId);

    try {
        const res = await axios.delete(BASE_URL + BASE_ENDPOINT + `/${customerId}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};