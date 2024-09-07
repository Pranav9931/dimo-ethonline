import { ServiceContainerPrimary, ServicesSectionContainer, SmartAssitantContainer, TextFieldStyles } from './servicesSection.styles'
import { IconButton, TextField, Typography } from '@mui/material'

import SendIcon from  "@mui/icons-material/SendOutlined"

const ServicesSection = () => {
  return (
    <ServicesSectionContainer>
        <ServiceContainerPrimary>
            <Typography sx={{
                fontFamily: 'var(--main-font-med)',
                fontSize: '16px',
                marginBottom: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                SMART ASSISTANT
            </Typography>
            <SmartAssitantContainer>
                <TextField type='text' autoComplete='off' placeholder='Ask your smart assistant' sx={TextFieldStyles} />
                <IconButton aria-label="send" sx={{
                    borderRadius: '5px',
                    marginRight: '-5px'
                }}>
                    <SendIcon />
                </IconButton>
            </SmartAssitantContainer>
        </ServiceContainerPrimary>

        <ServiceContainerPrimary>
            <Typography sx={{
                fontFamily: 'var(--main-font-med)',
                fontSize: '16px',
                marginBottom: '10px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}>
                SMART ASSISTANT
            </Typography>
            <SmartAssitantContainer>
                <TextField type='text' autoComplete='off' placeholder='Ask your smart assistant' sx={TextFieldStyles} />
                <IconButton aria-label="send" sx={{
                    borderRadius: '5px',
                    marginRight: '-5px'
                }}>
                    <SendIcon />
                </IconButton>
            </SmartAssitantContainer>
        </ServiceContainerPrimary>
    </ServicesSectionContainer>
  )
}

export default ServicesSection