import { 
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography
} from '@mui/material';

import LoginStyles from '../assets/css/LoginStyles';

export default function Login() {
  return (
    <>
      <Box sx={LoginStyles.LoginBox}>
        <Card variant="outlined">
          <CardContent>
            <Typography 
              color="text.secondary" 
              variant="h6"
              gutterBottom
            >
              Login
            </Typography>
            <TextField 
              sx={{ my: 1 }} 
              id="outlined-basic" 
              label="Username" 
              variant="outlined" 
            />
            <TextField 
              sx={{ my: 1 }} 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              type="password" 
            />
          </CardContent>
          <CardActions 
            sx={{ 
              mx: "auto", 
              justifyContent: "Space-Evenly" 
            }}>
              <Button variant="outlined">Register</Button>
              <Button variant="contained">Login</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

