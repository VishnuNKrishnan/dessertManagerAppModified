import React from 'react'
import './MobileNavBar.css'
import MobileNavBarTab from './MobileNavBarTab'
import ListLogo from '../uiAssets/list.svg'
import ChartLogo from '../uiAssets/chart.svg'

function MobileNavBar() {
  return (
    <div className="mobileNavHolder">
      <MobileNavBarTab title={'+'} pageToSet={'addDessert'} />
      <MobileNavBarTab title={ListLogo} pageToSet={'dessertList'} symbol />
      <MobileNavBarTab title={ChartLogo} pageToSet={'dessertChart'} symbol />
    </div>
  )
}

export default MobileNavBar
