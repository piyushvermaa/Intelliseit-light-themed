'use client'

import React, { FC, useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import { StyledButton } from '@/components/styled-button'
import { Typography } from '@mui/material'

const AuthNavigation: FC = () => {
  const router = useRouter()
  const [loggedin, setLoggedIn] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('login')) setLoggedIn(true)
  }, [router])
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      {!loggedin && (
        <StyledButton disableHoverEffect={true} variant="outlined" onClick={() => router.push('/login')}>
          Sign In
        </StyledButton>
      )}
      {!loggedin && (
        <StyledButton disableHoverEffect={true} onClick={() => router.push('/signup')}>
          Sign Up
        </StyledButton>
      )}

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {loggedin && (
          <Typography style={{ marginTop: '1vh', marginRight: '.2vw' }}>{localStorage.getItem('userName')}</Typography>
        )}
        {loggedin && (
          <StyledButton
            disableHoverEffect={true}
            onClick={() => {
              localStorage.removeItem('login')
              localStorage.removeItem('userName')
              localStorage.removeItem('userMail')
              router.push('/login')
            }}
          >
            Log out
          </StyledButton>
        )}
      </div>
    </Box>
  )
}

export default AuthNavigation
