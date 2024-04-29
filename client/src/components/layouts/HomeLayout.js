import React from 'react'
import { Container, Typography } from "@mui/material"
import Head from './LayoutComponents/Head'
import Footer from './LayoutComponents/Footer'

export default function HomeLayout(props) {
  return (
    <Container>
      <Head/>
      <Typography>HomeLayout</Typography>
      <Typography>Top</Typography>
      <main>{props.component}</main>
      <Typography>Bottom</Typography>
      <Footer/>
    </Container>
  )
}
