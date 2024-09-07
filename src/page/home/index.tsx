import React from 'react'
import { HomepageContainer } from './index.styles'
import HomeSidebar from './Sidebar'
import VehicleDetailSection from './VehicleDetailSection'

const Homepage = () => {
  return (
    <HomepageContainer>
        <HomeSidebar />

        <VehicleDetailSection />

    </HomepageContainer>
  )
}

export default Homepage