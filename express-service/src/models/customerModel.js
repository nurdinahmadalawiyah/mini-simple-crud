import { prismaClient } from "../prisma-client.js";

export const createCustomer = async (data) => {
    const { nama, alamat, kota } = data;
    return prismaClient.customer.create({
        data: {
            nama: nama,
            alamat: alamat,
            kota: kota,
            source: 'express'
        }
    });
};

export const getCustomers = async () => {
    return prismaClient.customer.findMany({
        where: {
            source: 'express'
        }
    });
}

export const updateCustomer = async (no, data) => {
    const { nama, alamat, kota } = data;
    return prismaClient.customer.update({
        where: {
            no: no
        },
        data: {
            nama: nama,
            alamat: alamat,
            kota: kota,
            source: 'express'
        }
    });
}

export const deleteCustomer = async (no) => {
    return prismaClient.customer.delete({
        where: {
            no: no
        }
    });
}