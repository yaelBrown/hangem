import React from 'react'
import { Container, Typography } from "@mui/material"

export default function HomeLayout(props) {
  return (
    <Container>
      <Typography>HomeLayout</Typography>
      <Typography>Top</Typography>
      <main>{props.component}</main>
      <Typography>Bottom</Typography>
    </Container>
  )
}
