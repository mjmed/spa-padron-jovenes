import { Divider, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
    return (
        <div style={{ marginTop: 100 }}>
            <div style={{ marginBottom: 8 }}>
                <Divider variant="middle" /> 
            </div>
            <Typography variant="body2" component="div" textAlign="center"> <span style={{ fontStyle: 'italic' }}>Free-Dev</span> &copy; 2021</Typography>
        </div>
    )
}
