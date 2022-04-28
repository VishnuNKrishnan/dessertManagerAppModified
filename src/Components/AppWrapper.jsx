import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import AddDesertPage from './AddDesertPage'
import './AppWrapper.css'
import DesertsChart from './DesertsChart'
import DesertsListPage from './DesertsListPage'
import LeftBarTab from './LeftBarTab'
import menuSymbol from '../uiAssets/menu.svg'
import BG from '../uiAssets/appBG.jpg'

function AppWrapper() {
  const { activePage, setActivePage, menuStatus, setMenuStatus } = useContext(
    UserContext,
  )

  return (
    <div className="appWrapper" style={{ backgroundImage: `url(${BG})` }}>
      <div className="leftBar">
        <LeftBarTab title={'New Dessert'} pageToSet={'addDessert'} />
        <LeftBarTab title={'Desserts List'} pageToSet={'dessertList'} />
        <LeftBarTab title={'Desserts Chart'} pageToSet={'dessertChart'} />
      </div>
      <div className="rightContent">
        {activePage == 'addDessert' ? <AddDesertPage /> : null}
        {activePage == 'dessertList' ? <DesertsListPage /> : null}
        {activePage == 'dessertChart' ? <DesertsChart /> : null}
      </div>
    </div>
  )
}

export default AppWrapper
