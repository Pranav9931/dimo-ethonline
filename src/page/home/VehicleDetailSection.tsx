import React from 'react'
import { VehicleDetailsContainer } from './vehicleDetails.styles'
import { Lexus, Toyota } from '../../assets'
import { Typography } from '@mui/material'

const VehicleDetailSection = () => {
  return (
    <VehicleDetailsContainer
        style={{
            background: `url(${Toyota})`,
            backgroundSize: '100%',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            minHeight: '800px',
            flex: 1,
            maxWidth: '1300px'
        }}
    >
        <Typography sx={{
            fontFamily: 'var(--main-font-med)',
            fontSize: '50px'
        }}>
            Lexus NX21
        </Typography>
    </VehicleDetailsContainer>
  )
}

export default VehicleDetailSection