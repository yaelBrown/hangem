import { Typography } from '@mui/material'
import React from 'react'

function Head() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap" rel="stylesheet"></link>
      </head>
      <Typography sx={{mx: "auto", py: 3, fontFamily: "Cedarville Cursive", textAlign: "center"}} variant="h1">Hangem</Typography>  
    </>
  )
}

export default Head