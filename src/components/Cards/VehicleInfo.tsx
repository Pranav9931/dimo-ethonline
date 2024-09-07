import { VehicleInfoCardContainer, VehicleInfoCardContent } from './vehicleCard.styles'
import { Box, Typography } from '@mui/material'

const VehicleInfoCard = () => {
  return (
    <VehicleInfoCardContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <VehicleInfoCardContent style={{flex: 1}}>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              RANGE
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              61666
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              KM
          </Typography>
        </VehicleInfoCardContent>

        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              SPEED
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              14
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              KM/H
          </Typography>
        </VehicleInfoCardContent>

        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              FUEL
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              10
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              %
          </Typography>
      </VehicleInfoCardContent>
      </Box>
      

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              RANGE
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              313
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              KM
          </Typography>
        </VehicleInfoCardContent>

        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              ODOMETER
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '20px',
              margin: '7.5px 0'
          }}>
              50414
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              MK
          </Typography>
      </VehicleInfoCardContent>

        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              SPEED
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              14
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              DEG
          </Typography>
        </VehicleInfoCardContent>

        <VehicleInfoCardContent>
          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              LONGITUDE
          </Typography>
          <Typography sx={{
              fontFamily: 'var(--main-font-bold)',
              fontSize: '30px',
          }}>
              70
          </Typography>

          <Typography sx={{
              fontFamily: 'var(--main-font-med)',
              fontSize: '12px'
          }}>
              DEG
          </Typography>
      </VehicleInfoCardContent>

      </Box>
    </VehicleInfoCardContainer>
  )
}

export default VehicleInfoCard