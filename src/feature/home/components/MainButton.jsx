import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function MainButton({ title, backgroundColor, width }) {

        return (
                <Box>
                        <Button variant="contained" sx={{
                                backgroundColor : { backgroundColor },
                                width: { width },
                                m: 5
                        }}>
                                {title}
                        </Button>
                </Box>
        );
}