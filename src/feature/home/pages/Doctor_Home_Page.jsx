import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import doctor from '../../../assets/images/doctor.svg';
import HeaderSection from '../components/HeaderSection';
import MainButton from '../components/MainButton';
import StudentTable from '../components/StudentsTable';

const DoctorHomePage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'محمد فارس الدباس', degree: '' },
    { id: 2, name: 'علاء زامل', degree: '' },
    { id: 3, name: 'مرام منصور', degree: '' },
    { id: 4, name: 'شام الدباس', degree: '' },
    { id: 5, name: 'ابو عبدو', degree: '' },
  ]);

  const [material, setMaterial] = useState('');


  const handleDegreeChange = (id, value) => {
    // Validation logic: Check if the entered value is a number between 0 and 100
    const isValidDegree = /^\d+$/.test(value) && Number(value) >= 0 && Number(value) <= 100;

    if (isValidDegree || value === '') {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, degree: value, isValidDegree } : student
        )
      );
    } else {
      console.log('القيمة المدخلة خاطئة');
    }
  };

  const handleMaterialChange = (value) => {
    // Validation logic: Add your desired validation for the material
    // For example, you can check if the material is not empty
    const isValidMaterial = value.trim() !== '';

    if (isValidMaterial || value === '') {
      setMaterial(value);
    } else {
      console.log('القيمة المدخلة خاطئة');
    }
  };

  const checkTableValidations = () => {
    const hasInvalidDegree = students.some((student) => !student.isValidDegree);
    return !hasInvalidDegree;
  };

  const handleMainButtonClick = () => {
    const isTableValid = checkTableValidations();

    if (isTableValid && material.trim() !== '') {
      console.log('الرجاء إدخال اسم المادة');
    } else {
      console.log('القيمة المدخلة خاطئة');
    }
  };


  return (
    <Box
      sx={{
        display: {
          sm: 'block',
          sm: 'block',
          md: 'flex',
          xl: 'flex'
        },
        width: '100%'
      }}
    >
      <Box sx={{
        width: {
          xs: '100%',
          sm: '100%',
          xl: '100%',
          md: '100%',
        },
        display: 'block',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <HeaderSection title='إدخال علامة طالب' color='#6C63FF' titlecolor='white' />

        <StudentTable students={students} handleDegreeChange={handleDegreeChange} />

        <Box sx={{ display: 'flex', pt: 1 }}>
          <Typography sx={{
            fontSize: { sm: 14, md: 20, xs: 22 },
            textAlign: 'center',
            color: '#6C63FF',
            alignContent: 'center',
          }}>اسم المادة</Typography>
          <TextField
            fullWidth
            placeholder='اسم المادة'
            variant="outlined"
            value={material}
            onChange={(e) => handleMaterialChange(e.target.value)}
            error={material.trim() === ''}
            helperText={material.trim() === '' ? 'الرجاء إدخال اسم المادة' : ''}
          />
        </Box>
        <MainButton
          title={'إدخال علامات الطلاب'}
          width="200px"
          backgroundColor="#6C63FF"
          onClick={handleMainButtonClick}
        />
      </Box>
      <Box sx={{
        p: 10,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
      }}>
        <img src={doctor} width='90%' height='100%' />
      </Box>
    </Box>
  );
};

export default DoctorHomePage;
