import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import {DarkMode, LightMode} from '@mui/icons-material';

type Props = {
    toggleDarkMode: () => void;
    darkMode: boolean;
}

export default function NavBar({darkMode, toggleDarkMode}: Props) {
  return (
    <AppBar>
        <Toolbar>
            <Typography variant='h6'>UI Ecommerce</Typography>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode /> : <LightMode />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
