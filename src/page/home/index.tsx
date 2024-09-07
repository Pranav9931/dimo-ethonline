import React from 'react'
import { HomepageContainer } from './index.styles'
import HomeSidebar from './Sidebar'
import VehicleDetailSection from './VehicleDetailSection'
import HomeBodySection from './HomeBody'

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
          <HomeSidebar />

          <VehicleDetailSection />
      </HomepageContainer>

      <HomeBodySection />
    </>
  )
}

export default Homepage