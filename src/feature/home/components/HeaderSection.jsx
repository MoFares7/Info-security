import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderSection = ({ title, color, titlecolor }) => {
        return (
                <Box sx={{
                        width: '100%',
                        height: '10%',
                        backgroundColor: color,
                        textAlign: 'center',
                        alignContent: 'center',

                        border: '1px solid #000'
                }}>
                        <Typography sx={{
                                color: titlecolor,
                                p: 1,
                                fontSize: {
                                        sm: 14,
                                        md: 20,
                                        xs: 22
                                }
                        }}>
                                {title}
                        </Typography>
                </Box>
        )
}

export default HeaderSection
