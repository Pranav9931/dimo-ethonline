import React from 'react'
import { HomepageContainer } from './index.styles'
import HomeSidebar from './Sidebar'
import VehicleDetailSection from './VehicleDetailSection'
import ServicesSection from './ServicesSection'

const Homepage = () => {
  return (
    <HomepageContainer>
        <HomeSidebar />

        <VehicleDetailSection />

        {/* <ServicesSection /> */}
    </HomepageContainer>
  )
}

export default Homepage