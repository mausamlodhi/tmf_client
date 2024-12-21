import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { FooterComponent, HeaderComponent } from '../../components'

function PublicLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const [redirectpath, setRedirectPath] = useState('')

  useEffect(() => {
    if (redirectpath) {
      navigate(redirectpath)
    }
  }, [redirectpath])

  const checkURL = [
    '/',
    '/signup',
    '/login',
  ]

  return (
        <>
        <div className='container'>
          <HeaderComponent/>
          <Outlet />
          <FooterComponent/>
        </div>
        </>
  )
}

export default PublicLayout
