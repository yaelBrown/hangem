import React from 'react'
import { Container, Typography } from "@mui/material"
import Navbar from './DashboardLayoutComponents/Navbar'
import Head from './LayoutComponents/Head'
import Footer from './LayoutComponents/Footer'

export default function DashboardLayout(props) {
  return (
    <Container>
      <Head/>
      <Typography>DashboardLayout</Typography>
      <Navbar/>
      <main>{props.component}</main>
      <Typography>Bottom</Typography>
      <Footer/>
    </Container>
  )
}
