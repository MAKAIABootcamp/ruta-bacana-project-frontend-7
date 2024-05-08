import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import './layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FooterMinimo from '../FooterMinimo/FooterMinimo';
import {useNavigate} from 'react-router-dom'


const Layout = () => {
  const navigate = useNavigate()
  const isAuthenticated = localStorage.getItem("isAuthenticated")
  console.log("isAuthenticated", isAuthenticated)

  useEffect(()=> {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if(!isAuthenticated){
      navigate('/login')
    }
  },[])

  return (
      <div>
        {
          isAuthenticated ? <>
          <Header />
          <Outlet/>          
          <Footer />                
          <FooterMinimo /> 
          </>: null
        }
    </div>
  )
}

export default Layout
