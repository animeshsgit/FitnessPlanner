import { Typography, Button, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <Typography sx={{ m: 1 }} variant="h1">Welcome to Fitness Planner</Typography>
                <Button onClick={() => navigate("/form")} variant='outlined' sx={{ m: 1 }}>Make my Plan</Button>
            </Box>

        </div>
    )
}

export default Home