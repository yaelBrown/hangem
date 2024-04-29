import React from 'react'
import { Container, Typography } from "@mui/material"

export default function DashboardLayout(props) {
  return (
    <Container>
      <Typography>DashboardLayout</Typography>
      <Typography>Top</Typography>
      <main>{props.component}</main>
      <Typography>Bottom</Typography>
    </Container>
  )
}
