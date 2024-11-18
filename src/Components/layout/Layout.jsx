import React from 'react'
import Footer from '../9-Footer/Footer'
import Header from '../2-Header/Header'
import { Outlet } from 'react-router-dom'
import Language from '../1-language/Language'
import ContextProduct from '../contextproduct/ContextProduct'


export default function Layout() {

  return (
    <ContextProduct>
      <Language />
      <Header />
      <Outlet />
      <Footer />
    </ContextProduct>

  )
}
