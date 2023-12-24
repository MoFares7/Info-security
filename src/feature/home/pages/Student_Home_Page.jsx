import { Box, Typography } from '@mui/material'
import React from 'react'
import MainButton from '../components/MainButton'
import student from '../../../assets/images/student.svg';
import HeaderSection from '../components/HeaderSection';
import DummeyMarks from './../components/dummyDataMarks';

const StudentHomePage = () => {
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
                                <HeaderSection title='علاماتي' color='#6C63FF' titlecolor='white' />
                                <Box sx={{
                                        display: {
                                                sm: 'block',
                                                sm: 'block',
                                                md: 'flex',
                                                xl: 'flex'
                                        },
                                        backgroundColor: '#C8C0C9 '
                                }}>
                                        <HeaderSection title='المادة' color={'white'} titlecolor='#6C63FF' />
                                        <HeaderSection title='الدرجة' color={'white'} titlecolor='#6C63FF' />

                                </Box>
                                <DummeyMarks />

                                <MainButton
                                        title={'استعلام عن علاماتي'}
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
                                <img src={student} width='90%' height='100%' />
                        </Box>

                </Box >
        )
}

export default StudentHomePage
