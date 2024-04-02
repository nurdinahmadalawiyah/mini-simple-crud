-- CreateTable
CREATE TABLE "customers" (
    "no" SERIAL NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "alamat" TEXT NOT NULL,
    "kota" VARCHAR(50) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("no")
);

SELECT * FROM customers;