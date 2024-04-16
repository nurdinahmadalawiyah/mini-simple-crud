-- CreateTable
CREATE TABLE "customers" (
    "no" SERIAL NOT NULL,
    "nama" VARCHAR(50) NOT NULL,
    "alamat" TEXT NOT NULL,
    "kota" VARCHAR(50) NOT NULL,
    "source" VARCHAR(50),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("no")
);
