import { NavbarContainer, NavbarImage, NavbarLocationSection, NavbarMidSection } from './navbar.styles'
import { Logo } from '../../assets'
import { Box, Button } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Box
        sx={{flex: 1}}
      >
        <NavbarImage src={Logo} />
      </Box>

      <NavbarMidSection>
        <Button
          sx={{
            background: '#00000020',
            color: '#000000',
            padding: '15px 20px',
            borderRadius: '20px',
            textTransform: 'none',
            fontFamily: 'var(--main-font-med)',
            fontSize: '20px'
          }}
        >
          Home
        </Button>

        <Button
          sx={{
            background: '#FFFFFF80',
            color: '#000000',
            padding: '15px 20px',
            borderRadius: '20px',
            textTransform: 'none',
            fontFamily: 'var(--main-font-med)',
            fontSize: '20px'
          }}
        >
          Services
        </Button>
      </NavbarMidSection>

      <NavbarLocationSection>
        <Box
          sx={{
            background: '#FFFFFF80',
            padding: '20px 20px',
            borderRadius: '20px',
            display: 'flex',
          }}
        >
          <FmdGoodIcon /> Your Location: <span style={{fontFamily: 'var(--main-font-med)', marginLeft: '10px'}}>{"Los Angeles"}</span>
        </Box>

        <Button
          sx={{
            background: '#FFFFFF80',
            color: '#000000',
            padding: '15px 20px',
            borderRadius: '20px',
            textTransform: 'none',
            fontFamily: 'var(--main-font-med)',
            fontSize: '20px'
          }}
        >
          <SettingsIcon />
        </Button>
      </NavbarLocationSection>
    </NavbarContainer>
  )
}

export default Navbar