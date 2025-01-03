import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footor from './Footor'

function Layout() {
  return (
    <>
    <div className="h-screen flex flex-col">
      <div className="h-auto">
        <Navbar />
      </div>

      <div>
        <Outlet/>
      </div>

      <div className="h-auto">
        <Footor />
      </div>
    </div>
    </>
  )
}

export default Layout
