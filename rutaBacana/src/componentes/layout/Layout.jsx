import React from 'react'
import { Outlet } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  return (
      <div>
          <Outlet/>
    </div>
  )
}

export default Layout