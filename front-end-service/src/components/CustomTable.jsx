import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CustomTable({header, rows}) {
    console.log('Header:', header);
    console.log('Rows:', rows);
    return (
        <TableContainer component={Paper} style={{display: 'flex', justifyContent: 'center'}}>
            <Table sx={{minWidth: 650}} aria-label="custom table">
                <TableHead>
                    <TableRow>
                        {header.map((column, index) => (
                            <TableCell key={index} sx={{
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText'
                            }}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {header.map((columnName, cellIndex) => (
                                <TableCell key={cellIndex}>{row[columnName]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CustomTable;
