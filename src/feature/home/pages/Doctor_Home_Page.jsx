import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import doctor from '../../../assets/images/doctor.svg';
import HeaderSection from '../components/HeaderSection';
import MainButton from '../components/MainButton';
import FormDoctor from '../components/Form_Doctor';
import StudentTable from '../components/StudentsTable';

const DoctorHomePage = () => {
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

        <StudentTable />

        <Box sx={{ display: 'flex' , pt:1 }}>
          <Typography sx={{
            fontSize: { sm: 14, md: 20, xs: 22 },
            textAlign: 'center',
            color: '#6C63FF',
            alignContent: 'center',
          }}>اسم المادة</Typography>
          <TextField
         
            fullWidth
            variant="outlined"
          //    value={student.material}
          />
        </Box>
        <MainButton
          title={'إدخال علامات الطلاب'}
          width='200px'
          backgroundColor='#6C63FF'
        />
      </Box>
      <Box sx={{
        p: 10,
        // width: '30%',
        display: 'flex',
        backgroundColor: '#ff0000,',
        alignContent: 'center',
        justifyContent: 'center'
      }}>
        <img src={doctor} width='90%' height='100%' />
      </Box>

    </Box >
  )

}

export default DoctorHomePage
