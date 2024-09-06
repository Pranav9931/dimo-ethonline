import React from 'react'
import { VehicleDetailsContainer } from './vehicleDetails.styles'
import { Lexus } from '../../assets'
import { Box, Typography } from '@mui/material'

const VehicleDetailSection = () => {
  return (
    <VehicleDetailsContainer
        style={{
            background: `url(${Lexus})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            minHeight: '800px',
            flex: 1,
            maxWidth: '1300px'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
        
            <Typography sx={{
                fontFamily: 'var(--main-font-med)',
                fontSize: '50px'
            }}>
                Lexus NX21
            </Typography>
            <Typography sx={{
                fontFamily: 'var(--main-font-reg)',
                fontSize: '15px',
                marginTop: '-5px'
            }}>
                Model 2021
            </Typography>

            <Typography sx={{
                fontFamily: 'var(--main-font-med)',
                fontSize: '20px',
                marginTop: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                <div style={{width: '10px', height: '10px', background: 'green', borderRadius: '50%'}}></div>HEALTH STATUS
            </Typography>
            <Typography sx={{
                fontFamily: 'var(--main-font-reg)',
                fontSize: '15px',
                marginTop: '-5px',
                color: 'green',
                marginLeft: '20px'
            }}>
                Healthy
            </Typography>
        </Box>

        
    </VehicleDetailsContainer>
  )
}

export default VehicleDetailSection