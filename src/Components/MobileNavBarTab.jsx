import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import './MobileNavBarTab.css'

function MobileNavBarTab(props) {
  const { setActivePage, setMenuStatus } = useContext(UserContext)
  return (
    <div
      className={`mobileNavTab`}
      onClick={() => {
        setActivePage(props.pageToSet)
        setMenuStatus('inactive')
      }}
    >
      {props.symbol ? <img src={props.title} alt="" /> : <h2>{props.title}</h2>}
    </div>
  )
}

export default MobileNavBarTab
