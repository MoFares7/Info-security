import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const StudentTable = () => {
        const [students, setStudents] = useState([
                { id: 1, name: 'محمد فارس الدباس', degree: '' },
                { id: 2, name: 'علاء زامل', degree: '' },
                { id: 3, name: 'مرام منصور', material: '', degree: '' },
                { id: 4, name: 'شام الدباس', degree: '' },
                { id: 5, name: 'ابو عبدو', degree: '' },
        
        ]);

        const handleDegreeChange = (id, value) => {
                setStudents((prevStudents) =>
                        prevStudents.map((student) =>
                                student.id === id ? { ...student, degree: value } : student
                        )
                );
        };

        return (
                <TableContainer component={Paper}>
                        <Table>
                                <TableHead>
                                        <TableRow>
                                                <TableCell
                                                        sx={{
                                                                fontSize: { sm: 14, md: 20, xs: 22 },
                                                                borderBottom: '1px solid #000',
                                                                borderRight: '1px solid #000',
                                                                textAlign: 'center',
                                                                color: '#6C63FF',
                                                                alignContent: 'center',
                                                        }}
                                                >
                                                        اسم الطالب
                                                </TableCell>
                                                <TableCell
                                                        sx={{
                                                                fontSize: { sm: 14, md: 20, xs: 22 },
                                                                borderBottom: '1px solid #000',
                                                                borderRight: '1px solid #000',
                                                                borderLeft: '1px solid #000',
                                                                textAlign: 'center',
                                                                color: '#6C63FF',
                                                                alignContent: 'center',
                                                        }}
                                                >
                                                        الدرجة
                                                </TableCell>

                                        </TableRow>
                                </TableHead>
                                <TableBody>

                                        {students.map((student) => (
                                                <TableRow key={student.id}>
                                                        <TableCell
                                                                sx={{
                                                                        borderBottom: '1px solid #000',
                                                                        borderRight: '1px solid #000',
                                                                        textAlign: 'center',
                                                                        alignContent: 'center',
                                                                }}
                                                        >
                                                                {student.name}
                                                        </TableCell>
                                                        <TableCell
                                                                sx={{
                                                                        borderBottom: '1px solid #000',
                                                                        borderRight: '1px solid #000',
                                                                        borderLeft: '1px solid #000',
                                                                        textAlign: 'center',
                                                                        alignContent: 'center',
                                                                }}
                                                        >
                                                                <TextField
                                                                        fullWidth
                                                                        variant="outlined"
                                                                        value={student.degree}
                                                                        onChange={(e) => handleDegreeChange(student.id, e.target.value)}
                                                                />
                                                        </TableCell>

                                                </TableRow>

                                        ))}
                                   
                                </TableBody>
                        </Table>
                </TableContainer>
        );
};

export default StudentTable;
