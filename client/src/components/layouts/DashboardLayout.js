import React from 'react'
import { Container, Typography } from "@mui/material"
import Head from './LayoutComponents/Head'
import Footer from './LayoutComponents/Footer'

export default function DashboardLayout(props) {
  return (
    <Container>
      <Head/>
      <main>{props.component}</main>
      <Footer/>
    </Container>
  )
}
