'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Clock, Video, Users } from 'react-feather'
import { useRouter } from 'next/router'

const dashboard: React.FC = () => {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      //   localStorage.removeItem('login')
      const loginStatus = localStorage.getItem('login')
      if (loginStatus) {
        setLoggedIn(true)
      } else {
        router.push('/login')
      }
    }
  }, [router])

  return <>{loggedIn ? <p>Hello this is dashboard</p> : <p>Loading...</p>}</>
}

export default dashboard
