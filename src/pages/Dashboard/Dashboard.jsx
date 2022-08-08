import React from 'react'
import DashboardDrawer from '../../components/DashboardDrawer'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <DashboardDrawer>
        <Outlet/>
    </DashboardDrawer>
  )
}

export default Dashboard